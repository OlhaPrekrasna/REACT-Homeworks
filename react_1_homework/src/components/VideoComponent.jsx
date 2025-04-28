import React from "react";

const VideoComponent = () => {
  return (
    <div>
      <h2>Это видео</h2>
      <iframe
        width="320"
        height="240"
        src="https://www.youtube.com/embed/wIyHSOugGGw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
