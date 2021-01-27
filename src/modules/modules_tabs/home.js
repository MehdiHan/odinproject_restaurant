const createHome = (element) => {
  const headline = document.createElement('h1');
  headline.innerHTML = 'SashaSushi';

  element.appendChild(headline);
};

export { createHome };
