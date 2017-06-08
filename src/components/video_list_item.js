import React from 'react';

// in videolist, within videolistitem, we passed in the video as property video (props), so to access it here, props.video
// const VideoListItem ({video}) =>, is same as VideoListItem =(props) => { return ( const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {

  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
