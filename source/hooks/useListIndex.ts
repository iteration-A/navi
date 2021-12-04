import { useState } from "react";
import { useInput } from "ink";

const useListIndex = (listSize: number, active: boolean = true) => {
	const [index, setIndex] = useState(0);
	useInput((input) => {
		if (!active) return;
		if (input === "j") {
			const isLast = index >= listSize - 1;
			setIndex(isLast ? 0 : index + 1);
		} else if (input === "k") {
			const isFirst = index === 0;
			setIndex(isFirst ? listSize - 1 : index - 1);
		}
	});

	return index;
};

export default useListIndex;
