import React, {useState} from 'react';
import {
    Link
} from 'react-router-dom';

import {SidebarNavItemType, SidebarNavItemTypeNoKey} from "../shared/types";

/**
 * Problem with recursive components.. How to manage their state at the root? (SidebarNav)
 *
 * @param props
 * @constructor
 */
const SidebarNavItem = (props: SidebarNavItemType) => {

    const [isCollapsed, setCollapsed] = useState(!!props.isCollapsed);

    /**
     * This is the default handler for this particular nav item. It will bubble up to SidebarNav
     *
     * @param e
     */
    const handleClick = (e) => {
        // do something else aside from the passed handler
        // ...

        props.onClick(props.link ? props.link : '');
    };

    /**
     * Renders the label of the nav item and icon if any
     *
     * @param props
     */
    const renderLabel = function (props: SidebarNavItemType) {
        return (
            <>
                {props.icon && <i className="align-middle" data-feather={props.icon}/>}
                <span className="align-middle">{props.contents}</span>
            </>
        );
    };

    /**
     * Renders the item as a link. When props.items is set (i.e., there are submenu items linked to this item)
     * the link will be rendered as a random string hash param. This hash will be used as the id of the submenu
     */
    const renderLink = function (props: SidebarNavItemType) {
        return (
            props.itemBindId ? (
                <a href={'#' + props.itemBindId} data-toggle="collapse" className="sidebar-link collapsed">
                    {renderLabel(props)}
                </a>
            ) : (
                props.isReactLink ? (
                    <Link className="sidebar-link" to={props.link}
                          onClick={handleClick}>{renderLabel(props)}</Link>
                ) : (
                    <a className="sidebar-link" href={props.link}
                       onClick={handleClick}>{renderLabel(props)}</a>
                )
            )
        );
    };

    const renderSubItems = function (items: SidebarNavItemTypeNoKey[]) {
        return (
            <>
                <ul id={props.itemBindId}
                    className={'sidebar-dropdown list-unstyled collapse ' + (isCollapsed ? 'show' : '')}
                    data-parent="#sidebar">


                    {items.map((item, index) => {

                        return <SidebarNavItem
                            key={(item.contents + item.link).replace(/\W/, '')}
                            contents={item.contents}
                            isHeader={item.isHeader}
                            icon={item.icon}
                            link={item.link}
                            isReactLink={item.isReactLink}
                            onClick={props.onClick}
                            activeUrl={props.activeUrl}
                        />
                    })}
                </ul>
            </>
        );
    };

    /**
     * Render the clickable item and sub-items if any
     * @param props
     */
    const render = function (props: SidebarNavItemType) {
        return (
            <>
                {props.link ? renderLink(props) : renderLabel(props)}
                {props.link && props.subItems && renderSubItems(props.subItems)}
            </>
        );
    };

    return (
        props.isHeader ? (
            <li className="sidebar-header">
                {props.contents}
            </li>
        ) : (
            <li className={'sidebar-item ' + (props.link === props.activeUrl ? 'active' : '')}>
                {render(props)}
            </li>
        )
    );
};

export default SidebarNavItem;
