import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function QualificationSearch() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className="bg-white rounded p-3">
      <div className="flex justify-center items-center border border-secondary rounded">
        <div className="bg-secondary p-4 py-3 text-white">
          <MdOutlineSearch size={25} />
        </div>
        <input
          type="text"
          value={searchInput}
          // onChange={handleSearch}
          className="p-3 flex-1 focus:none outline-none"
          placeholder="Search for Course Name..."
        />
      </div>
    </div>
  );
}

export default QualificationSearch;
