import React from "react";

const Profile = (details) => {
  details = JSON.stringify(details, null, 2);
  console.log("details last:", details);
  return <div>{details}</div>;
};

export default Profile;
