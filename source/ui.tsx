import React, { FC, useState } from "react";
import { Box, Text, useInput, useApp } from "ink";
import NoteList from "@components/NoteList";
import NewNote from "@components/NewNote";
import WhoIsTheUser from "@components/WhoIsTheUser";
import SideBar from "@components/SideBar";
import useNavigation from "@hooks/useNavigation";
import {
	GOODBYE_MESSAGE_1,
	GOODBYE_MESSAGE_2,
	GOODBYE_ART,
} from "@constants/ascii";

type ctx = {
	toggleNavigation: React.Dispatch<React.SetStateAction<boolean>>;
	goTo: React.Dispatch<React.SetStateAction<string>>;
};
export const Context = React.createContext<ctx | undefined>(undefined);

const App: FC<{ name?: string }> = ({ name }) => {
	const [currentRoute, setCurrentRoute] = useState("NoteList");
	const [token, setToken] = useState<string | null>(null);
	const [isNavigationDisabled, setIsNavigationDisabled] = useState(false);

	const { exit } = useApp();
	const [exiting, setExiting] = useState(false);
	useInput((input, key) => {
		if (input === "c" && key.ctrl) {
			setExiting(true);
			setTimeout(exit, 2222);
		}
	});

	useNavigation(!token || isNavigationDisabled);

	if (exiting)
		return (
			<Box justifyContent="center" alignItems="center" flexDirection="column">
				<Text>{GOODBYE_MESSAGE_1}</Text>
				<Text>{GOODBYE_MESSAGE_2}</Text>
				<Text>{GOODBYE_ART}</Text>
			</Box>
		);

	if (!token) return <WhoIsTheUser onSuccess={setToken} />;

	return (
		<Context.Provider
			value={{
				toggleNavigation: setIsNavigationDisabled,
				goTo: setCurrentRoute,
			}}
		>
			<Box width="100%">
				<Box width="20%">
					<SideBar username={name} setRoute={setCurrentRoute} />
				</Box>
				<Box width="80%">
					{(() => {
						switch (currentRoute) {
							case "NoteList":
								return <NoteList token={token} />;
							case "NewNote":
								return <NewNote token={token} />;
							default:
								return <NoteList token={token} />;
						}
					})()}
				</Box>
			</Box>
		</Context.Provider>
	);
};

export default App;
