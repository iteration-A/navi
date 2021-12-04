import React, { FC } from "react";
import { Box, useFocus, Text } from "ink";
import { colors } from "@constants/theme";
import { Note } from "@components/Note";
import INote from "@interfaces/note";
import useListIndex from "@hooks/useListIndex";
import useFetch from "@hooks/useFetch";

const NoteList: FC<{ token: string }> = ({ token }) => {
	const { isFocused } = useFocus();
  const { data: notes, error, fetchData: fetchNotes } = useFetch<INote[]>(
		"http://localhost:3333/notes",
		token
	);
	const currentNoteIndex = useListIndex(notes?.length || 0, isFocused);

	return (
		<Box
			borderStyle="single"
			borderColor={colors.white}
			flexDirection="column"
			width="100%"
		>
			{error && <Text>{error}</Text>}
      <Text>Press Backspace to delete selected Note</Text>
			{notes && notes.length ? (
				notes.map((note, index) => (
					<Note
            onDelete={fetchNotes}
						key={note.id}
						note={note}
						active={index === currentNoteIndex && isFocused}
					/>
				))
			) : (
				<Box width="100%" justifyContent="center" alignItems="center">
					<Text>No notes here!</Text>
				</Box>
			)}
		</Box>
	);
};

export default NoteList;
