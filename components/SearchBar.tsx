"use client";

import { SearchManufacturer } from "./";

const SearchBar = () => {
    const handleSearch = () => { }

    return (
        <form className="searchBar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer />
            </div>

        </form>
    )
}

export default SearchBar