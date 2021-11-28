import React from "react";
import { Text, Box, useFocus } from "ink";
import { colors } from "@constants/theme";
import useListIndex from "@hooks/useListIndex";

const OPTIONS = ["My notes", "New note"];

const SideBar = () => {
	const { isFocused } = useFocus();
	const currentElementIndex = useListIndex(OPTIONS.length, isFocused);

  // TODO:
  // refactor `index === currentElementIndex && isFocused` -> create custom text component
	return (
		<Box
			flexDirection="column"
			alignItems="flex-start"
			borderColor={colors.white}
			borderStyle="singleDouble"
			width="100%"
		>
			<Box marginY={1} justifyContent="center" width="100%">
				<Text>--- Navi ---</Text>
			</Box>
			{OPTIONS.map((option, index) => (
				<Text
          key={option}
					backgroundColor={
						index === currentElementIndex && isFocused ? colors.white : colors.black
					}
					color={index === currentElementIndex && isFocused ? colors.black : colors.white}
				>
					{option}
				</Text>
			))}
		</Box>
	);
};

export default SideBar;
