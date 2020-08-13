import { useState } from 'react';

const useRequestHandler = () => {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [data, setData] = useState(null);

    const handleRequest = (request) => {
        setLoading(true);
        setError(false);

        return api.get(request)
            .then(setData)
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    };

    return { isLoading, hasError, data, handleRequest };
};