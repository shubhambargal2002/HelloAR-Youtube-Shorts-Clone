import React, { useState } from "react";
import Video from "./components/Video";
import "./App.css";

function App() {
  const videos = [
    { src: "bappa.mp4", title: "bappa" },
    { src: "maharaj.mp4", title: "maharaj" },
    { src: "love.mp4", title: "love" },
    { src: "birthday.mp4", title: "birthday" },
    { src: "dandiya.mp4", title: "dandiya" },
    { src: "sit.mp4", title: "sit" },
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

  return (
    <Video
      src={videos[currentVideo].src}
      title={videos[currentVideo].title.charAt(0).toUpperCase() + videos[currentVideo].title.slice(1)}
      handleSwipe={handleSwipe}
      handleLike={handleLike}
      liked={likedStates[currentVideo]}
    />
  );
}

export default App;
