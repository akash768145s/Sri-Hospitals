import React, { useState, useEffect } from "react";
import axios from "axios";


const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data && response.data.file) {
        setVideoUrl(
          `http://localhost:5000/files/${response.data.file.filename}`
        );
        alert("Video uploaded successfully");
        fetchVideos();
      } else {
        alert("Error uploading video: Invalid response structure");
      }
    } catch (error) {
      alert("Error uploading video");
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/files");
      if (response.data) {
        setVideos(response.data);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="pt-[10vh]">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
      {videoUrl && (
        <div>
          <h3>Uploaded Video</h3>
          <video url={videoUrl} controls width="600px" height="400px" />
        </div>
      )}
      <div>
        <h3>All Videos</h3>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video._id}>
              <h4>{video.filename}</h4>
              <video
                url={`http://localhost:5000/files/${video.filename}`}
                controls
                width="600px"
                height="400px"
              />
            </div>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;
