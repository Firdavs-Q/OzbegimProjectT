import React, { useRef } from 'react';

const ReklamAsosiyP = () => {
const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };


return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
      <video
        ref={videoRef}
        width="300"
        height="500"
        autoPlay
        loop01211
        style={{ border: "2px solid black", borderRadius: "10px" }}
        controls
        src="https://www.dl.dropboxusercontent.com/scl/fi/onfa3sjqjjwub4da90rr3/video_2025-05-24_14-18-19.mp4?rlkey=txbo8nh3hlnp2zsghfzm1sqit&st=kmyla1bj"
      />
      {/* <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸️ Pause</button>
      </div> */}
    </div>
)
}
export default ReklamAsosiyP;