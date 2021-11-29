import React, { FC, useEffect } from "react";
import { Text, Box, useFocus } from "ink";
import { colors } from "@constants/theme";
import useListIndex from "@hooks/useListIndex";

const OPTIONS = [{ title: "My notes", route: "NoteList" }, { title: "New note", route: "NewNote" }];

interface Props {
  username?: string,
  setRoute: React.Dispatch<React.SetStateAction<string>>
}
const SideBar: FC<Props> = ({ username, setRoute }) => {
	const { isFocused } = useFocus();
	const currentElementIndex = useListIndex(OPTIONS.length, isFocused);
  useEffect(() => {
    setRoute(OPTIONS[currentElementIndex]?.route || 'NoteList');
  }, [currentElementIndex]);

  // TODO:
  // refactor `index === currentElementIndex && isFocused` -> create custom text component
	return (
		<Box
			flexDirection="column"
			alignItems="flex-start"
			borderColor={colors.white}
			borderStyle="single"
			width="100%"
		>
			<Box marginY={1} justifyContent="center" width="100%">
        <Text>--- {Boolean(username) ? `Hello, ${username}` : 'Navi'} ---</Text>
			</Box>
			{OPTIONS.map((option, index) => (
				<Text
          key={option.title}
					backgroundColor={
						index === currentElementIndex && isFocused ? colors.white : colors.black
					}
					color={index === currentElementIndex && isFocused ? colors.black : colors.white}
				>
					{option.title}
				</Text>
			))}
		</Box>
	);
};

export default SideBar;
