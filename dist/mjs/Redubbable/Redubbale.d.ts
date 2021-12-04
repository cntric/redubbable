import React, { FC } from 'react';
/**
 * @description
 */
export declare type RedubbableProps = {
    dubbingStyle?: React.CSSProperties;
    staticStyle?: React.CSSProperties;
    prefix?: string;
    displayPrefix?: boolean;
    text?: string;
    suffix?: string;
    displaySuffix?: boolean;
    onSubmit?: (e: string) => void;
    breadCrumbSplit?: string;
    Crumb?: FC<{
        crumb: string;
    }>;
    Divider?: FC<{}>;
};
/**
 * @description
 */
export declare const Redubbable: FC<RedubbableProps>;
