import React from 'react';
import { Box, Text } from 'ink';
import useFetch from '@hooks/useFetch';

const Weather = () => {
  const { data, error, loading } = useFetch(`https://wttr.in/?format="%l:+%C+%t"`);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error while loading weather :(</Text>;

  return (
    <Box>
      <Text>{data}</Text>
    </Box>
  );
};

export default Weather;
