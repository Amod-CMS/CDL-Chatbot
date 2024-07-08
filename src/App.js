// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import CDLbot from './cdlChatBot';
import CDLbot from './CdlGenAi';

function App() {
    return (
        <Router>
            <CDLbot />
        </Router>
    );
}

export default App;
