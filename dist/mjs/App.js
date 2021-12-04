import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Redubbable } from './Redubbable';
function App() {
    const ref = useRef(null);
    const [isModaled, setModaled] = useState(false);
    return (_jsxs("div", { className: "App", children: [_jsx("div", { onClick: () => {
                    setModaled(!isModaled);
                }, ref: ref, style: {
                    height: "100px",
                    width: "100px",
                    background: "pink"
                } }, void 0), _jsx(Redubbable, { breadCrumbSplit: "/", prefix: "home/main/friend", text: "hello", suffix: "jeff/is/name" }, void 0)] }, void 0));
}
export default App;
