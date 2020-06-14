import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import MainNav from './nav/MainNav';
import SidebarNav from './nav/SidebarNav';
import Footer from './Footer';

const AdminKit = () => {

    /**
     * SidebarNavItemType[]
     */
    const sidebarItems = [
            // {
            //     contents: string,
            //     icon: string,
            //     link: string,
            //     isReactLink: boolean,
            //     isHeader: boolean,
            // }
            {
                contents: 'Pages',
                isHeader: true,
            },
            {
                contents: 'Dashboard',
                icon: 'sliders',
                link: '/admin',
            },
            {
                contents: 'Profile',
                icon: 'user',
                link: '/profile',
            },
            {
                contents: 'Settings',
                icon: 'settings',
                link: '/settings',
            },
            {
                contents: 'Invoice',
                icon: 'credit-card',
                link: '/invoice',
            },
            {
                contents: 'Blank',
                icon: 'book',
                link: '/blank',
            },


            {
                contents: 'Tools & Components',
                isHeader: true,
            },
            {
                contents: 'UI Elements',
                icon: 'briefcase',
                link: 'ui-elements',
                itemBindId: 'uielements',
                subItems: [
                    {contents: 'Alerts', link: '/ui-alerts',},
                    {contents: 'Buttons', link: '/ui-buttons',},
                    {contents: 'Cards', link: '/ui-cards',},
                    {contents: 'General', link: '/ui-general',},
                    {contents: 'Grid', link: '/ui-grid',},
                    {contents: 'Modals', link: '/ui-modals',},
                    {contents: 'Typography', link: '/ui-typography',},
                ]
            },
            {
                contents: 'Icons',
                icon: 'coffee',
                link: '/icons-feather',
            },
            {
                contents: 'Forms',
                icon: 'check-circle',
                link: 'ui-forms',
                itemBindId: 'uiforms',
                subItems: [
                    {contents: 'Form Layouts', link: '/forms-layouts',},
                    {contents: 'Basic Inputs', link: '/forms-basic-inputs',},
                ]
            },
            {
                contents: 'Tables',
                icon: 'tables-bootstrap',
                link: '/list',
            },

        
            {
                contents: 'Plugins & Addons',
                isHeader: true,
            },
            {
                contents: 'Charts',
                icon: 'bar-chart-2',
                link: '/charts-chartjs',
            },
            {
                contents: 'Maps',
                icon: 'map',
                link: '/maps-google',
            },

        ]
    ;

    const renderContents = function () {
        return (
            <div>
                <h1>Sample Content</h1>
                <hr/>
                <p>
                    Lorm ipsum
                </p>
            </div>
        );
    };

    return (
        <div class="wrapper">
            <SidebarNav items={sidebarItems}/>
            <div class="main">
                <MainNav contents={''}/>

                <main class="content">
                    {renderContents()}
                </main>

                <Footer contents={''}/>
            </div>
        </div>
    );
};

export default AdminKit;

if (document.getElementById('adminkit') !== null) {
    ReactDOM.render(<AdminKit/>, document.getElementById('adminkit'));
}
