import { use, useEffect, useState } from 'react'
import className from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faPencil, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import style from './Programing.module.scss'
import Button from '../../Button'
import Model from './Model'
import * as request from '../../../service/baitaplaptrinh'
const cx = className.bind(style);
function Programing(){
    const [displayModel,setDisplayModel] = useState(false);
    const [codeExersise,setCodeExersise] = useState()
    const [excerSise,setExcerSise] = useState([])
    const hanldeDisplayModel = (data) => {
        setDisplayModel(data);
    }
    const hanldeOnClick = (code) => {
        setCodeExersise(code)
    }
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await request.getListBaiTapLapTrinh()
                setExcerSise(response.listResult)
            }catch(error){
                alert(error)
            }
        }
        fetchData()
    },[])
    const handleDelete = async (ids) => {
        try{
            const response = await request.deleteBaiTapLapTrinh(ids)
            alert(response)
            const newExcerSise = excerSise.filter(item => !ids.includes(item.id))
            setExcerSise(newExcerSise)
        }catch(error){
            alert(error)
        }
    }
    const hanldeDelete = async () => {
        let arr = document.getElementsByClassName('bai-tap')
        let ids = []
        Array.from(arr).forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            const hiddenInput = item.querySelector('input[type="hidden"]');
            if(checkbox && checkbox.checked && hiddenInput){
                ids.push(Number(hiddenInput.value))
            }
        })
        if(ids.length > 0) handleDelete(ids)
    }
    return(
        <>
            <div className={cx('container')}>
                <div className={cx('title')}>Danh sách bài tập lập trình</div>
                <div className={cx('action')}>
                    <Button
                        medium
                        className={cx('btn-add')}
                        onClick={() => {
                            hanldeOnClick(null);            
                            hanldeDisplayModel(true); 
                            }
                        }
                    >
                        Thêm bài tập
                    </Button>
                    <Button 
                        medium
                        className={cx('btn-delete')}
                        onClick={hanldeDelete}
                    >
                        Xóa bài tập
                    </Button>
                </div>
                <div className={cx('form-table')}>
                    <table className={cx('table')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Độ khó</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                excerSise.map((item,index) => {
                                    return (
                                        <tr key={index} className={'bai-tap'}>
                                            <td>
                                                <input type="hidden" value={item.id} />
                                                <input type="checkbox" />
                                                {index+1}
                                            </td>
                                            <td>
                                                <Link
                                                    to={"/programing/" + item.code}
                                                    className={cx('link')}
                                                >
                                                    {item.code}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link 
                                                    to={"/programing/" + item.code}
                                                    className={cx('link')} 
                                                >
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td>{item.level}</td>
                                            <td>
                                                <FontAwesomeIcon 
                                                    icon={faPencil} 
                                                    className={cx('icon')}
                                                    onClick={() => {
                                                        hanldeOnClick(item.code);
                                                        hanldeDisplayModel(true); 
                                                    }
                                                }/>
                                                <FontAwesomeIcon 
                                                    icon={faCircleXmark} 
                                                    className={cx('icon', 'warming')} 
                                                    onClick={() => handleDelete([item.id])}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Model
                listExcerSise = {excerSise}
                setListExcerSise={setExcerSise}
                codeExersise={codeExersise}
                displayModel={displayModel}
                hanldeDisplayModel={hanldeDisplayModel}
            />
        </>
        
    )
}
export default Programing;