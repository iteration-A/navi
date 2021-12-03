import React, { FC } from "react";
import { Box, Text } from "ink";
import Divider from "ink-divider";
import INote from "@interfaces/note";
import { colors } from "@constants/theme";

export const Note: FC<{ note: INote; active: boolean }> = ({
	note,
	active = false,
}) => {
	return (
		<Box borderColor={colors.white} borderStyle="round" paddingX={3}>
			<Box flexDirection="column" key={note.id} width="100%">
				<Box width="100%" justifyContent="center">
					<Text
            wrap="wrap"
						backgroundColor={active ? colors.white : colors.black}
						color={active ? colors.black : colors.white}
					>
						{note.title}
					</Text>
				</Box>
				<Box width="100%" justifyContent="center">
					<Divider width={100} />
				</Box>
				<Box>
					<Text wrap="wrap">{note.body || "<empty>"}</Text>
				</Box>
			</Box>
		</Box>
	);
};
