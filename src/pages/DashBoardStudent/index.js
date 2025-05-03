import className from 'classnames/bind'
import style from './DashBoardStudent.module.scss'
const cx = className.bind(style)
function DashBoardStudent(){
    return(
        <div className={cx('container')}>
            DashBoardStudent
        </div>
    )
}
export default DashBoardStudent;