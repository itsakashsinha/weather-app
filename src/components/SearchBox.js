import '../assests/searchBox.css';
import { useState } from 'react';
const Searchbox = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true); // Show loader
    if(city !== ''){
        onSearch(city);
        setCity('');
    }
    else{
        alert('city is empty')
    }
  };

  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {/* Conditionally render the loader if loading is true */}
      {/* {loading && <Loader/>} */}

    </div>
  );
};

export default Searchbox;
