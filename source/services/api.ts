import axios, { Method } from "axios";

const ApiCall = async (
	url: string,
	data: any,
	token?: string,
	method: Method = "POST"
) => {
	try {
		const response = await axios(url, {
			data,
			method,
			headers: token ? { Authorization: `Bearer ${token}` } : undefined,
		});

		return response.data;
	} catch (error: any) {
		const { response } = error;
		if (response?.data?.errors && response?.data?.errors.length > 0) {
			throw new Error(response?.data?.errors[0]!.message);
		}
		throw new Error("Computer says no");
	}
};

export default ApiCall;
