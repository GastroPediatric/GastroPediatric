// Obtener referencias al formulario y contenedor de testimonios
const form = document.getElementById('testimonial-form');
const testimonialsContainer = document.getElementById('testimonials-container');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Crear un nuevo elemento de testimonio
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    // Añadir el contenido del testimonio
    testimonialElement.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
        <hr>
    `;

    // Añadir el testimonio al contenedor
    testimonialsContainer.appendChild(testimonialElement);

    // Limpiar el formulario
    form.reset();
});
