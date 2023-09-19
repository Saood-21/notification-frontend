import { useState } from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // onSearch(searchQuery);
  };

  const handleInputChange = () => {
    // setSearchQuery(event.target.value);
  };

  const handleKeyPress = () => {
    // if (event.key === 'Enter') {
      handleSearch();
    }
  

  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        placeholder="Search..."
        fullWidth
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="button" onClick={handleSearch} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
