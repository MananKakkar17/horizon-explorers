// Dynamic Content (50 Destinations)
const destinations = [
    { name: "Paris", img: "paris.jpg", description: "The city of love and lights." },
    { name: "Tokyo", img: "tokyo.jpg", description: "Experience the fusion of tradition and innovation." },
    { name: "New York", img: "newyork.jpg", description: "The city that never sleeps." },
    { name: "Sydney", img: "sydney.jpg", description: "A beautiful harbor city with amazing beaches." },
    { name: "Rome", img: "rome.jpg", description: "A trip through history with ancient monuments." },
    { name: "London", img: "london.jpg", description: "A city of rich history, culture, and landmarks." },
    { name: "Mumbai", img: "mumbai.jpg", description: "The city of dreams and Bollywood." },
    { name: "Jaipur", img: "jaipur.jpg", description: "The Pink City with royal palaces." },
    { name: "Dubai", img: "dubai.jpg", description: "Modern architecture with a mix of luxury." },
    { name: "Bali", img: "bali.jpg", description: "Tropical paradise with rich culture and beaches." },
    { name: "Berlin", img: "berlin.jpg", description: "Vibrant city full of history and art." },
    { name: "Madrid", img: "madrid.jpg", description: "Explore the Spanish culture and life." },
    { name: "Los Angeles", img: "losangeles.jpg", description: "Entertainment capital of the world." },
    { name: "Cairo", img: "cairo.jpg", description: "Gateway to ancient Egypt and the pyramids." },
    { name: "Athens", img: "athens.jpg", description: "A city rich in ancient history and monuments." },
    { name: "Moscow", img: "moscow.jpg", description: "A city of iconic landmarks and history." },
    { name: "Singapore", img: "singapore.jpg", description: "A clean, modern city-state with a multicultural flair." },
    { name: "Cape Town", img: "capetown.jpg", description: "Explore the beauty of mountains and the sea." },
    { name: "Banff", img: "banff.jpg", description: "Breathtaking nature and alpine lakes." },
    { name: "Santorini", img: "santorini.jpg", description: "Famous for its blue domed churches and beautiful sunsets." },
    { name: "Rio de Janeiro", img: "rio.jpg", description: "Beaches, carnival, and the Christ the Redeemer statue." },
    { name: "Seoul", img: "seoul.jpg", description: "A modern city with deep traditional roots." },
    { name: "Goa", img: "goa.jpg", description: "Beaches, vibrant nightlife, and Portuguese heritage." },
    { name: "Agra", img: "agra.jpg", description: "The home of the iconic Taj Mahal." },
    { name: "Varanasi", img: "varanasi.jpg", description: "The spiritual capital of India, famous for its ghats." },
    { name: "Kolkata", img: "kolkata.jpg", description: "A cultural hub of art, history, and colonial architecture." },
    { name: "Phuket", img: "phuket.jpg", description: "Thailand's famous tropical destination." },
    { name: "Amsterdam", img: "amsterdam.jpg", description: "Canals, art, and picturesque streets." },
    { name: "Vienna", img: "vienna.jpg", description: "The city of imperial palaces and rich cultural heritage." },
    { name: "Hong Kong", img: "hongkong.jpg", description: "A dynamic city combining modernity with tradition." },
    { name: "Istanbul", img: "istanbul.jpg", description: "A bridge between Europe and Asia, rich in history." },
];

// Populate destination cards dynamically
const destinationsContainer = document.querySelector('.destination-cards');

destinations.forEach(dest => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${dest.img}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <button>Explore</button>
    `;
    destinationsContainer.appendChild(card);
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[name="name"]');
    const email = this.querySelector('input[name="email"]');
    const message = this.querySelector('textarea[name="message"]');

    if (name.value && email.value && message.value) {
        alert('Thank you! We will respond soon.');
        this.reset();
    } else {
        alert('Please fill all the fields correctly!');
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

