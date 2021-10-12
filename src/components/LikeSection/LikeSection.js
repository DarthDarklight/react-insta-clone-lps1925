import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "./LikeSection.css";

const LikeSection = ({ likes, likePost, postId }) => {
  console.log("likes: ", likes);
  console.log("id: ", postId);

  const handleClick = (event) => {
    event.preventDefault();
    console.log("postId", postId);
    likePost(postId);
  };

  return (
    <div className="like-section">
      <div className="like-section-wrapper">
        <FontAwesomeIcon icon={faHeart} onClick={handleClick} />
      </div>
      <div className="like-section-wrapper">
        <FontAwesomeIcon icon={faComment} />
      </div>
      <div className="like-number">{`${likes} Likes`}</div>
    </div>
  );
};

export default LikeSection;
