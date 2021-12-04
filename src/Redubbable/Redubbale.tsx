import React, {ChangeEvent, FC, useState} from 'react';
import { useRef } from 'react';

/**
 * @description
 */
export type RedubbableProps = {
    dubbingStyle ? : React.CSSProperties,
    staticStyle ? : React.CSSProperties,
    prefix? : string,
    displayPrefix ? : boolean,
    text? : string,
    suffix ? : string
    displaySuffix ? : boolean,
    onSubmit?: (e : string)=>void,
    breadCrumbSplit ? : string,
    Crumb ? : FC<{crumb : string}>,
    Divider ? : FC<{}>
}

/**
 * @description 
 */
export const Redubbable : FC<RedubbableProps>  = ({
    dubbingStyle,
    staticStyle,
    prefix,
    displayPrefix = true,
    text,
    suffix,
    displaySuffix = true,
    onSubmit,
    breadCrumbSplit,
    Crumb,
    Divider
}) =>{

    const inputRef = useRef<HTMLInputElement>(null);

    const [isRenaming, setRenaming] = useState(false);

    const handleClick = (e : React.MouseEvent)=>isRenaming ? e.stopPropagation() : undefined;

    const handleContextMenu = (e : React.MouseEvent<HTMLInputElement>)=>{
        e.preventDefault();
        (e.target as HTMLInputElement).focus();
        (e.target as HTMLInputElement).click();
        setRenaming(!isRenaming);
        inputRef.current?.focus()
    }

    const handleFocus = (e : React.FocusEvent<HTMLInputElement>) => [e.target.select(), inputRef.current?.focus()];

    const [ghostText, setGhostText] = useState(text||"");

    const handleChange = (e : ChangeEvent<HTMLInputElement>)=>setGhostText((e.target as HTMLInputElement).value);

    const onKeyDown = (e : React.KeyboardEvent)=>{

        if(e.key === "Enter" && isRenaming){
            setRenaming(false);
            onSubmit && onSubmit(prefix||"" + ghostText + suffix||"");
        }

        if(e.key === "Escape"){
            setRenaming(false);
        }

    }

    const perfixCrumbs = prefix ?
    prefix.split(breadCrumbSplit||prefix).map((crumb, index, arr)=><>
        {Crumb ? <Crumb crumb={breadCrumbSplit ? arr.slice(0, index + 1).join(breadCrumbSplit) : prefix}/> : crumb}
        {Divider ? <Divider/> : breadCrumbSplit}
    </>)
    : ""
    const suffixCrumbs = suffix ? 
    suffix.split(breadCrumbSplit||suffix).map((crumb, index, arr)=><>
        {Divider ? <Divider/> : breadCrumbSplit}
        {Crumb ? <Crumb crumb={
            breadCrumbSplit ? 
            prefix || "" + text + breadCrumbSplit + arr.slice(0, index + 1).join(breadCrumbSplit) 
            : suffix
        }/> : crumb}
    </>)
    : ""


    return (
        <div  
        onClick={handleClick} 
        onFocus={handleFocus} 
        style={{
            pointerEvents: "auto",
        }}>
            <div style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%"
            }}>
                {prefix && displayPrefix && 
                perfixCrumbs}
                <input type="text"
                ref={inputRef}
                style={isRenaming ?
                    dubbingStyle 
                    : staticStyle
                }
                onContextMenu={handleContextMenu} 
                onChange={handleChange}
                onKeyDown={onKeyDown}
                onSubmit={()=>console.log("Hello!")}
                disabled={!isRenaming}
                autoFocus={isRenaming}
                defaultValue={text}
                size={(ghostText ? ghostText.length : 0)}/>
                {suffix && displaySuffix && 
                suffixCrumbs}
            </div>
        </div>

    )

}