import className from 'classnames/bind'
import style from './SlideBarAdmin.module.scss'
import { useState,useEffect } from 'react';

const cx = className.bind(style);
const options = [
    {
        path: "/manager/programing",
        name: "Quản lý bài tập"
    },
    {
        path: "#",
        name: "Quản lý môn học",
    },
    {
        path: "",
        name: "Quản lý người dùng",
    },
    {
        path: "",
        name:"Báo cáo thống kê",
    },
    {
        path:"",
        name: "Cài đặt hệ thống"
    }
]
function SlideBarAmin({className}){
    const [url,setUrl] = useState('')
    useEffect(() => {

        setUrl(window.location.pathname);
    },[url])
    const hanldeOnclick = (data) => {
        setUrl(data)
    }
    return(
        <div className={className}>
            <ul className={cx('options')}> 
                {
                    options.map((item,index) => {
                        return (
                            <li 
                                onClick={() => hanldeOnclick(item.path)}
                                key={index}
                                className={item.path === url ? cx('active') : ''}
                            >
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}
export default SlideBarAmin;