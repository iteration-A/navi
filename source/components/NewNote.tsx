import React, { FC } from "react";
import { Box, Text } from "ink";

const NewNote: FC<{ token: string }> = ({ token }) => {
	return (
		<Box>
			<Text>{token}</Text>
		</Box>
	);
};

export default NewNote;
