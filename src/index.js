// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App />, document.getElementById('app'));

