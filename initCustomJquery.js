function $(selector) {
    let elements = document.querySelectorAll(selector);

    // Якщо знайдено один елемент, то повертати його як одиничний
    if (elements.length === 1) {
        elements = elements[0];
    }

    // Створюємо об'єкт для додавання методів
    const api = {
        addClass(className) {
            if (elements instanceof Element) {
                elements.classList.add(className);
            } else {
                elements.forEach(el => el.classList.add(className));
            }
            return this; // Повертаємо api для можливості ланцюжка
        },

        removeClass(className) {
            if (elements instanceof Element) {
                elements.classList.remove(className);
            } else {
                elements.forEach(el => el.classList.remove(className));
            }
            return this; // Повертаємо api для можливості ланцюжка
        },

        on(event, handler) {
            if (elements instanceof Element) {
                elements.addEventListener(event, handler);
            } else {
                elements.forEach(el => el.addEventListener(event, handler));
            }
            return this; // Повертаємо api для можливості ланцюжка
        }
    };

    // Якщо це один елемент, додаємо методи і повертаємо його
    if (elements instanceof Element) {
        return Object.assign(elements, api);
    }

    // Якщо це колекція елементів, додаємо методи і повертаємо колекцію
    elements.forEach(el => Object.assign(el, api));

    return elements;
}

// Використання
const wrapper = $('.item');

console.log($('.wrapper'));
console.log($('.item'));

// Видаляємо клас після кліку
wrapper.forEach(item => {
    item.on('click', function () {
        item.addClass('--active');
    });

    item.on('click', function () {
        item.removeClass('--active');
    });
});
