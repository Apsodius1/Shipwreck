import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.TouchableOpacity``;

export interface ILogin {
  onSubmit: (email: string, password: string) => void;
}

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => console.log(email, password);

  return (
    <Container>
      <Input keyboardType="email-address" onChangeText={setEmail} />
      <Input secureTextEntry onChangeText={setPassword} />
      <Button onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
    </Container>
  );
};

export default Register;
