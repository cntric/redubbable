import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useRef } from 'react';
/**
 * @description
 */
export const Redubbable = ({ dubbingStyle, staticStyle, prefix, displayPrefix = true, text, suffix, displaySuffix = true, onSubmit, breadCrumbSplit, Crumb, Divider }) => {
    const inputRef = useRef(null);
    const [isRenaming, setRenaming] = useState(false);
    const handleClick = (e) => isRenaming ? e.stopPropagation() : undefined;
    const handleContextMenu = (e) => {
        e.preventDefault();
        e.target.focus();
        e.target.click();
        setRenaming(!isRenaming);
    };
    const handleFocus = (e) => e.target.select();
    const [ghostText, setGhostText] = useState(text || "");
    const handleChange = (e) => setGhostText(e.target.value);
    const onKeyDown = (e) => {
        if (e.key === "Enter" && isRenaming) {
            setRenaming(false);
            onSubmit && onSubmit(`${prefix || ""}${breadCrumbSplit || ""}${ghostText}${breadCrumbSplit || ""}${suffix || ""}`);
        }
        if (e.key === "Escape") {
            setRenaming(false);
        }
    };
    const perfixCrumbs = prefix ?
        prefix.split(breadCrumbSplit || prefix).map((crumb, index, arr) => _jsxs(_Fragment, { children: [Crumb ? _jsx(Crumb, { crumb: breadCrumbSplit ? arr.slice(0, index + 1).join(breadCrumbSplit) : prefix }, void 0) : crumb, Divider ? _jsx(Divider, {}, void 0) : breadCrumbSplit] }, void 0))
        : "";
    const suffixCrumbs = suffix ?
        suffix.split(breadCrumbSplit || suffix).map((crumb, index, arr) => _jsxs(_Fragment, { children: [Divider ? _jsx(Divider, {}, void 0) : breadCrumbSplit, Crumb ? _jsx(Crumb, { crumb: breadCrumbSplit ?
                        prefix || "" + text + breadCrumbSplit + arr.slice(0, index + 1).join(breadCrumbSplit)
                        : suffix }, void 0) : crumb] }, void 0))
        : "";
    return (_jsx("div", { onClick: handleClick, onFocus: handleFocus, style: {
            pointerEvents: "auto",
        }, children: _jsxs("div", { style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%"
            }, children: [prefix && displayPrefix &&
                    perfixCrumbs, _jsx("input", { type: "text", ref: inputRef, style: isRenaming ?
                        dubbingStyle
                        : staticStyle, onContextMenu: handleContextMenu, onChange: handleChange, onKeyDown: onKeyDown, onSubmit: () => console.log("Hello!"), disabled: !isRenaming, autoFocus: isRenaming, defaultValue: text, size: (ghostText ? ghostText.length : 0) }, void 0), suffix && displaySuffix &&
                    suffixCrumbs] }, void 0) }, void 0));
};
