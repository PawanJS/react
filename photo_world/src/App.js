import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    photos: [],
    query: '',
  };

  searchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?query=${this.state.query}&orientation=squarish&client_id=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ photos: data.results });
        console.log(this.state.photos);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="heading-1">Search the image you love</h1>
          <form className="form">
            <input
              className="search-box"
              type="search"
              placeholder="Search for any image"
              onChange={this.searchChange}
            />
            <button className="btn" type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </form>
          <div className="photos__wrapper">
            {this.state.photos.map((photo) => (
              <figure className="photo" key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
