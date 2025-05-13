import className from 'classnames/bind'
import style from './Header.module.scss'

const cx = className.bind(style)
function Headers(){
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>LMS Platform</div>
            <div className={cx('avatar')}>Avata</div>
        </div>
    )
}
export default Headers;