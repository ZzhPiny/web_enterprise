/// <reference types="react" />
import React from 'react';
export interface BreadcrumbItemProps {
    prefixCls?: string;
    separator?: React.ReactNode;
    href?: string;
}
export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
    static __ANT_BREADCRUMB_ITEM: boolean;
    static defaultProps: {
        prefixCls: string;
        separator: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        separator: React.Requireable<any>;
        href: React.Requireable<any>;
    };
    render(): JSX.Element;
}
