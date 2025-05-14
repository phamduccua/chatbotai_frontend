import { useState } from 'react';
import className from 'classnames/bind';
import style from './Solution.module.scss';
import CodeEditor from '../../../components/CodeEditor';
import Button from '../../../components/Button'
const cx = className.bind(style);

const options = [
  {
    code: "c",
    name: "C"
  },
  {
    code: "cpp",
    name: "C++"
  },
  {
    code: "java",
    name: "Java"
  },
  {
    code: "python",
    name: "Python"
  }
]
function Solution({program}) {
  const [code, setCode] = useState('');
  const [seclect,setSelect] = useState(options[0].code)
  if (!program) {
        return <p>Đang tải nội dung bài tập...</p>;
  }
  const testCases = program?.testCases;
  const handleOnchange = (newCode) => {
    setCode(newCode)
  }
  const hanldeChangeSelect = (data) => {
    setSelect(data)
  }
  const slice = (data) => {
        return data.split("\n")
    }
  const selectedOption = options.find(opt => opt.code === seclect);
  return (
    <div className={cx('container')}>
      <span className={cx('label')}>Ngôn ngữ lập trình ({selectedOption?.name})</span>
      <select
        className={cx('select')}
        onChange={(e) => hanldeChangeSelect(e.target.value)}
        value={seclect}
      >
        {
          options.map((item,index) => {
            return (
              <option
                key={index}
                value={item.code}
              >
                {item.name}
              </option>
            )
          })
        }
      </select>
      <CodeEditor
          className={cx('editor')}
          value={code}
          onChange={handleOnchange}
      />
      <span className={cx('label')}>Kết quả chạy thử</span>
          {
            testCases.map((item,index) => {
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
      <div className={cx('action')}>
        <Button small className={cx('btn-test')}>Chạy thử</Button>
        <Button small className={cx('btn-run')}>Nộp bài</Button>
        <div className={cx('result')}>Số test đã vượt qua</div>
      </div>
    </div>
  );
}

export default Solution;
