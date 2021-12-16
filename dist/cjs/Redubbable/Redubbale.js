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
        e.preventDefault();
        e.target.focus();
        e.target.click();
        setRenaming(!isRenaming);
    };
    const handleFocus = (e) => e.target.select();
    const [ghostText, setGhostText] = (0, react_1.useState)(text || "");
    const handleChange = (e) => setGhostText(e.target.value);
    const onKeyDown = (e) => {
        console.log("Responding to...", e);
        if (e.key === "Enter" && isRenaming) {
            setRenaming(false);
            onSubmit && onSubmit(`${prefix || ""}${breadCrumbSplit || ""}${ghostText}${breadCrumbSplit || ""}${suffix || ""}`);
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
                alignItems: "center"
            } }, { children: [prefix && displayPrefix &&
                    perfixCrumbs, (0, jsx_runtime_1.jsx)("input", { type: "text", ref: inputRef, style: isRenaming ?
                        dubbingStyle
                        : staticStyle, onContextMenu: handleContextMenu, onChange: handleChange, onKeyDown: onKeyDown, disabled: !isRenaming, autoFocus: isRenaming, defaultValue: text, size: (ghostText ? ghostText.length : 0) }, void 0), suffix && displaySuffix &&
                    suffixCrumbs] }), void 0) }), void 0));
};
exports.Redubbable = Redubbable;
