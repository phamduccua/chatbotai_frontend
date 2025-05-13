import className from 'classnames/bind'
import style from './Content.module.scss'

const cx = className.bind(style)
function Content({program}){
    if (!program) {
        return <p>Đang tải nội dung bài tập...</p>;
    }
    const slice = (data) => {
        return data.split("\n")
    }
    return(
        <div className={cx('container', 'content')}>
            <span className={cx('label')}>Mô tả bài tập</span>
            {slice(program.deBai).map((item,index) => {
                return(
                    <p key={index} className={cx('highlighted-text', 'describe-article')}>
                        {item}
                    </p>
                )
            })}
            <sapn className={cx('label')}>Input:</sapn>
            {
                slice(program.yeuCauDauVao).map((item,index) => {
                    return(
                        <p className={cx('describe')} key={index}>
                            {item}
                        </p>
                    )
                })
            }
            <span className={cx('label')}>Ouput:</span>
            {
                slice(program.yeuCauDauVao).map((item,index) => {
                    return(
                        <p className={cx('describe')} key={index}>
                            {item}
                        </p>
                    )
                })
            }
            <span className={cx('label')}>Ví dụ:</span>
            <div className={cx('example-container')}>
                {
                    program.testCases.map((item,index) => {
                        const inputs = item.inputs;
                        const outputs = item.outputs;
                        return (
                            <div className={cx('example')} key={index}>
                                <div className={cx('box-input', 'highlighted-text',)}>
                                    <span>Input:</span>
                                    {
                                        inputs.map((item,index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        item.name !== "stdin" &&
                                                        <strong>{item.name}</strong>
                                                    }
                                                    {slice(item.description).map((item,index) => {
                                                        return (
                                                            <p key={index}>
                                                                {item}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={cx('box-output', 'highlighted-text',)}>
                                    <span>Output:</span>
                                    {
                                        outputs.map((item,index) => {
                                            return(
                                                <div key={index}>
                                                    {
                                                        item.name !== "stdout" &&
                                                        <strong>{item.name}</strong>
                                                    }
                                                    {
                                                        slice(item.description).map((item,index) => {
                                                            return(
                                                                <p key={index}>
                                                                    {item}
                                                                </p>
                                                            )
                                                            
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            <span className={cx('label')}>Giới hạn thời gian:</span>
            <span>{program.gioiHanThoiGian}s</span>
            <br></br>
            <span className={cx('label')}>Giới hạn bộ nhớ:</span>
            <span>{program.gioiHanBoNho}kb</span>
        </div>
    )
}
export default Content;