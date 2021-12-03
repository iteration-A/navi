import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import NoteList from "@components/NoteList";
import NewNote from "@components/NewNote";
import WhoIsTheUser from "@components/WhoIsTheUser";
import SideBar from "@components/SideBar";
import useNavigation from "@hooks/useNavigation";

type ctx = {
  toggleNavigation: React.Dispatch<React.SetStateAction<boolean>>
  goTo: React.Dispatch<React.SetStateAction<string>>
}
export const Context = React.createContext<ctx | undefined>(undefined);

const App: FC<{ name?: string }> = ({ name }) => {
	const [currentRoute, setCurrentRoute] = useState("NoteList");
	const [token, setToken] = useState<string | null>(null);
  const [isNavigationDisabled, setIsNavigationDisabled] = useState(false);

	useNavigation(!token || isNavigationDisabled);

	if (!token) return <WhoIsTheUser onSuccess={setToken} />;

	return (
    <Context.Provider value={{ toggleNavigation: setIsNavigationDisabled, goTo: setCurrentRoute }}>
      <Text>{isNavigationDisabled ? 'off' : 'on'}</Text>
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
