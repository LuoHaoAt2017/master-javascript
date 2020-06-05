import React from 'react';
import ReactMarkdown from 'react-markdown';
import doc from './index.md';

function Home() {
    return (
        <div className='container'>
            <ReactMarkdown source={doc} escapeHtml={false}/>
        </div>
    )
}

export default Home;
