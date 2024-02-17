

import { useState, useEffect } from 'react';

const useFetchQuestions = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/questions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (responseError) {
                return responseError;
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading };
};

export default useFetchQuestions;
