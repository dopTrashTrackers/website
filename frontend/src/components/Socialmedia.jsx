import React from "react";
import ReactPlayer from "react-player";
import "./Socialmedia.css";

const Socialmedia= () => {
  return (
    <div className="this-app-container">
      {/* Facebook Section */}
      <div className="feed-container facebook">
        <div className="header">
          <span>Facebook</span>
          <a href="#">View All</a>
        </div>
        <div className="content">
          <div className="post">
            <img
              src="https://content.jdmagicbox.com/comp/pathankot/z1/9999px186.x186.120317130710.s5z1/catalogue/post-office-pathankot-post-office-services-65nqw23bmq-250.jpg"
              alt="profile"
              className="profile-pic"
            />
            <div className="post-content">
              <p><strong>Post Office Cleanliness Campaign</strong></p>
              <p>Today, our team cleaned the entire post office premises! #SwachhBharat</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3RlEZk6SpC6LOZbGOBOUuC0fDTZwEIpd4w&s"
                alt="cleanliness campaign"
                className="post-image"
              />
            </div>
          </div>
          <div className="post">
            <img
              src="https://pbs.twimg.com/profile_images/1772554984602624000/uyZIiNhi_400x400.jpg"
              alt="profile"
              className="profile-pic"
            />
            <div className="post-content">
              <p><strong>Swachch Bharat Mission</strong></p>
              <p>Initiatives like these make a cleaner and greener India! 🌿</p>
              <img
                src="https://pbs.twimg.com/media/D9BGMYZU8AEu8iB?format=jpg&name=4096x4096"
                alt="cleanliness campaign"
                className="post-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Section */}
      <div className="feed-container youtube">
        <div className="header">
          <span>YouTube</span>
          <a href="#">View All</a>
        </div>
        <div className="content">
          <div className="video">
            <ReactPlayer
              url="https://youtu.be/Hde8pZXDN1I?si=U-ZSdcpdOJDQEYMA"
              width="100%"
              height="200px"
            />
            <p>Swachh Bharat Abhiyan - Clean Post Office Initiative</p>
          </div>
          <div className="video">
            <ReactPlayer
              url="https://youtu.be/xWCfm0LZS4U?si=tW97JOhejrW6gyvN"
              width="100%"
              height="200px"
            />
            <p>Join the Cleanliness Drive in Your Community</p>
          </div>
        </div>
      </div>

      {/* Twitter Section */}
      <div className="feed-container twitter">
        <div className="header">
          <span>Twitter</span>
          <a href="#">View All</a>
        </div>
        <div className="content">
          <div className="tweet">
            <img
              src="https://pbs.twimg.com/profile_images/1725541120388571136/3PlXKP1z_400x400.jpg"
              alt="profile"
              className="profile-pic"
            />
            <div className="tweet-content">
              <p><strong>@swachhbharat</strong>:</p>
              <p>
                100 years ago, Gandhi started the Satyagraha movement...
                #CleanIndia
              </p>
              <img
                src="https://pbs.twimg.com/media/EiA2Y7tU8AAWpAZ?format=jpg&amp;name=small"
                alt="cleanliness campaign"
                className="post-image"
              />
            </div>
          </div>
          <div className="tweet">
            <img
              src="https://pbs.twimg.com/profile_images/1821774358232363008/Tm3Wy1Ug_400x400.jpg"
              alt="profile"
              className="profile-pic"
            />
            <div className="tweet-content">
              <p><strong>@postofficeclean</strong>:</p>
              <p>
                Successful cleanliness drive at our Bhagalpur post office! 🚮✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;

