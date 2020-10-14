import React, { useState as reactUseState } from 'react';
import { useRecoilState } from 'recoil';
import { searchBarSelectorFam } from '../store/store';
import { useState, HooksChromogenObserver } from 'chromogen';

import ReadOnlyTodoItem from './ReadOnlyTodoItem';

const SearchBar = () => {
  const [searchFilter, setSearchFilter] = reactUseState('all');
  const [searchText, setSearchText] = useState('');
  const [searchState, setSearchState] = useRecoilState(searchBarSelectorFam(searchFilter));

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setSearchState(e.target.value);
  };
  const onSelectChange = (e) => {
    setSearchText('');
    setSearchFilter(e.target.value);
  };

  return (
    <div>
      <HooksChromogenObserver />
      <div className="searchContainer">
        <input
          className="searchField"
          placeholder="Search for a Todo"
          type="text"
          value={searchText || searchState.searchTerm}
          onChange={onSearchTextChange}
          onLoad={onSearchTextChange}
        />
        <select className="prioritySelect" onChange={onSelectChange}>
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <div className="searchResults">
          {searchState.results.map((result, idx) => (
            <ReadOnlyTodoItem key={idx} item={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
