export const cups = [
    {
        volume: "250ml",
        size: 'S'
    },
    {
        volume: "350ml",
        size: 'M'
    },
    {
        volume: "450ml",
        size: 'L'
    },
];

export const categories = [
    { id: 'fruit', name: "fruit" },
    { id: 'black', name: "black" },
    { id: 'with_milk', name: "with milk" },
    { id: 'iced_drinks', name: "iced drinks" },
    { id: 'food', name: "food" },
    { id: 'tea', name: "tea" },
    { id: 'speciality', name: "speciality" },
    { id: 'matcha_and_cocoa', name: "matcha and cocoa" },
    { id: 'take_away', name: "take away" },
    { id: 'fresh', name: "fresh" },
    { id: 'lemonade', name: "lemonade" },
    { id: 'with_cheese_foam', name: "with_cheese_foam" }
];



export const products = [
    {
        id: 1,
        photo: "./coffee.jpg",
        video: "cappuccino.mp4",
        title: "Cappuccino",
        description: "Classic coffee with steamed microfoam",
        categories: ["black", "with_milk"],
        sub_category: "hot_drinks",
        price: "3.45 USD",
        nutritions: "188kcal",
        weight: "190g",
        protein: "5.8g",
        fats: "5.8g",
        carbs: "9g",
        ingredients: {
            description: ["espresso", "milk"],
            may_contain: ["nuts", "gluten"],
            allergens: ["caffeine", "lactose"]
        }
    },
    {
        id: 2,
        photo: "green_tea.jpg",
        video: "green_tea.mp4",
        title: "Green Tea",
        description: "Freshly brewed green tea with a delicate flavor",
        categories: ["tea", "fresh"],
        sub_category: "hot_drinks",
        price: "2.50 USD",
        nutritions: "0kcal",
        weight: "180g",
        protein: "0g",
        fats: "0g",
        carbs: "0g",
        ingredients: {
            description: ["green tea leaves"],
            may_contain: ["honey", "sugar"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 3,
        photo: "blueberry_cheesecake.jpg",
        video: "blueberry_cheesecake.mp4",
        title: "Blueberry Cheesecake",
        description: "Creamy cheesecake with a tangy blueberry topping",
        categories: ["food", "speciality"],
        sub_category: "desserts",
        price: "4.95 USD",
        nutritions: "320kcal",
        weight: "150g",
        protein: "6g",
        fats: "18g",
        carbs: "36g",
        ingredients: {
            description: ["cream cheese", "blueberries", "sugar", "eggs"],
            may_contain: ["nuts", "gluten"],
            allergens: ["lactose", "eggs"]
        }
    },
    {
        id: 4,
        photo: "lemon_iced_tea.jpg",
        video: "lemon_iced_tea.mp4",
        title: "Lemon Iced Tea",
        description: "Refreshing iced tea with a splash of lemon",
        categories: ["tea", "iced_drinks", "lemonade"],
        sub_category: "cold_drinks",
        price: "2.95 USD",
        nutritions: "80kcal",
        weight: "250g",
        protein: "0g",
        fats: "0g",
        carbs: "20g",
        ingredients: {
            description: ["black tea", "lemon juice", "sugar"],
            may_contain: ["mint", "honey"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 5,
        photo: "avocado_toast.jpg",
        video: "avocado_toast.mp4",
        title: "Avocado Toast",
        description: "Crispy toast topped with creamy avocado and a pinch of salt",
        categories: ["food", "fresh"],
        sub_category: "snacks",
        price: "5.45 USD",
        nutritions: "250kcal",
        weight: "120g",
        protein: "4g",
        fats: "15g",
        carbs: "28g",
        ingredients: {
            description: ["sourdough bread", "avocado"],
            may_contain: ["sesame seeds", "tomatoes"],
            allergens: ["gluten"]
        }
    },
    {
        id: 6,
        photo: "matcha_latte.jpg",
        video: "matcha_latte.mp4",
        title: "Matcha Latte",
        description: "Smooth and creamy matcha blended with steamed milk",
        categories: ["with_milk", "matcha_and_cocoa"],
        sub_category: "hot_drinks",
        price: "4.25 USD",
        nutritions: "180kcal",
        weight: "200g",
        protein: "6g",
        fats: "7g",
        carbs: "18g",
        ingredients: {
            description: ["matcha green tea powder", "milk"],
            may_contain: ["sugar", "honey"],
            allergens: ["caffeine", "lactose"]
        }
    },
    {
        id: 7,
        photo: "fruit_salad.jpg",
        video: "fruit_salad.mp4",
        title: "Fruit Salad",
        description: "A fresh mix of seasonal fruits",
        categories: ["fresh", "food"],
        sub_category: "snacks",
        price: "3.75 USD",
        nutritions: "120kcal",
        weight: "250g",
        protein: "2g",
        fats: "0.5g",
        carbs: "28g",
        ingredients: {
            description: ["apples", "bananas", "strawberries", "grapes"],
            may_contain: ["kiwi", "orange"],
            allergens: []
        }
    },
    {
        id: 8,
        photo: "chicken_wrap.jpg",
        video: "chicken_wrap.mp4",
        title: "Chicken Wrap",
        description: "Grilled chicken with vegetables and sauce in a soft tortilla",
        categories: ["food", "take_away"],
        sub_category: "main_courses",
        price: "6.50 USD",
        nutritions: "350kcal",
        weight: "300g",
        protein: "25g",
        fats: "10g",
        carbs: "35g",
        ingredients: {
            description: ["chicken breast", "lettuce", "tomato", "tortilla", "sauce"],
            may_contain: ["cheese", "onions"],
            allergens: ["gluten"]
        }
    },
    {
        id: 9,
        photo: "cold_brew_coffee.jpg",
        video: "cold_brew_coffee.mp4",
        title: "Cold Brew Coffee",
        description: "Smooth, cold-steeped coffee served over ice",
        categories: ["black", "iced_drinks"],
        sub_category: "cold_drinks",
        price: "3.00 USD",
        nutritions: "5kcal",
        weight: "250g",
        protein: "0.3g",
        fats: "0g",
        carbs: "1g",
        ingredients: {
            description: ["cold brew coffee concentrate", "water", "ice"],
            may_contain: ["milk", "sugar", "syrup"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 10,
        photo: "vegan_burger.jpg",
        video: "vegan_burger.mp4",
        title: "Vegan Burger",
        description: "Plant-based burger patty with vegan cheese on a whole wheat bun",
        categories: ["food", "speciality"],
        sub_category: "main_courses",
        price: "7.95 USD",
        nutritions: "420kcal",
        weight: "320g",
        protein: "22g",
        fats: "20g",
        carbs: "40g",
        ingredients: {
            description: ["plant-based patty", "vegan cheese", "lettuce", "tomato", "whole wheat bun"],
            may_contain: ["onions", "pickles"],
            allergens: ["gluten", "soy"]
        }
    }

];
