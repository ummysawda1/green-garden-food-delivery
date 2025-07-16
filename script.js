
const menuList = [
  { menu_name: "Chicken Noodle Bowl", menu_image: "assets/menu_1.webp" },
  { menu_name: "Beef Shawarma Wrap", menu_image: "assets/menu_2.webp" },
  { menu_name: "Berry Waffles", menu_image: "assets/menu_3.webp" },
  { menu_name: "Club Sandwich", menu_image: "assets/menu_4.webp" },
  { menu_name: "Rainbow Layer Cake", menu_image: "assets/menu_5.webp" },
  { menu_name: "Chickpea Curry with Rice", menu_image: "assets/menu_6.webp" },
  { menu_name: "Penne Arrabbiata", menu_image: "assets/menu_7.webp" },
  { menu_name: "Shrimp Ramen Bowl", menu_image: "assets/menu_8.webp" },
];

const foodItems = [
  { name: "Asparagus Salad", image: "assets/food_1.webp", description: "Fresh asparagus with a tangy orange sauce.", price: "৳ 120" },
  { name: "Caesar Salad", image: "assets/food_2.webp", description: "Classic Caesar salad with crisp lettuce and dressing.", price: "৳ 110" },
  { name: "Endive & Walnut Salad", image: "assets/food_3.webp", description: "Endive leaves with walnuts and blue cheese.", price: "৳ 130" },
  { name: "Grilled Halloumi Salad", image: "assets/food_4.webp", description: "Salad topped with grilled halloumi cheese.", price: "৳ 140" },
  { name: "Spinach Lasagna Roll", image: "assets/food_5.webp", description: "Lasagna roll stuffed with spinach and cheese.", price: "৳ 150" },
  { name: "Chicken Tikka Wraps", image: "assets/food_6.webp", description: "Soft wraps filled with spicy chicken tikka.", price: "৳ 120" },
];

// Swiper Slides with Menu List
menuList.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    
    slide.innerHTML = `
        <img src="${item.menu_image}" alt="${item.menu_name}" />
        <p>${item.menu_name}</p>
    `;
    
    document.querySelector('.swiper-wrapper').appendChild(slide);
});

// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
    // Automatic scrolling parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0, // No gap between slides
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 2, // Show 2 items on mobile
            spaceBetween: 0 // No gap
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0 // No gap
        },
        1024: {
            slidesPerView: 5, // Show 5 items on desktop
            spaceBetween: 0 // No gap
        },
    }
});



// Smooth scroll to Explore Menu section
document.getElementById('view-menu-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('explore-menu').offsetTop,
        behavior: 'smooth'
    });
});



// Inject food items into the menu
const menuContainer = document.querySelector('.menu-container');

foodItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
        <button>Add to Cart</button>
    `;

    menuContainer.appendChild(menuItem);
});

// Modal toggle logic for sign in/sign up
const signInBtns = document.querySelectorAll('#sign-in-btn');
const authModal = document.getElementById('authentication-modal');
const regModal = document.getElementById('registration-modal');

signInBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    authModal.classList.remove('hidden');
    authModal.classList.add('flex');
    authModal.style.display = 'flex';
    authModal.style.justifyContent = 'center';
    authModal.style.alignItems = 'center';
  });
});

// Close modal logic
const closeAuthBtns = document.querySelectorAll('[data-modal-hide="authentication-modal"]');
closeAuthBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    authModal.classList.add('hidden');
    authModal.classList.remove('flex');
    authModal.style.display = '';
  });
});

const closeRegBtns = document.querySelectorAll('[data-modal-hide="registration-modal"]');
closeRegBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    regModal.classList.add('hidden');
    regModal.classList.remove('flex');
    regModal.style.display = '';
  });
});

// Toggle between sign in and sign up
const toRegLinks = document.querySelectorAll('[data-modal-toggle="registration-modal"]');
toRegLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('hidden');
    authModal.classList.remove('flex');
    authModal.style.display = '';
    regModal.classList.remove('hidden');
    regModal.classList.add('flex');
    regModal.style.display = 'flex';
    regModal.style.justifyContent = 'center';
    regModal.style.alignItems = 'center';
  });
});

const toAuthLinks = document.querySelectorAll('[data-modal-toggle="authentication-modal"]');
toAuthLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    regModal.classList.add('hidden');
    regModal.classList.remove('flex');
    regModal.style.display = '';
    authModal.classList.remove('hidden');
    authModal.classList.add('flex');
    authModal.style.display = 'flex';
    authModal.style.justifyContent = 'center';
    authModal.style.alignItems = 'center';
  });
});
