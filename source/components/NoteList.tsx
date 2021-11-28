import React, { FC } from "react";
import { Box, useFocus } from "ink";
import { colors } from "@constants/theme";
import { Note } from "@components/Note";
import INote from "@interfaces/note";
import useListIndex from "@hooks/useListIndex";
import NotesSeed from "@seed/notes";

const NoteList: FC<{ notes?: INote[] }> = ({ notes = NotesSeed }) => {
	const { isFocused } = useFocus();
	const currentNoteIndex = useListIndex(notes.length, isFocused);

	return (
		<Box borderStyle="single" borderColor={colors.white} flexDirection="column">
			{notes.map((note, index) => (
				<Note key={note.id} note={note} active={index === currentNoteIndex && isFocused} />
			))}
		</Box>
	);
};

export default NoteList;
