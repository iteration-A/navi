import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState<null|string>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const { data } = await axios(url);
        setData(data);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
		};

    fetchData();
	}, []);

	return { data, error, loading };
};

export default useFetch;
