import { memo } from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search by author name…"
      aria-label="Search photos by author name"
      className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
  );
}

export default memo(SearchBar);