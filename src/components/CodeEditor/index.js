// import { useEffect } from 'react';
// import className from 'classnames/bind'
// import Editor from 'react-simple-code-editor';
// import Prism from 'prismjs';
// import "prismjs/themes/prism.css";
// import 'prismjs/components/prism-clike'; 
// import 'prismjs/components/prism-cpp'; 
// import 'prismjs/components/prism-python'; 
// import 'prismjs/components/prism-java';
// import style from './CodeEditor.module.scss'

// const cx = className.bind(style)
// function CodeEditor({ language, code, onCodeChange }) {
//   const prismLanguage = language === 'cpp' ? 'cpp' : language;

//   const highlight = code => {
//     try {
//       return Prism.highlight(
//         code,
//         Prism.languages[prismLanguage],
//         prismLanguage
//       );
//     } catch (e) {
//       console.error("Prism highlight error:", e);
//       return code;
//     }
//   };

//   useEffect(() => {
//     Prism.highlightAllUnder(document.getElementById('editor-container'));
//   }, [language, code]);

//   return (
//     <div id="editor-container" style={{ position: 'relative', margin: '10px 0' }} className={cx('container')}>
//       <Editor
//         value={code}
//         onValueChange={onCodeChange}
//         highlight={highlight}
//         padding={5}
//         style={{
//           fontFamily: '"JetBrains Mono", monospace',
//           fontSize: 14,
//           backgroundColor: '#fff',
//           borderRadius: '4px',
//           minHeight: '200px',
//           width: '100%',  
//           marginLeft: 20,
//         }}
//         textareaClassName="editor-textarea"
//         preClassName={`language-${prismLanguage}`} 
//       />
//     </div>
//   );
// }

// export default CodeEditor;
