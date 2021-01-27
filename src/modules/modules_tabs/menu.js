const createMenu = (element) => {
  const headline = document.createElement('h1');
  headline.innerHTML = 'SashaMenu';

  element.appendChild(headline);
};

export { createMenu };
