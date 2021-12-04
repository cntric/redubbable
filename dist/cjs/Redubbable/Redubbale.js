"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redubbable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("react");
/**
 * @description
 */
const Redubbable = ({ dubbingStyle, staticStyle, prefix, displayPrefix = true, text, suffix, displaySuffix = true, onSubmit, breadCrumbSplit, Crumb, Divider }) => {
    const inputRef = (0, react_2.useRef)(null);
    const [isRenaming, setRenaming] = (0, react_1.useState)(false);
    const handleClick = (e) => isRenaming ? e.stopPropagation() : undefined;
    const handleContextMenu = (e) => {
        var _a;
        e.preventDefault();
        e.target.focus();
        e.target.click();
        setRenaming(!isRenaming);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleFocus = (e) => { var _a; return [e.target.select(), (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus()]; };
    const [ghostText, setGhostText] = (0, react_1.useState)(text || "");
    const handleChange = (e) => setGhostText(e.target.value);
    const onKeyDown = (e) => {
        if (e.key === "Enter" && isRenaming) {
            setRenaming(false);
            onSubmit && onSubmit(prefix || "" + ghostText + suffix || "");
        }
        if (e.key === "Escape") {
            setRenaming(false);
        }
    };
    const perfixCrumbs = prefix ?
        prefix.split(breadCrumbSplit || prefix).map((crumb, index, arr) => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [Crumb ? (0, jsx_runtime_1.jsx)(Crumb, { crumb: breadCrumbSplit ? arr.slice(0, index + 1).join(breadCrumbSplit) : prefix }, void 0) : crumb, Divider ? (0, jsx_runtime_1.jsx)(Divider, {}, void 0) : breadCrumbSplit] }, void 0))
        : "";
    const suffixCrumbs = suffix ?
        suffix.split(breadCrumbSplit || suffix).map((crumb, index, arr) => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [Divider ? (0, jsx_runtime_1.jsx)(Divider, {}, void 0) : breadCrumbSplit, Crumb ? (0, jsx_runtime_1.jsx)(Crumb, { crumb: breadCrumbSplit ?
                        prefix || "" + text + breadCrumbSplit + arr.slice(0, index + 1).join(breadCrumbSplit)
                        : suffix }, void 0) : crumb] }, void 0))
        : "";
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: handleClick, onFocus: handleFocus, style: {
            pointerEvents: "auto",
        } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%"
            } }, { children: [prefix && displayPrefix &&
                    perfixCrumbs, (0, jsx_runtime_1.jsx)("input", { type: "text", ref: inputRef, style: isRenaming ?
                        dubbingStyle
                        : staticStyle, onContextMenu: handleContextMenu, onChange: handleChange, onKeyDown: onKeyDown, onSubmit: () => console.log("Hello!"), disabled: !isRenaming, autoFocus: isRenaming, defaultValue: text, size: (ghostText ? ghostText.length : 0) }, void 0), suffix && displaySuffix &&
                    suffixCrumbs] }), void 0) }), void 0));
};
exports.Redubbable = Redubbable;
