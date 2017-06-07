import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyD5LQbyNgAGKUc7-cq9-5-kqkK4_UVQGGg';

// component needs to be rendered to be placed into the Dom

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
