import React, {useState} from 'react';
import SidebarNavItem from './SidebarNavItem';
import {SidebarNavItemCollection} from '../shared/types';

type Props = {
    contents: string;
};

const SidebarNav = (items: SidebarNavItemCollection) => {
    return (
        <nav id="sidebar" class="sidebar">
            <div class="sidebar-content js-simplebar">
                <a class="sidebar-brand" href="index.html">
                    <span class="align-middle">AdminKit</span>
                </a>

                <ul class="sidebar-nav">

                    {items.items.map((item, index) => {
                        return <SidebarNavItem
                            contents={item.contents}
                            isHeader={item.isHeader}
                            link={item.link}
                            icon={item.icon}
                            isReactLink={item.isReactLink}
                            subItems={item.subItems}
                            itemBindId={item.itemBindId}
                        />
                    })}

                </ul>

                <div class="sidebar-cta">
                    <div class="sidebar-cta-content">
                        <strong class="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div class="mb-3 text-sm">
                            Are you looking for more components? Check out our premium version.
                        </div>
                        <a href="https://adminkit.io/pricing" target="_blank" class="btn btn-primary btn-block">Upgrade
                            to
                            Pro</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SidebarNav;

