const createSocialNav = (element) => {
  const socialNav = document.createElement('nav');
  const socialLinks = [
    { name: 'facebook', fontAwesome: '<i class="fab fa-facebook-f"></i>' },
    { name: 'instagram', fontAwesome: '<i class="fab fa-instagram"></i>' },
    { name: 'twitter', fontAwesome: '<i class="fab fa-twitter"></i>' },
  ];

  socialLinks.forEach((socialLink) => {
    const link = document.createElement('a');
    link.href = `http://www.${socialLink.name}.com`;
    link.innerHTML = `${socialLink.fontAwesome}<span class="display__none">${socialLink.name}</span>`;
    socialNav.appendChild(link);
  });

  element.appendChild(socialNav);
};

const createContact = (element) => {
  const headline = document.createElement('h1');
  const container = document.createElement('div');
  const picture = document.createElement('img');
  const formContainer = document.createElement('div');
  const formTitle = document.createElement('h2');
  const formContact = document.createElement('div');
  const formContactAdress = document.createElement('p');
  const formContactPhone = document.createElement('p');

  headline.innerHTML = 'SashaContact';
  formTitle.innerHTML = 'SashaSushi';
  formContactAdress.innerHTML =
    '<i class="fas fa-map-marker-alt"></i> 1636 South St - Philadelphia, PA';
  formContactPhone.innerHTML =
    '<i class="fas fa-phone-alt"></i> (215) 735-6668';
  picture.src = '../../src/assets/img/contact_image.jpg';

  formContainer.classList.add('form__container');
  container.classList.add('container');

  formContact.appendChild(formContactAdress);
  formContact.appendChild(formContactPhone);
  formContainer.appendChild(formTitle);
  formContainer.appendChild(formContact);
  createSocialNav(formContainer);

  container.appendChild(picture);
  container.appendChild(formContainer);

  element.appendChild(headline);
  element.appendChild(container);
};

export { createContact };
