import React, {useState} from 'react';
import {SidebarNavItemType} from "../shared/types";

const SidebarNavItem = (props: SidebarNavItemType) => {

    const renderContents = function (props: SidebarNavItemType) {

        return (
            <>
                {props.icon && <i class="align-middle" data-feather={props.icon}/>}
                <span class="align-middle">{props.contents}</span>

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
                <a href={'#' + props.itemBindId} data-toggle="collapse" class="sidebar-link collapsed">
                    {renderContents(props)}
                </a>
            ) : (
                <a class="sidebar-link" href={props.link}>
                    {renderContents(props)}
                </a>
            )
        );
    };

    const render = function (props: SidebarNavItemType) {
        return (
            <>
                {
                    props.link ? renderLink(props) : renderContents(props)
                }
                {props.link && props.subItems && (
                    <ul id={props.itemBindId} class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                        {props.subItems.map((item, index) => {

                            console.log('Rendering sub item ' + item.contents);

                            return <SidebarNavItem
                                contents={item.contents}
                                isHeader={item.isHeader}
                                icon={item.icon}
                                link={item.link}
                                isReactLink={item.isReactLink}/>
                        })}
                    </ul>
                )}
            </>
        );
    };

    return (
        props.isHeader ? (
            <li class="sidebar-header">
                {props.contents}
            </li>
        ) : (
            <li class="sidebar-item">
                {render(props)}
            </li>
        )
    );
};

export default SidebarNavItem;

