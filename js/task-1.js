const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length - 1}`); // -1 Гадаю що сам єлемент .ітем тоже буде Лі (не впевнений але вроді працує)
});
