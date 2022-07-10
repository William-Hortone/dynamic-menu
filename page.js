const menu = [
  {
    id: 1,
    title: "Burger with tomato",
    category: "burger",
    price: "10,99",
    img: "./images/3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea necessitatibus ducimus labore dolor, eius tempore",
  },
  {
    id: 2,
    title: "Cocktail",
    category: "drink",
    price: "9,99",
    img: "./images/12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },

  {
    id: 3,
    title: "Spaghetti",
    category: "dinner",
    price: "22,99",
    img: "./images/7.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },

  {
    id: 4,
    title: "Simple Burger",
    category: "burger",
    price: "18,99",
    img: "./images/6.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },
  {
    id: 5,
    title: "Orange Cocktail",
    category: "drink",
    price: "12,99",
    img: "./images/11.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },
  {
    id: 6,
    title: "Chicken Salade",
    category: "dinner",
    price: "32,99",
    img: "./images/10.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },

  {
    id: 7,
    title: "Pancakes Buttermilk",
    category: "dinner",
    price: "30,99",
    img: "./images/9.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },
  {
    id: 8,
    title: "Chicken Buttermilk",
    category: "burger",
    price: "15,99",
    img: "./images/2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea necessitatibus ducimus labore dolor, eius tempore",
  },
  {
    id: 9,
    title: "Chicken Buttermilk",
    category: "dinner",
    price: "25,99",
    img: "./images/8.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },
  {
    id: 10,
    title: " Tomato Burger King",
    category: "burger",
    price: "20,99",
    img: "./images/4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea necessitatibus ducimus labore dolor, eius tempore",
  },
  {
    id: 11,
    title: "Soda Cocktail",
    category: "drink",
    price: "19,99",
    img: "./images/13.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aliquid maxime minima nesciunt praesentium voluptas quaerat, quis ea nectempore",
  },
];

let container = document.querySelector(".container");
const buttons = document.querySelectorAll(".button");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(itemsMenu) {
  let displayMenu = itemsMenu.map((items) => {
    return ` <article class="food_container">
    <div class="image_box">
      <img src="${items.img}" alt="#" id="food_img" />
    </div>

    <div class="text_container">
      <div class="title_price">
        <h2 id="food_title">${items.title}</h2>
        <p>$<span id="price">${items.price}</span></p>
      </div>

      <div>
        <p id="description">${items.text}</p>
      </div>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  container.innerHTML = displayMenu;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let category = e.currentTarget.dataset.id;

    let displayCategory = menu.filter((item) => {
      if (item.category == category) {
        return item;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(displayCategory);
    }
  });
});
