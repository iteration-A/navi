import React, { FC } from "react";
import { Box, Text, useInput, useFocus } from "ink";
import { colors } from "@constants/theme";

interface Props {
	onChange: (value: string) => void;
	value: string;
	password?: boolean;
}
const Input: FC<Props> = ({ onChange, value, password = false }) => {
	const { isFocused } = useFocus();

	useInput((input, key) => {
		if (!isFocused) return;
		const newValue = key.delete
			? value.slice(0, input.length - 1)
			: `${value}${input}`;
		onChange(newValue);
	});

	return (
		<Box
			borderColor={colors.white}
			borderStyle={isFocused ? "bold" : "single"}
			minWidth={18}
		>
			{/* height fix */}
			<Text>{(password ? "*".repeat(value.length) : value) || " "}</Text>
		</Box>
	);
};

export default Input;
