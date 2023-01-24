let fileInput = document.getElementById('file-input');
let imageContainer = document.getElementById('images');
let numOfFiles = document.getElementById('num-of-files');

function addImages() {
  imageContainer.innerHTML = '';
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();

    reader.readAsDataURL(i);

    reader.addEventListener('load', () => {
      const imagesArray = localStorage.getItem('images');

      let images = [];
      let image = {
        img: reader.result,
        favourite: false,
        name: i.name,
        id: Date.now(),
      };

      if (imagesArray) {
        images = [...JSON.parse(imagesArray)];
        images.push(image);
      } else {
        images.push(image);
      }
      localStorage.setItem('images', JSON.stringify(images));
    });
  }

  location.replace('./gallery.html');
}

function loadImages() {
  const images = JSON.parse(localStorage.getItem('images'));
  numOfFiles.textContent = `Number of Images : ${images.length}`;

  images.forEach((image) => {
    let figure = document.createElement('figure');
    let figCap = document.createElement('figcaption');
    figCap.innerText = image.name;
    figure.appendChild(figCap);

    let img = document.createElement('img');
    img.setAttribute('src', image.img);
    img.setAttribute('alt', image.name);
    img.setAttribute('data-id', image.id);
    figure.insertBefore(img, figCap);

    imageContainer.appendChild(figure);
  });

  addToFavourite();
}

function addToFavourite() {
  const imgElement = document.querySelectorAll('img');

  imgElement.forEach((image) => {
    image.addEventListener('dblclick', (e) => {
      // console.log(e.target.dataset.id);
      const imageJSON = localStorage.getItem('images');
      const imagesLocally = JSON.parse(imageJSON);
      imagesLocally.forEach((image) => {
        if (e.target.dataset.id == image.id) {
          let imagesArray = localStorage.getItem('favouriteImages');
          let images = [];
          if (imagesArray) {
            images = [...JSON.parse(imagesArray)];
          }
          images.push(image);
          localStorage.setItem('favouriteImages', JSON.stringify(images));
        }
      });
    });
  });
}

function loadFavouriteImages() {
  const images = JSON.parse(localStorage.getItem('favouriteImages'));

  images.forEach((image) => {
    let figure = document.createElement('figure');
    let figCap = document.createElement('figcaption');
    figCap.innerText = image.name;
    figure.appendChild(figCap);

    let img = document.createElement('img');
    img.setAttribute('src', image.img);
    img.setAttribute('alt', image.name);
    img.setAttribute('data-id', image.id);
    figure.insertBefore(img, figCap);

    imageContainer.appendChild(figure);
  });
}

const backToHome = () => {
  location.href = './index.html';
};

const toFavouritePage = () => {
  location.href = './favourite.html';
};

const toGalleryPage = () => {
  location.href = './gallery.html';
};
