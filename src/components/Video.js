import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CommentSvg, DownSvg, LikeSvg, ShareSvg, UpSvg } from "../svg";

const Video = ({ src, title, handleSwipe, handleLike, liked }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const [progress, setProgress] = useState(0); // Track video progress
  const videoRef = useRef();
  const progressBarRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && inView) {
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Autoplay failed:", error);
            });
        }
      }
    };

    const updateProgressBar = () => {
      if (videoRef.current) {
        const progressValue =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(progressValue);
        progressBarRef.current.style.width = `${progressValue}%`;
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
    videoRef.current.addEventListener("timeupdate", updateProgressBar);

    return () => {
      document.removeEventListener("visibilitychange", visibilityChangeHandler);
      videoRef.current.removeEventListener("timeupdate", updateProgressBar);
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
      <video ref={videoRef} src={src} autoPlay loop />

      <button onClick={handlePlayPause} className="play_pause_button">
        {isPlaying ? "" : ""}
      </button>

      <div className="like_comment_share">
        <LikeSvg onClick={handleLike} liked={liked} />
        <CommentSvg />
        <ShareSvg />
      </div>

      <p className="tilte">{title}</p>

      {/* Custom progress bar */}
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#8f8f8f",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#fff",
          }}
        ></div>
      </div>

      <div className="swipe_container">
        <UpSvg onClick={() => handleSwipe("up")} />
        <DownSvg onClick={() => handleSwipe("down")} />
      </div>
    </div>
  );
};

export default Video;
