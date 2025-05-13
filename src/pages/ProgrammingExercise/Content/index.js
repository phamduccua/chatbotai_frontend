import className from 'classnames/bind'
import style from './Content.module.scss'

const cx = className.bind(style)
function Content(){
    return(
        <div className={cx('container', 'content')}>
            <span className={cx('label')}>Mô tả bài tập</span>
            <p className={cx('highlighted-text', 'describe-article')}>
                Lập trình là một kỹ năng không chỉ đòi hỏi tư duy logic mà còn cần sự kiên nhẫn và khả năng giải quyết vấn đề. Khi viết một chương trình, người lập trình không chỉ đơn thuần ra lệnh cho máy tính mà còn truyền đạt ý tưởng, cấu trúc và quy trình xử lý thông tin một cách rõ ràng. Mỗi dòng mã đều góp phần vào việc xây dựng nên một hệ thống hoàn chỉnh, từ những ứng dụng đơn giản đến các hệ thống phức tạp phục vụ hàng triệu người dùng mỗi ngày.
            </p>
            <sapn className={cx('label')}>Input:</sapn>
            <p className={cx('describe')}>
                Lập trình là một kỹ năng không chỉ đòi hỏi tư duy logic mà còn cần sự kiên nhẫn và khả năng giải quyết vấn đề. Khi viết một chương trình, người lập trình không chỉ đơn thuần ra lệnh cho máy tính mà còn truyền đạt ý tưởng, cấu trúc và quy trình xử lý thông tin một cách rõ ràng. Mỗi dòng mã đều góp phần vào việc xây dựng nên một hệ thống hoàn chỉnh, 
            </p>
            <span className={cx('label')}>Ouput:</span>
            <p className={cx('describe')}>
                Lập trình là một kỹ năng không chỉ đòi hỏi tư duy logic mà còn cần sự kiên nhẫn và khả năng giải quyết vấn đề. Khi viết một chương trình, người lập trình không chỉ đơn thuần ra lệnh cho máy tính mà còn truyền đạt ý tưởng, cấu trúc và quy trình xử lý thông tin một cách rõ ràng. Mỗi dòng mã đều góp phần vào việc xây dựng nên một hệ thống hoàn chỉnh, 
            </p>
            <span className={cx('label')}>Ví dụ:</span>
            <div className={cx('example-container')}>
                <div className={cx('box-input', 'highlighted-text',)}>
                    <span>Input:</span>
                    <p>
                        10 30
                    </p>
                </div>
                <div className={cx('box-output', 'highlighted-text',)}>
                    <span>Output:</span>
                    <p>1</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}
export default Content;