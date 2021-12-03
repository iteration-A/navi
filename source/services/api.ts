import axios, { AxiosResponse } from "axios";

interface ApiRespone {
	status: number;
	errors?: { message: string }[];
}

type Res = ApiRespone & AxiosResponse;

const post = async (url: string, data: any, token?: string) => {
	try {
		const response = await axios.post<any, Res>(url, data, {
			headers: token ? { Authorization: `Bearer ${token}` } : undefined,
		});

		return response.data;
	} catch (error: any) {
		// how in hell am i supposed to type this ????
		// god forgive me
		const { response } = error;
		if (response?.data?.errors && response?.data?.errors.length > 0) {
			throw new Error(response?.data?.errors[0]!.message);
		}
		throw new Error("Computer says no");
	}
};

export default post;
