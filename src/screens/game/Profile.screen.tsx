import React from "react";
import Profile from "../../components/Profile";
import { useAuth } from "../../hooks/authContext";

const ProfileScreen = () => {
  const auth = useAuth();
  // todo: implement the logic to get the user details
  const details = auth.details;
  console.log("details:", details);

  return <Profile details={details} />;
};

export default ProfileScreen;
