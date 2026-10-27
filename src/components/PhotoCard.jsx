import { memo } from 'react'
import HeartIcon from './HeartIcon'

const PhotoCard = ({photo, isFavourite, onToggleFav}) => {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
        <div className="aspect-[4/3] w-full bg-gray-100">
        <img 
        src={`https://picsum.photos/id/${photo.id}/600/450`} 
        alt={`Photo by ${photo.author}`}
        loading='lazy'
        className='h-full w-full object-cover'
        />
        </div>

        <div className="flex items-center justify-between gap-2 p-3">
            <p className="truncate text-sm font-medium text-gray-800">{photo.author}</p>
            <button
            type='button'
            onClick={()=>onToggleFav(photo.id)}
            aria-pressed={isFavourite}
            aria-label={isFavourite ? 'Remove from favourite' : 'Add to favourite'}
            className={`shrink-0 rounded-full p-1.5 transition ${
            isFavourite ? 'text-rose-500' : 'text-gray-400'
              }`}
            >
                <HeartIcon filled={isFavourite} />
            </button>
        </div>
    </article>
  )
}

export default memo(PhotoCard)
