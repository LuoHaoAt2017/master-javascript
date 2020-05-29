import React from 'react';
import ReactMarkdown from 'react-markdown';
import doc from '@/docs/原型和原型链/index.md';

function Prototype() {
    return (
        <div className='container'>
            <ReactMarkdown source={doc} escapeHtml={false}/>
        </div>
    )
}

export default Prototype;
