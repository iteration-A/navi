import React, { FC, useEffect } from "react";
import { Box, useFocusManager, useInput } from "ink";
import NoteList from "@components/NoteList";
import SideBar from "@components/SideBar";

const App: FC<{ name?: string }> = () => {
	const { focusNext, focusPrevious } = useFocusManager();
	useInput((input) => {
		if (input === "h") {
			focusPrevious();
		} else if (input === "l") {
			focusNext();
		}
	});
	useEffect(() => {
    // auto focus, i think i don't need this but whatever
		focusNext();
	}, []);

	return (
		<Box width="100%">
			<Box width="20%">
				<SideBar />
			</Box>
			<Box width="80%">
				<NoteList />
			</Box>
		</Box>
	);
};

export default App;
