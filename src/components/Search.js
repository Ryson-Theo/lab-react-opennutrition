// src/components/Search.js
import { Divider, Input } from 'antd';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div style={{ width: '400px', margin: '0 auto 30px auto' }}>
      <Divider>Search</Divider>
      <Input 
        type="text" 
        placeholder="Search for food items..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </div>
  );
}

export default Search;