import _ from 'lodash';
const content = document.getElementById('content');
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  return element;
}

document.body.appendChild(component());
