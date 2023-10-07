"use client";

import {useState} from 'react';

import { SearchManufacturer } from "./";

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {}
  return (
    <form className="searchBar" onSubmit={handleSearch} action="">
        <div className="searchbar_item">
            <SearchManufacturer
                //we pass the manufacturer and setmanufacturer as prompts
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar