import backgroundImage from './image/Background.jpg';
const image = document.createElement('img');
image.src = backgroundImage;
const contactPage = (function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('contact');
     newDiv.id = 'contact-page';
    newDiv.innerHTML = `
        <h1>Give Us A Call !!!</h1>
       <p>Phone: +251992621400</p>
    `;
   
    return {
        render: () => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newDiv);
        }
    };
})();
export default contactPage;