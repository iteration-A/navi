import React from 'react';
import { Box, Text } from 'ink';
import useFetch from '@hooks/useFetch';
import LoadingIndicator from '@components/LoadingIndicator';

const Weather = () => {
  const { data, error, loading } = useFetch<string>(`https://wttr.in/?format="%l:+%C+%t"`);

  if (loading) return <LoadingIndicator message="Loading weather" />;
  if (error) return <Text>Error while loading weather :(</Text>;

  return (
    <Box>
      <Text>{data}</Text>
    </Box>
  );
};

export default Weather;
