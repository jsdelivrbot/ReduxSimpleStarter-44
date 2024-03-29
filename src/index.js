import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBWkyIAQOSeJidl-bwP3KL-isyDsngnkDc";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      if (this.state.videos.length>0) {
        this.setState({ videos });
      } else {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    });
  }


  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 500);
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected = {(selectedVideo) => this.setState({selectedVideo}) }
          videos = {this.state.videos}
          />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
