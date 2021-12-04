"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Redubbable_1 = require("./Redubbable");
function App() {
    const ref = (0, react_1.useRef)(null);
    const [isModaled, setModaled] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => {
                    setModaled(!isModaled);
                }, ref: ref, style: {
                    height: "100px",
                    width: "100px",
                    background: "pink"
                } }, void 0), (0, jsx_runtime_1.jsx)(Redubbable_1.Redubbable, { breadCrumbSplit: "/", prefix: "home/main/friend", text: "hello", suffix: "jeff/is/name" }, void 0)] }), void 0));
}
exports.default = App;
