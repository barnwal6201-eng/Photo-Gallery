import { useCallback, useMemo, useState } from 'react'
import Searchbar from './Searchbar';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import Spinner from './Spinner';
import { useFavourites } from '../hooks/useFavourites';
import PhotoCard from './PhotoCard';

const Gallery = () => {
    const {photos, loading, error} = useFetchPhotos();
    const {favouriteIds, toggleFav} = useFavourites();
    const [query, setQuery] = useState('');

    const handleSearchChange = useCallback((e) => {
       setQuery(e.target.value);
    },[]);


    const visiblePhotos = useMemo(() => {
        const term = query.trim().toLowerCase();

        if(!term) return photos;

        return photos.filter((photo) => photo.author.toLowerCase().includes(term));

    }, [photos, query]);

  return (
    <section className='space-y-6'>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Searchbar value={query} onChange={handleSearchChange} />
            
             <p className="text-sm text-gray-500">
                {favouriteIds.length} favourite{favouriteIds.length === 1 ? '' : 's'}
                {!loading && !error && ` · ${visiblePhotos.length} shown`}
             </p>
        </div>

        {loading ? (
            <Spinner /> 
        ): error ? (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
            </div>
        ) : visiblePhotos.length === 0 ? (
            <p className="py-16 text-center text-gray-500">
                {query ? `No photos match "${query}".`: 'No photos to show.'}
            </p>
        ) : (
             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {visiblePhotos.map((photo) => (
                    <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavourite={favouriteIds.includes(photo.id)}
                    onToggleFav={toggleFav}
                    />
                ))}
             </div>
        )}
    </section>
  )
}

export default Gallery
