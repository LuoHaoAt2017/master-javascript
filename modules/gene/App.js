import React from 'react';
import { Button } from 'antd';
import './index.scss';

class App extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const targetUrl = `${window.location.origin}/geology.html`;
        return (
            <div className="gene">
                <h3>基因</h3>
                <Button onClick={this.handleClick}>基因呼叫生命体</Button>
                <iframe
                    id="geology"
                    src={targetUrl}
                    className="custom-iframe"
                    height="200"
                    width="200">
                </iframe>
            </div>
        )
    }

    handleClick() {
        window.parent.postMessage('消息来自基因');
    }

    componentDidMount() {
        window.addEventListener('message', function(evt) {
            console.log('message: ', evt.data);
        });
    }
}

export default App;
