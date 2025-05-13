import className from 'classnames/bind';
import Header from '../../components/Header'
import SlideBarAmin from '../../components/SlideBar/SlideBarAdmin';
import Content from './Content'
import style from './ManageProgramingQuestions.module.scss'
const cx = className.bind(style)
function ManagerProgramingQuestions(){
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <SlideBarAmin className={cx('slidebar')}/>
                <Content className={cx('content')} />
            </div>
        </>
        
    )
}
export default ManagerProgramingQuestions;