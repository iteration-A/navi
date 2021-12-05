import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import Input from "@components/Input";
import Button from "@components/Button";
import ApiPost from "@services/api";
import { LAIN_REGISTER, REGISTER_MESSAGE } from "@constants/ascii";

const Register: FC<{
	onSuccess: () => void;
	onGoBack: () => void;
}> = ({ onSuccess, onGoBack }) => {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const registerHandler = async () => {
		try {
			await ApiPost("http://localhost:3333/users", {
				username,
				password,
				name,
			});
			onSuccess();
		} catch (error) {
			setErrorMessage(String(error) || "An error ocurred! D:");
		}
	};

	return (
		<Box width="100%" alignItems="center" flexDirection="column">
			<Box justifyContent="center" width="100%">
				<Text>{REGISTER_MESSAGE}</Text>
			</Box>
			<Box justifyContent="center" width="100%">
				<Text>{LAIN_REGISTER}</Text>
			</Box>
			{errorMessage && <Text>{errorMessage}</Text>}
			<Box flexDirection="column">
				<Input placeholder="Name" value={name} onChange={setName} />
				<Input placeholder="Username" value={username} onChange={setUsername} />
				<Input placeholder="Password" value={password} onChange={setPassword} password />
				<Button onPress={registerHandler}>Register</Button>
				<Button onPress={onGoBack}>Go back</Button>
			</Box>
		</Box>
	);
};

export default Register;
