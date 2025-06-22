"use client";

import "./profileImage.css";

export const ProfileImage = ({
  src,
  alt = "Profile Image",
  size = "150px",
}) => {
  return (
    <img
      src={src || "https://via.placeholder.com/150"}
      alt={alt}
      className="profile-image"
      style={{ width: size, height: size }}
    />
  );
};
