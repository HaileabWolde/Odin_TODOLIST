
const HomePage = (function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('home');
    newDiv.id = 'home-page';
    // Adding a unique ID for easier targeting
    newDiv.innerHTML = `
        <h1>Welcome to Odin Restaurant</h1>
        <p>Experience the best culinary delights crafted with passion and expertise.</p>
        <button id="explore-menu">Explore Menu</button>
    `;
   
    return {
        render: () => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newDiv);
        },
        getElement: () => newDiv
    };
})();
export default HomePage;