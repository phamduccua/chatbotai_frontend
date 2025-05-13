import className from 'classnames/bind'
import style from './Button.module.scss'
const cx = className.bind(style)
function Button(
{
    children,
    small,
    className,
    disabled,
    onClick,
    medium,
 }
){
    const props = {
        onClick
    }
    if(disabled){
        delete props.onClick
    }
    const clasess = cx('container',{
        [className]: className,
        small,
        disabled,
        medium
    })
    return (
        <button className={clasess} {...props}>
            {children}
        </button>
    )
}
export default Button;