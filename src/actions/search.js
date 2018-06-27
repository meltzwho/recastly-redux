import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from '../../node_modules/redux-thunk';

var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return function thunk(dispatch){
    return searchYouTube({query: q, key: YOUTUBE_API_KEY}, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));

    });
  };
};

export default handleVideoSearch;
