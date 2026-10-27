import { useCallback, useEffect, useReducer } from "react";

const STORAGE_KEY = 'photo-gallery-favourites';

function storedFavourites() {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

function favouriteReducer(state, action) {
    switch(action.type){
        case 'TOGGLE':
            return state.includes(action.id)
            ? state.filter((id) => id !== action.id)
            : [...state, action.id];
        
        default: 
            return state;
    }
};

export function useFavourites() {
    const [favouriteIds, dispatch] = useReducer(
        favouriteReducer,
        undefined,
        storedFavourites
    );

useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favouriteIds));
},[favouriteIds]);

const toggleFav = useCallback(
    (id) => dispatch({type: 'TOGGLE', id}),
    []
);

return {favouriteIds, toggleFav};

};
