import React from "react";
import { useAuth } from "../hooks/authContext";

const Profile = () => {
  const auth = useAuth();
  const {
    details,
  }: {
    details: {
      user: { id: string; email: string };
      gamesPlayed: number;
      gamesLost: number;
      gamesWon: number;
      currentlyGamesPlaying: number;
    };
  } = auth;

  if (!details) {
    return <div>Loading...</div>;
  }
  console.log("details:", details);

  var { user, gamesPlayed, gamesLost, gamesWon, currentlyGamesPlaying } =
    details;

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>User: </strong> {user ? user.email : ""}
      </p>

      <p>
        <strong>Games Played:</strong> {gamesPlayed}
      </p>
      <p>
        <strong>Games Lost:</strong> {gamesLost}
      </p>
      <p>
        <strong>Games Won:</strong> {gamesWon}
      </p>
      <p>
        <strong>Currently Games Playing:</strong> {currentlyGamesPlaying}
      </p>
    </div>
  );
};

export default Profile;
