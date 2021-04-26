import React from 'react';
import { Button } from 'antd';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="geology">
                <h3>地质</h3>
                <Button onClick={() => this.handleClick('gene')}>地质呼叫基因</Button>
                <Button onClick={() => this.handleClick('root')}>地质呼叫个体</Button>
            </div>
        )
    }

    handleClick(opt) {
        window.parent.postMessage('消息来自地质');
    }

    componentDidMount() {
        window.addEventListener('message', function(evt) {
            console.log('地质收到消息: ', evt.data);
        });
    }
}

export default App;
