import backgroundImage from './image/Background.jpg';
import Menu from './Menu.json'
const image = document.createElement('img');
image.src = backgroundImage;
const MenuPage = (function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('menu');
     newDiv.id = 'menu-page';
   Menu.map((item)=>{
    const MenuItem = document.createElement('div');
    MenuItem.classList.add('menu-item');
    MenuItem.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
    `;
    return newDiv.appendChild(MenuItem);
   })
   
    return {
        render: () => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newDiv);
        }
    };
})();
export default MenuPage;