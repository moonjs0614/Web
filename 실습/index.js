/* 
  아래에 코드를 작성해주세요.
*/

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-box__input');
    const searchBtn = document.querySelector('.search-box__button');
    const searchResult = document.querySelector('.search-result');
  
    function fetchAlbums(keyword, page = 1, limit = 10) {
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=YOUR_API_KEY&format=json&page=${page}&limit=${limit}`)
        .then(response => {
          const albums = response.data.results.albummatches.album;
          renderAlbums(albums);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          alert('잠시 후 다시 시도해주세요');
        });
    }
  
    function renderAlbums(albums) {
      searchResult.innerHTML = '';
      albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');
  
        const albumImage = document.createElement('img');
        albumImage.classList.add('album__image');
        albumImage.src = album.image[2]['#text'];
        albumElement.appendChild(albumImage);
  
        const albumTitle = document.createElement('h2');
        albumTitle.classList.add('album__title');
        albumTitle.textContent = album.name;
        albumElement.appendChild(albumTitle);
  
        const artistName = document.createElement('p');
        artistName.classList.add('album__artist');
        artistName.textContent = album.artist;
        albumElement.appendChild(artistName);
  
        searchResult.appendChild(albumElement);
      });
    }
  
    searchBtn.addEventListener('click', function () {
      const keyword = searchInput.value;
      if (keyword.trim() !== '') {
        fetchAlbums(keyword);
      } else {
        alert('검색어를 입력해주세요.');
      }
    });
  });
  