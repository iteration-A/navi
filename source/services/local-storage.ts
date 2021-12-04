import fs from "fs";
import bcrypt from "bcrypt";
import os from "os";

export const HOME = os.homedir();
const CREDENTIAL_FILE = ".navi";

type reader = (args: {
	username: string;
	password: string;
}) => Promise<void | Error>;

export const writeUser: reader = async ({ username, password }) => {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	await fs.promises.writeFile(
		`${HOME}/${CREDENTIAL_FILE}`,
		`${username},${hash}`
	);
};

export const readUser: reader = async ({ username, password }) => {
	const fileContent = await fs.promises.readFile(`${HOME}/${CREDENTIAL_FILE}`);
	const [user, hashedPassword] = fileContent.toString().split(",");

	if (user !== username) throw new Error("Invalid user.");

	const isPasswordCorrect = await bcrypt.compare(password, hashedPassword!);
	if (!isPasswordCorrect) throw new Error("Invalid password.");
};
