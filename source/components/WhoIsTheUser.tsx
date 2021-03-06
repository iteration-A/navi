import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import Input from "@components/Input";
import Button from "@components/Button";
import ApiPost from "@services/api";
import { GREETINGS, NAVI_LOGO } from "@constants/ascii";
import Register from '@components/Register';

const WhoIsTheUser: FC<{
	onSuccess: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ onSuccess }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // register logic
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const goBack = () => setShowRegisterForm(false);

	const logInHandler = async () => {
		try {
			const response = await ApiPost("http://localhost:3333/login", {
				username,
				password,
			});
			onSuccess(response.token);
		} catch (error) {
			setErrorMessage(String(error) || "An error ocurred! D:");
		}
	};

  if (showRegisterForm) {
    return <Register onSuccess={goBack} onGoBack={goBack} />;
  }

	return (
		<Box width="100%" alignItems="center" flexDirection="column">
			<Box justifyContent="center" width="100%">
				<Text>{GREETINGS}</Text>
			</Box>
			<Box justifyContent="center" width="100%">
				<Text>{NAVI_LOGO}</Text>
			</Box>
			{errorMessage && <Text>{errorMessage}</Text>}
			<Box flexDirection="column">
				<Input placeholder="Username" value={username} onChange={setUsername} />
				<Input placeholder="Password" value={password} onChange={setPassword} password />
				<Button onPress={logInHandler}>Log in</Button>
        <Button onPress={() => setShowRegisterForm(true)}>Register</Button>
			</Box>
		</Box>
	);
};

export default WhoIsTheUser;
