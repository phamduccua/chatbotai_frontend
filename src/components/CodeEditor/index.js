// npm install @uiw/react-codemirror @codemirror/lang-javascript @codemirror/theme-one-dark lệnh tải
// npm install @uiw/codemirror-theme-github
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { oneDark,oneLight } from "@codemirror/theme-one-dark";
import { githubLight } from "@uiw/codemirror-theme-github";

function CodeEditor({code, onChange, className}) {
  return (
    <CodeMirror
      placeholder="// Nhập code của bạn vào đây"
      className={className}
      value={code}
      height="300px"
      extensions={[javascript()]}
      onChange={(value) => onChange(value)}
      theme={githubLight}
    />
  );
}

export default CodeEditor;