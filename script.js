// Sample Data for Menu List
const menuList = [
    {
        menu_name: "Salad",
        menu_image: "assets/menu_1.png"
    },
    {
        menu_name: "Rolls",
        menu_image: "assets/menu_2.png"
    },
    {
        menu_name: "Deserts",
        menu_image: "assets/menu_3.png"
    },
    {
        menu_name: "Sandwich",
        menu_image: "assets/menu_4.png"
    },
    {
        menu_name: "Cake",
        menu_image: "assets/menu_5.png"
    },
    {
        menu_name: "Pure Veg",
        menu_image: "assets/menu_6.png"
    }
];

// Sample data for food items
const foodItems = [
    {
        name: "Endive Salad with Walnuts",
        description: "Endive leaves paired with crunchy walnuts and blue cheese.",
        price: "100tk",
        image: "assets/food_1.png"
    },
    {
        name: "Mixed Green Salad",
        description: "A healthy green salad with lettuce, leafy greens, and crunchy toppings.",
        price: "150tk",
        image: "assets/food_2.png"
    },
    {
        name: "Endive Salad with Walnuts",
        description: "Endive leaves paired with crunchy walnuts and blue cheese.",
        price: "80tk",
        image: "assets/food_3.png"
    },
    {
        name: "Grilled Cheese Salad",
        description: "Salad topped with deliciously grilled cheese, fresh veggies, and herbs.",
        price: "120tk",
        image: "assets/food_4.png"
    },
    {
        name: "Spinach Lasagna Roll",
        description: "Rich spinach lasagna roll topped with a creamy cheese sauce.",
        price: "200tk",
        image: "assets/food_5.png"
    },
    {
        name: "Spicy Chicken Wrap",
        description: "Soft tortillas filled with spicy marinated chicken, veggies, and sauce.",
        price: "300tk",
        image: "assets/food_6.png"
    }
];



// Populate Swiper Slides with Menu List
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
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

// Handle Sign In Button Click
document.getElementById('sign-in-btn').addEventListener('click', () => {
    alert('Sign in functionality is not implemented yet.');
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
