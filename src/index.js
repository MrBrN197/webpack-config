
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello Webpack';

    return element;
}

document.body.appendChild(component());