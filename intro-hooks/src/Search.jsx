import React from 'react';
const Search = React.memo(({ onChange }) => {
    console.log('Search rendered!');
  
    return (
      <input
        type='text'
        placeholder='Search users...'
        onChange={(e) => onChange(e.target.value)}
      />
    );
  });

  export default Search;