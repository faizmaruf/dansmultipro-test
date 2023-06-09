import { React } from "react";

const SearchBar = (props) => {
  const { query, handleInputChange, searchItems, loadItems } = props;
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.which == "13") {
      searchItems(query);
      event.preventDefault();
    }
  }
  return (
    <form onKeyDown={handleKeyDown} className="w-full">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-base  border border-gray-300 rounded-lg bg-primaryBg   dark:border-gray-600 placeholder-gray-400 text-black" placeholder="Search ..." required defaultValue={query} onChange={(e) => handleInputChange(e.target.value)} autoComplete="off" />
      </div>
    </form>
  );
};

export default SearchBar;
