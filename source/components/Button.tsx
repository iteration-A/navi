import React, { FC } from 'react';
import { Text, Box, useInput, useFocus } from 'ink';
import { colors } from '@constants/theme';

interface Props {
  children: string;
  onPress: () => void;
}
const Button: FC<Props> = ({ children, onPress }) => {
  const { isFocused } = useFocus();
  useInput((_, key) => {
    if (!isFocused) return;
    if (key.return) onPress();
  });

  return (
    <Box borderColor={colors.white} borderStyle={isFocused ? "bold" : "single"} justifyContent="center">
      <Text>{children}</Text>
    </Box>
  );
};

export default Button;
