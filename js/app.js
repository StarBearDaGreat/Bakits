// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);

// Page navigation
function showPage(page) {
    // Hide all pages
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('subscribe-page').classList.add('hidden');
    document.getElementById('recipes-page').classList.add('hidden');
    document.getElementById('recipe-detail-page').classList.add('hidden');
    document.getElementById('subscription-payment-page').classList.add('hidden');
    document.getElementById('mbway-payment-page').classList.add('hidden');
    document.getElementById('about-page').classList.add('hidden');
    
    // Show selected page
    switch(page) {
        case 'home':
            document.getElementById('home-page').classList.remove('hidden');
            break;
        case 'subscribe':
            document.getElementById('subscribe-page').classList.remove('hidden');
            break;
        case 'recipes':
            document.getElementById('recipes-page').classList.remove('hidden');
            break;
        case 'subscription-payment':
            document.getElementById('subscription-payment-page').classList.remove('hidden');
            break;
        case 'mbway-payment':
            document.getElementById('mbway-payment-page').classList.remove('hidden');
            break;
        case 'about':
            document.getElementById('about-page').classList.remove('hidden');
            break;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show individual recipe
function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    
    // Populate recipe details
    document.getElementById('detail-image').style.background = recipe.image;
    document.getElementById('detail-name').textContent = recipe.name;
    document.getElementById('detail-difficulty').textContent = recipe.difficulty;
    document.getElementById('detail-yield').textContent = recipe.yield;
    document.getElementById('detail-time').textContent = recipe.time;
    document.getElementById('detail-description').textContent = recipe.description;
    
    // Populate included items
    const includedList = document.getElementById('detail-included');
    includedList.innerHTML = '';
    recipe.included.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        includedList.appendChild(li);
    });
    
    // Show recipe detail page
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('subscribe-page').classList.add('hidden');
    document.getElementById('recipes-page').classList.add('hidden');
    document.getElementById('recipe-detail-page').classList.remove('hidden');
    document.getElementById('subscription-payment-page').classList.add('hidden');
    document.getElementById('mbway-payment-page').classList.add('hidden');
    document.getElementById('about-page').classList.add('hidden');
    
    window.scrollTo(0, 0);
}
    // Email functions
    function sendSubscriptionEmail() {
const subject = encodeURIComponent("Subscription Inquiry - Bakits");
const body = encodeURIComponent(
    "Hello Bakits Team,\n\n" +
    "I am interested in subscribing to your cookie kit service.\n\n" +
    "Please provide me with:\n" +
    "- Payment instructions for Mbway\n" +
    "- Details about the subscription plan I selected\n" +
    "- Any additional information needed to complete my subscription\n\n" +
    "Thank you!\n\n" +
    "Best regards"
);

window.location.href = `mailto:bakits.pt@gmail.com?subject=${subject}&body=${body}`;
    }
    
    function sendRecipeEmail() {
const subject = encodeURIComponent("Recipe Kit Purchase - Bakits");
const body = encodeURIComponent(
    "Hello Bakits Team,\n\n" +
    "I would like to purchase a cookie recipe kit.\n\n" +
    "Recipe: [Please specify which recipe you're interested in]\n\n" +
    "Please provide me with:\n" +
    "- Payment instructions for Mbway\n" +
    "- Total cost including shipping\n" +
    "- Estimated delivery time\n\n" +
    "Thank you!\n\n" +
    "Best regards"
);

window.location.href = `mailto:bakits.pt@gmail.com?subject=${subject}&body=${body}`;
    }

