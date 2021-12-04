import React, { FC, useContext } from "react";
import { Box, Text, useInput } from "ink";
import Divider from "ink-divider";
import INote from "@interfaces/note";
import { colors } from "@constants/theme";
import ApiCall from "@services/api";
import { Context } from "../ui";

export const Note: FC<{
	note: INote;
	active: boolean;
	onDelete: () => void;
}> = ({ note, active = false, onDelete }) => {
	const context = useContext(Context);

	const deleteHandler = () => {
		if (!active) return;

		ApiCall(
			`http://localhost:3333/notes/${note.id}`,
			null,
			String(context!.token),
			"DELETE"
		)
			.then(onDelete)
			.catch(console.error);
	};
	useInput((_, key) => {
		if (key.delete || key.backspace) deleteHandler();
	});

	return (
		<Box borderColor={colors.white} borderStyle="round" paddingX={3}>
			<Box flexDirection="column" key={note.id} width="100%">
				<Box width="100%" justifyContent="center">
					<Text
						wrap="wrap"
						backgroundColor={active ? colors.white : colors.black}
						color={active ? colors.black : colors.white}
					>
						{note.title}
					</Text>
				</Box>
				<Box width="100%" justifyContent="center">
					<Divider width={100} />
				</Box>
				<Box>
					<Text wrap="wrap">{note.body || "<empty>"}</Text>
				</Box>
			</Box>
		</Box>
	);
};
