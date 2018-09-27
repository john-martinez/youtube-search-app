import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YoutubeSearchApp from './components/youtube-search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<YoutubeSearchApp />, document.getElementById('root'));
registerServiceWorker();
