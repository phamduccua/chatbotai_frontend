import className from "classnames/bind";
import style from './Model.module.scss'
import Button from '../../../Button'
import { useEffect,useState } from "react";
import * as request from '../../../../service/baitaplaptrinh'
import * as requestThucHanh from '../../../../service/baithuchanh'
const cx = className.bind(style);

const level = [
    1,2,3
]
function Model({displayModel, hanldeDisplayModel,codeExersise}){
    const [excerSise, setExcerSise] = useState({
        ma: '',
        ten: '',
        deBai: '',
        yeuCauDauVao: '',
        yeuCauDauRa: '',
        gioiHanDauVao: '',
        gioiHanThoiGian: '',
        gioiHanBoNho: '',
        level: null,
        idBaiThucHanh: null
    });
    const [baiThucHanh,setBaiThucHanh] = useState({ listResult: [] })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setExcerSise(prev => ({
            ...prev,
            [name]: value
        }));
    };
    useEffect(() => {
        if (!codeExersise) {
            setExcerSise({
                id: null,
                ma: '',
                ten: '',
                deBai: '',
                yeuCauDauVao: '',
                yeuCauDauRa: '',
                gioiHanDauVao: '',
                gioiHanThoiGian: '',
                gioiHanBoNho: '',
                level: level[0],
                idBaiThucHanh: null
            });
        }
        else{
            const fetchData = async () => {
            try{
                    const response = await request.getBaiTapLapTrinhById(codeExersise)
                    setExcerSise(response)
            }catch(error){
                alert(error)
            }
            }
            if(codeExersise) fetchData();
        }
        const fetBaiThucHanh = async () => {
            try{
                const response = await requestThucHanh.getBaiThucHanh()
                setExcerSise(prv => ({
                    ...prv,
                    idBaiThucHanh: response.listResult[0].id
                }))
                setBaiThucHanh(response)
            }catch(error){
                alert(error)
            }
        }
        fetBaiThucHanh()
        
    },[codeExersise])
    const hanldeOnclick = async () => {
        if(excerSise.id === null){
            try{
                const response = await request.addBaiTapLapTrinh(excerSise)
                alert(response)
                window.location.reload();
            }catch(error){
                alert(error)
            }
        }
        else{
            try{
                const response = await request.updateBaiTapLapTrinh(excerSise)
                alert(response)
            }catch(error){
                alert(error)
            }
        }
    }
    const handleOnChange = (value) => {
        setExcerSise(prv => ({
            ...prv,
            level: value
        }))
    }
    const hanldeBaiThucHanh = (value) => {
        setExcerSise(prv => ({
            ...prv,
            idBaiThucHanh: Number(value)
        }))
    }
    if (!displayModel) return null;
    return (
        <div className={cx('container')}>
            <div className={cx('form-data')}>
                <div className={cx('title')}>
                    {
                        codeExersise ? ("Sửa bài tập") : ("Thêm bài tập")
                    }
                </div>
                <div className={cx('fomr-container')}>
                    <label>Mã bài tập</label>
                    <input
                        name="ma"
                        placeholder="Nhập mã bài tập"
                        value={excerSise.ma}
                        onChange={handleChange}
                    />
                    
                    <label>Tên bài tập</label>
                    <input
                        name="ten"
                        placeholder="Nhập tên bài tập"
                        value={excerSise.ten}
                        onChange={handleChange}
                    />

                    <label>Đầu bài</label>
                    <textarea
                        name="deBai"
                        placeholder="// Nhập đầu bài"
                        value={excerSise.deBai}
                        onChange={handleChange}
                    ></textarea>

                    <label>Yêu cầu đầu vào</label>
                    <textarea
                        name="yeuCauDauVao"
                        placeholder="// Nhập yêu cầu đầu vào"
                        value={excerSise.yeuCauDauVao}
                        onChange={handleChange}
                    ></textarea>

                    <label>Yêu cầu đầu ra</label>
                    <textarea
                        name="yeuCauDauRa"
                        placeholder="// Nhập yêu cầu đầu ra"
                        value={excerSise.yeuCauDauRa}
                        onChange={handleChange}
                    ></textarea>

                    <label>Giới hạn đầu vào</label>
                    <input
                        name="gioiHanDauVao"
                        placeholder="Nhập giới hạn đầu vào"
                        value={excerSise.gioiHanDauVao}
                        onChange={handleChange}
                    />

                    <label>Giới hạn thời gian</label>
                    <input
                        type="number"
                        name="gioiHanThoiGian"
                        placeholder="Nhập giới hạn thời gian"
                        value={excerSise.gioiHanThoiGian}
                        onChange={handleChange}
                    />

                    <label>Giới hạn bộ nhớ</label>
                    <input
                        type="number"
                        name="gioiHanBoNho"
                        placeholder="Nhập giới hạn bộ nhớ"
                        value={excerSise.gioiHanBoNho}
                        onChange={handleChange}
                    />
                    <select onChange={(e) => handleOnChange(e.target.value)} value={excerSise.level || 1}>
                        {level.map((item,index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })}
                    </select>
                    <select 
                        onChange={(e) => hanldeBaiThucHanh(e.target.value)} 
                        value={excerSise.idBaiThucHanh}
                    >
                        {baiThucHanh.listResult.map((item,index) => {
                            return (
                                <option key={index} value={item.id}>
                                    {item.ten}
                                </option>
                            )
                        })}
                    </select>
                    <div className={cx('action')}>
                        <Button
                            small 
                            className={cx('btn','add')}
                            onClick={hanldeOnclick}
                        >   
                        {
                            codeExersise ? ("Sửa") : ("Thêm")
                        }
                        </Button>
                        <Button small className={cx('btn','close')} onClick={() => hanldeDisplayModel(false)}>Đóng</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Model;