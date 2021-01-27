const createContact = (element) => {
  const headline = document.createElement('h1');
  headline.innerHTML = 'SashaContact';
  element.appendChild(headline);
};

export { createContact };
