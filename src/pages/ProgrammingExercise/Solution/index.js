import { useState } from 'react'; // Thêm useState
import className from 'classnames/bind'
import style from './Solution.module.scss'
// import CodeEditor from '../../../components/CodeEditor'

const cx = className.bind(style)

function Solution() {
//   const [language, setLanguage] = useState()
//   const [code, setCode] = useState();

  return (
    <div className={cx('container')}>
      <span className={cx('label')}>Code</span>
      <select 
        className={cx('select')}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="cpp">CPP</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      
      {/* <CodeEditor 
        language={language}
        code={code}        
        onCodeChange={setCode}
      /> */}
      
      <span className={cx('label')}>Kết quả chạy thử</span>
    </div>
  )
}
export default Solution;