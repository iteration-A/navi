import React, { FC, useState } from "react";
import { Box } from "ink";
import NoteList from "@components/NoteList";
import NewNote from "@components/NewNote";
import WhoIsTheUser from "@components/WhoIsTheUser";
import SideBar from "@components/SideBar";
import useNavigation from "@hooks/useNavigation";

const App: FC<{ name?: string }> = ({ name }) => {
  const [currentRoute, setCurrentRoute] = useState("NoteList");
  const [token, setToken] = useState<string|null>(null);

	useNavigation(!Boolean(token));

  if (!token) return <WhoIsTheUser onSuccess={setToken} />;

	return (
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
	);
};

export default App;
