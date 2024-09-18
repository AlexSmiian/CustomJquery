const $ = (selectorOrElement) => {
        if (typeof selectorOrElement === 'string') {
        const elements = document.querySelectorAll(selectorOrElement);

        if (elements.length === 0) {
            return undefined;
        }

        const isSingleElement = elements.length === 1;
        const elementArray = isSingleElement ? [elements[0]] : Array.from(elements);

        return {
            elementArray,

            addClass(className) {
                this.elementArray.forEach(element => {
                    element.classList.add(className);
                });
                return this; 
            },

            removeClass(className) {
                this.elementArray.forEach(element => {
                    element.classList.remove(className);
                });
                return this; 
            },

            onClick(callback) {
                this.elementArray.forEach(element => {
                    element.addEventListener('click', (event) => {
                        const clickedElement = event.currentTarget;
                        callback(clickedElement);
                    });
                });
                return this; 
            }
        };
    } else if (selectorOrElement instanceof Element) {

        return {
            selectorOrElement,

            addClass(className) {
                this.selectorOrElement.classList.add(className);
             
                return this; 
            },

            removeClass(className) {
                this.selectorOrElement.classList.remove(className);
                return this; 
            },

            onClick(callback) {
                this.selectorOrElement.forEach(element => {
                    element.addEventListener('click', (event) => {
                        const clickedElement = event.currentTarget;
                        callback(clickedElement);
                    });
                });
                return this; 
            }
        };
    } else {
        return undefined;
    }
};

const activeClass = '--active';
const activeGreen = '--active-green';

$('.item')
    .onClick((clickedElement) => {
        $(clickedElement).addClass(activeGreen);
    });

$('.item-custom').removeClass(activeClass).addClass(activeGreen);


console.log($('#wrapper-id'));
console.log($('.item'));
console.log($('.itemsadsd'));
