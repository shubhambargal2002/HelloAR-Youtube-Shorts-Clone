import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CommentSvg, DownSvg, LikeSvg, ShareSvg, UpSvg } from "../svg";

const Video = ({ src, title, handleSwipe }) => {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const videoRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && inView) {
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error("Autoplay failed:", error);
            });
        }
      }
    };

    if (document.visibilityState === "visible" && document.hasFocus()) {
      playVideo();
    }

    const visibilityChangeHandler = () => {
      if (document.visibilityState === "visible" && document.hasFocus()) {
        playVideo();
      } else {
        videoRef.current && videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", visibilityChangeHandler);

    return () => {
      document.removeEventListener("visibilitychange", visibilityChangeHandler);
    };
  }, [inView]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div ref={ref} className="video_container">
      <video ref={videoRef} src={src} controls={false} autoPlay loop />

      <button onClick={handlePlayPause} className="play_pause_button">
        {isPlaying ? "" : ""}
      </button>

      <div className="like_comment_share">
        <LikeSvg onClick={() => setLiked((prev) => !prev)} liked={liked} />
        <CommentSvg />
        <ShareSvg />
      </div>

      <p className="tilte">{title}</p>
      <div className="swipe_container">
        <UpSvg onClick={() => handleSwipe("up")} />
        <DownSvg onClick={() => handleSwipe("down")} />
      </div>
    </div>
  );
};

export default Video;
