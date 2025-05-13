import className from 'classnames/bind'
import style from './ProgrammingExercise.module.scss'
import Header from '../../components/Header'
import Content from './Content'
import Solution from './Solution'
const cx = className.bind(style)
function ProgrammingExercise(){
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <div className={cx('exercise-header')}>
                    Bài tập: Tìm số nguyên tố
                </div>
                 <div className={cx('body')}>
                    <Content />
                    <Solution />
                </div>
            </div>
        </>
    )
}
export default ProgrammingExercise;