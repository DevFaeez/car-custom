// Get all the color radio buttons
const colorRadios = document.querySelectorAll('input[name="color"]');
const carImage = document.getElementById('car-image');

// Add an event listener to each color radio button
colorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        // Get the selected color
        const selectedColor = document.querySelector('input[name="color"]:checked').value;

        carImage.src = `assets/${selectedColor}-car.png`;
    });
});