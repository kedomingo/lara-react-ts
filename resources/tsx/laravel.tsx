import React from 'react';

const componentRegistry = {
    FormsBasicInputs: require('./components/adminkit/demo/FormsBasicInputs').default,
};

class Laravel {

    render() {
        if (typeof window['renderLaravel'] !== 'function') {
            return;
        }
        let [component, params] = window['renderLaravel']();
        if (!component) {
            return;
        }
        if (typeof componentRegistry[component] === 'undefined') {
            console.log('Component ' + component +' is not in the registry. Check laravel.tsx');
        }

        const ComponentToRender = typeof componentRegistry[component] === 'function' ? componentRegistry[component] : null;
        if (ComponentToRender) {
            return <ComponentToRender/>;
        }
        return (
            <></>
        )
    }
}

export default Laravel;
