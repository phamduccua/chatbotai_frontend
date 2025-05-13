import className from 'classnames/bind'
import style from './Content.Module.scss'
import Programing from '../../../components/Excersise/Programing';
const cx = className.bind(style)
function Content({className}){
    return (
        <div className={className}>
            <Programing />
        </div>
    )
}
export default Content;