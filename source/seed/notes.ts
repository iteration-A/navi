import { v4 as uuidv4 } from "uuid";
import INote from "@interfaces/note";

const seed: INote[] = [
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
	{
		title: "Nov 28",
		body: "Today I lived. That's all.",
		id: uuidv4(),
	},
];

export default seed;
