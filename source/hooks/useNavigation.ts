import { useEffect } from "react";
import { useFocusManager, useInput } from "ink";

const useNavigation = (disable: boolean) => {
	const { focusNext, focusPrevious, focus } = useFocusManager();
	useInput((input) => {
    if (disable) return;
		if (input === "h") {
			focusPrevious();
		} else if (input === "l") {
			focusNext();
		}
	});
	useEffect(() => {
		// auto focus, i think i don't need this but whatever
		focusNext();
	}, []);

  return focus;
};

export default useNavigation;
