export const createDiv = (id) => {
  const div = document.createElement('div');
  div.id = id;
  return div;
};

export const createInput = (id, type, placeholder) => {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  input.placeholder = placeholder;
  return input;
};

export const createHeading = (text) => {
  const heading = document.createElement('h4');
  heading.textContent = text;
  return heading;
};

export const createImage = (id, src) => {
  const image = document.createElement('img');
  image.id = id;
  image.src = src;
  return image;
};

export const createCheckbox = () => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  return checkbox;
};

export const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};

export const appendChildren = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
};