import className from 'classnames/bind'
import style from './DashBoardStudent.module.scss'
import ChatBot from '../ChatBot';
const cx = className.bind(style)
function DashBoardStudent(){
    return(
        <div className={cx('container')}>
            <ChatBot />
        </div>
    )
}
export default DashBoardStudent;