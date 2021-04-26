import React from 'react';
import { Button } from 'antd';
import './index.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: '/chapter0',
        }
    }

    render() {
        const targetUrl = `${window.location.origin}/gene.html`;
        return (
            <div className='container chapter1'>
                <h3>伊甸园之河</h3>
                <Button onClick={() => this.handleClick('gene')}>个体呼叫基因</Button>
                <div className='content'>
                    <iframe
                        id="gene"
                        src={targetUrl}
                        className="custom-iframe"
                        height="400"
                        width="400">
                    </iframe>
                </div>
            </div>
        );
    }

    handleClick(opt) {
        const geneIframe = document.querySelector('#gene');
        const origin = window.location.origin;
        geneIframe.contentWindow.postMessage('消息来自个体', '*');
    }

    componentDidMount() {
        window.addEventListener('message', function(evt) {
            console.log('message: ', evt.data);
        });
    }
}

export default App;
