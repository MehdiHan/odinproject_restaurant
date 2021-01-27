const createMenu = (element) => {
  const headline = document.createElement('h1');
  const sliderContainer = document.createElement('div');
  headline.innerHTML = 'SashaMenu';
  sliderContainer.classList.add('slider__container');
  createSlider(sliderElements, sliderContainer);
  element.appendChild(headline);
  element.appendChild(sliderContainer);
};

export { createMenu };

const sliderElements = [
  {
    title: "Sasha's Burger",
    description: 'Delicious burger with tuna and nori',
    url: '../../src/assets/img/slider_image_burger.jpg',
  },
  {
    title: "Sasha's Combo",
    description: 'Combination of chef’s selection',
    url: '../../src/assets/img/slider_image_combo.jpg',
  },
  {
    title: "Sasha's Burger",
    description: 'Pretty California Rolls Royce',
    url: '../../src/assets/img/slider_image_california.jpg',
  },
];

/**
 *
 * @param {array} elements array of objects
 * @param {HTMLElement} container HTMLelement
 */
const createSlider = (elements, container) => {
  elements.forEach((element) => {
    const elementsContainer = document.createElement('div');
    const elementsHeader = document.createElement('div');
    const elementsHeaderTitle = document.createElement('h2');
    const elementsHeaderText = document.createElement('p');
    const elementsPicture = document.createElement('img');
    elementsContainer.classList.add('elements__wrapper');
    elementsHeader.classList.add('elements__header');
    elementsHeaderTitle.innerHTML = element.title;
    elementsHeaderText.innerHTML = element.description;
    elementsPicture.src = element.url;
    elementsHeader.appendChild(elementsHeaderTitle);
    elementsHeader.appendChild(elementsHeaderText);
    elementsContainer.appendChild(elementsHeader);
    elementsContainer.appendChild(elementsPicture);

    container.appendChild(elementsContainer);
  });
};
