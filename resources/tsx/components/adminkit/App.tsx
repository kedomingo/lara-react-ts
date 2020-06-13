import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Text from './elements/Text';

const App = () => {

    const data = 'Hello World';

    return (
        <Text contents={data}></Text>
    );
};

export default App;


ReactDOM.render(<App/>, document.getElementById('app'));
