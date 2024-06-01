import React from "react";
import { useAuth } from "../hooks/authContext";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,

    color: "#fb5b5a",
    marginBottom: 40,
  },
  statText: {
    color: "white",
    fontSize: 20,
  },
});

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

  var { user, gamesPlayed, gamesLost, gamesWon, currentlyGamesPlaying } =
    details;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Player Profile</Text>
      <Text style={styles.statText}>
        <strong>User: </strong> {user ? user.email : ""}
      </Text>

      <Text style={styles.statText}>
        <strong>Games Played:</strong> {gamesPlayed}
      </Text>
      <Text style={styles.statText}>
        <strong>Games Lost:</strong> {gamesLost}
      </Text>
      <Text style={styles.statText}>
        <strong>Games Won:</strong> {gamesWon}
      </Text>
      <Text style={styles.statText}>
        <strong>Currently Games Playing:</strong> {currentlyGamesPlaying}
      </Text>
    </View>
  );
};

export default Profile;
