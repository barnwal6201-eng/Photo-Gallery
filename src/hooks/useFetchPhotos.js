import { useEffect, useState } from "react";

const PHOTOS_URL = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(PHOTOS_URL, {signal: controller.signal});

                if(!res.ok){
                    throw new Error(`Request failed with status ${res.status}`);
                }

                const data = await res.json();
                setPhotos(data);

            } catch (err) {
                if(err.name === 'AbortError') return;

                setError('Could not load photos. Please try again later.');

            } finally{
               if(!controller.signal.aborted) setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, []);

    return {photos, loading, error};
};