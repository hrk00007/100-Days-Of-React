import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
  const accessId = 'Jgmo_FCmM85JWD-PoMmBlZosud13-gA5zlkhdYpTqyw'
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, [page])

  function getPhotos() {
    let apiUrl = 'https://api.unsplash.com/photos?';
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${accessId}`

    Axios.get(apiUrl)
      .then((response) => {

        const imagesFromApi = response.data.results ?? response.data;

        // if page is 1, then we need a whole new array of images
        if (page === 1) {
          setImages(imagesFromApi)
          return;
        }
        // if page > 1, then we are adding for our infinite scroll
        setImages((images) => [...images, ...imagesFromApi])
      })
      .catch((error) => {
        console.error(error.errorMessage)
      })


  }

  function searchPhotos(e) {
    e.preventDefault();
    setPage(1)
    getPhotos();
  }


  return (
    <div className="app">
      <h1>Infinite Image Gallery using Unsplash</h1>
      <form onSubmit={searchPhotos}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text" placeholder="Search Unsplash.." />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          setPage((page) => page + 1)
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >

        <div className="image-grid">
          {
            images.map((image, index) => (
              <a
                href={image.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="image"
                key={index}>
                <img src={image.urls.regular} alt={image.alt_description} />
              </a>
            ))
          }
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
