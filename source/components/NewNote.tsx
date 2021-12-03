import React, { FC, useState, useContext } from "react";
import { Box, Text } from "ink";
import Input from "@components/Input";
import Button from "@components/Button";
import { colors } from "@constants/theme";
import post from "@services/api";
import { Context } from "../ui";

const NewNote: FC<{ token: string }> = ({ token }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
  const [error, setError] = useState<string|null>(null);

	const context = useContext(Context);

	const saveNoteHandler = async () => {
		post("http://localhost:3333/notes", { notes: [{ title, body }] }, token)
			.then(() => context && context.goTo("NoteList"))
			.catch((error) => setError(`Computer says no:(\n${error}`));
	};

	return (
		<Box
			width="100%"
			borderColor={colors.white}
			borderStyle="single"
			flexDirection="column"
		>
			<Box
				width="100%"
				borderColor={colors.white}
				borderStyle="single"
				flexDirection="column"
			>
				<Text>Title</Text>
				<Input value={title} onChange={setTitle} />
			</Box>
			<Box
				width="100%"
				borderColor={colors.white}
				borderStyle="single"
				flexDirection="column"
			>
				<Text>Body</Text>
				<Input value={body} onChange={setBody} />
			</Box>
			<Button onPress={saveNoteHandler}>Save!</Button>
			{error && <Text>{error}</Text>}
		</Box>
	);
};

export default NewNote;
