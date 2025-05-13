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
        path: "",
        name: "Quản lý lớp học",
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
    return(
        <div className={className}>
            <ul className={cx('options')}> 
                {
                    options.map((item,index) => {
                        return (
                            <li 
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