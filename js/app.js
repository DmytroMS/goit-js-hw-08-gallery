const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];


// Создание разметки галереи циклом FOR

/*
const galleryMarkup = [];

for (let i = 0; i < galleryItems.length; i += 1) {
const item = galleryItems[i];
  
const galleryItemEl = document.createElement('li');
galleryItemEl.classList.add('gallery__item');

const galleryLinkEl = document.createElement('a');
galleryLinkEl.classList.add('gallery__link');
galleryLinkEl.href = `${item.original}`;

const galleryPicEl = document.createElement('img');
galleryPicEl.classList.add('gallery__image')
galleryPicEl.src = `${item.preview}`;
galleryPicEl.dataset.source = `${item.original}`;
galleryPicEl.alt = `${item.description}`;

galleryLinkEl.appendChild(galleryPicEl);
galleryItemEl.appendChild(galleryLinkEl);
    
galleryMarkup.push(galleryItemEl);
}
const galleryRef = document.querySelector('.js-gallery');
galleryRef.append(...galleryMarkup);
*/


// Создание разметки галереи методом МАР
/*
const galleryRef = document.querySelector('.js-gallery');   

const galleryMarkUpFunction = ({ preview, original, description }) => {

    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery__item');

    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = `${original}`;

    const galleryPicEl = document.createElement('img');
    galleryPicEl.classList.add('gallery__image')
    galleryPicEl.src = `${preview}`;
    galleryPicEl.dataset.source = `${original}`;
    galleryPicEl.alt = `${description}`;

    galleryLinkEl.appendChild(galleryPicEl);

    return galleryItemEl.appendChild(galleryLinkEl);
};

const galleryMarkUp = galleryItems.map(galleryMarkUpFunction);       
galleryRef.append(...galleryMarkUp);
*/

// Создание разметки по шаблонной строке 

const galleryListRef = document.querySelector('.js-gallery');
const modalBox = document.querySelector('.js-lightbox');
const modalImgRef = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');


const createGalleryList = images => {
  const { preview, description, original } = images;
  return `<li class="gallery__item">
<a
  class="gallery__link"
  href= ""
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;
};

const galleryMarkup = galleryItems.map(createGalleryList).join('');

galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup);




galleryListRef.addEventListener('click', onPictureClick);
modalBox.addEventListener('click', onPictureClick);
closeButton.addEventListener('click', closeButtonFunction); 


function onPictureClick(event) {
      event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
       return
    } else {
    modalBox.classList.add('is-open');
        modalImgRef.src = event.target.dataset.source;
          modalImgRef.alt = evt.target.alt;
    }
   
};

function closeButtonFunction(event) {
    modalBox.classList.remove('is-open');
    modalImgRef.src = ``;
    modalImgRef.alt = ``;
}
    


