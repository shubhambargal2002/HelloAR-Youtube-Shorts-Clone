import React, { useState } from "react";
import Video from "./components/Video";
import "./App.css";

function App() {
  const videos = [
    { src: "bappa.mp4", title: "Video 1" },
    { src: "maharaj.mp4", title: "Video 2" },
    { src: "love.mp4", title: "Video 2" },
    { src: "birthday.mp4", title: "Video 2" },
    { src: "dandiya.mp4", title: "Video 2" },
    { src: "sit.mp4", title: "Video 2" },
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Initialize liked states for each video
  const initialLikedStates = Array(videos.length).fill(false);
  const [likedStates, setLikedStates] = useState(initialLikedStates);

  const handleLike = () => {
    // Copy the array to avoid mutating the state directly
    const newLikedStates = [...likedStates];
    newLikedStates[currentVideo] = !newLikedStates[currentVideo];
    setLikedStates(newLikedStates);
  };

  const handleSwipe = (direction) => {
    if (direction === "up" && currentVideo < videos.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else if (direction === "down" && currentVideo > 0) {
      setCurrentVideo((prev) => prev - 1);
    }
  };

  // Extracting file name from the src
  const fileName = videos[currentVideo].src.split(".")[0];

  return (
    <Video
      src={videos[currentVideo].src}
      title={fileName}
      handleSwipe={handleSwipe}
      handleLike={handleLike}
      liked={likedStates[currentVideo]}
    />
  );
}

export default App;
