import React, { useEffect, useState, FC } from "react";
import { Text } from "ink";

const LoadingIndicator: FC<{ message?: string }> = ({
	message = "Loading",
}) => {
	const [times, setTimes] = useState(1);

	useEffect(() => {
		const intervalId = setInterval(
			() => setTimes((state) => (state >= 3 ? 1 : state + 1)),
			500
		);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Text>
			{message}
			{".".repeat(times)}
		</Text>
	);
};

export default LoadingIndicator;
