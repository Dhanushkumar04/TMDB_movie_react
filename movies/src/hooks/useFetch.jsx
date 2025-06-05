import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = " ") => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true); // Start loading before fetch
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData.results || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]); // Reset data on error
            } finally {
                setLoading(false); // Stop loading after fetch (success or error)
            }
        }
        fetchMovies();
    }, [url]);

    return { data, loading }; // Return loading state
};
