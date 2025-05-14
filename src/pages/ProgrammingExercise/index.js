import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import className from 'classnames/bind'
import style from './ProgrammingExercise.module.scss'
import Header from '../../components/Header'
import Content from './Content'
import Solution from './Solution'
import * as request from '../../service/baitaplaptrinh'
const cx = className.bind(style)
function ProgrammingExercise(){
    const {code} = useParams();
    const [program,setProgram] = useState()
    useEffect(() => {
         const fetchData = async () => {
            const response = await request.getBaiTapLapTrinhById(code)
            setProgram(response)
         }
         fetchData()
    },[code])
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <div className={cx('exercise-header')}>
                    Bài tập: {program?.ten || ''}
                </div>
                 <div className={cx('body')}>
                    <Content program={program}/>
                    <Solution program={program}/>
                </div>
            </div>
        </>
    )
}
export default ProgrammingExercise;