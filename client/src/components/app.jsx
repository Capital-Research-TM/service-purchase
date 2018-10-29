import React from 'react'
import TopBar from './top-bar.jsx'
import MiddleBar from './middle-bar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <TopBar up={false} open={false}/>
            <MiddleBar up={true} open={false}/>
            </div>
        )
    }
}

export default App;