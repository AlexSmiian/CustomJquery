const $ = (selector) => {
    const elements = document.querySelectorAll(selector);

    return elements.length === 1 ? elements[0] : elements;
};

const addClass = (element, className) => {
        element.classList.add(className);
};

const removeClass = (element, className) => {
        element.classList.remove(className);
};

const toggle = (item,className) => {
    item.classList.contains(className) ? removeClass(item,className) : addClass(item,className);
}

// Exlample
const activeClass = '--active'

console.log($('.item-custom'));
console.log($('#wrapper-id'))
console.log($('[data-item]'))

$('.item-custom').forEach(function(item) {
    item.addEventListener('click',() => {
        toggle(item, activeClass); 
    })
})