import { createContact } from './modules_tabs/contact';
import { createHome } from './modules_tabs/home';
import { createMenu } from './modules_tabs/menu';

const createContent = () => {
  const content = document.getElementById('content');
  const navbar = document.getElementById('navbar');
  const container = document.createElement('main');
  createHome(container);
  container.id = 'home';
  navbar.addEventListener('click', (event) => {
    if (
      event.target.id == 'Home' &&
      container.childNodes[0].textContent !== 'SashaSushi'
    ) {
      container.innerHTML = '';
      createHome(container);
      container.id = 'home';
    }
    if (
      event.target.id == 'Menu' &&
      container.childNodes[0].textContent !== 'SashaMenu'
    ) {
      container.innerHTML = '';
      createMenu(container);
      container.id = 'menu';
    }
    if (
      event.target.id == 'Contact' &&
      container.childNodes[0].textContent !== 'SashaContact'
    ) {
      container.innerHTML = '';
      createContact(container);
      container.id = 'contact';
    }
  });
  content.appendChild(container);
};

export { createContent };
