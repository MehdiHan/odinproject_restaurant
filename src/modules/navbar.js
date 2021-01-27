const createNavbar = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  const links = ['Home', 'Menu', 'Contact'];
  links.forEach((link) => {
    const navLink = document.createElement('a');
    navLink.href = `#${link}`;
    navLink.innerHTML = link;
    navLink.id = link;
    nav.appendChild(navLink);
  });

  nav.id = 'navbar';
  content.appendChild(nav);
};

export { createNavbar };
