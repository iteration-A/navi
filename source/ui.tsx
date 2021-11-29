import React, { FC, useState } from "react";
import { Box } from "ink";
import NoteList from "@components/NoteList";
import NewNote from "@components/NewNote";
import WhoIsTheUser from "@components/WhoIsTheUser";
import SideBar from "@components/SideBar";
import useNavigation from "@hooks/useNavigation";

const App: FC<{ name?: string }> = ({ name }) => {
	useNavigation();

  const [currentRoute, setCurrentRoute] = useState("NoteList");
  const [userCreated, setUserCreated] = useState(false);

  if (!userCreated) return <WhoIsTheUser onSuccess={setUserCreated} />;

	return (
		<Box width="100%">
			<Box width="20%">
				<SideBar username={name} setRoute={setCurrentRoute} />
			</Box>
			<Box width="80%">
        {(() => {
          switch (currentRoute) {
            case "NoteList":
              return <NoteList />;
            case "NewNote":
              return <NewNote />;
            default:
              return <NoteList />;
          }
        })()}
			</Box>
		</Box>
	);
};

export default App;
