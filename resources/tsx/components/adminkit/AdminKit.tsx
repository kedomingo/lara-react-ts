import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import MainNav from './nav/MainNav';
import SidebarNav from './nav/SidebarNav';
import Footer from './Footer';

const AdminKit = () => {
    const renderContents = function() {
        return (
            <div>
                <h1>Sample Content</h1>
                <hr />
                <p>
                    Lorm ipsum
                </p>
            </div>
        );
    };

    return (
        <div class="wrapper">
            <SidebarNav contents={''}/>
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
