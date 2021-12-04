import { useState, useEffect } from "react";
import axios from "axios";

function useFetch<T>(url: string, token?: any) {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const { data } = await axios(url, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setData(data);
		} catch (error) {
			setError(String(error));
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		setLoading(true);

		fetchData();
	}, []);

	return { data, error, loading, fetchData };
}

export default useFetch;
