let allmenu = [];

fetch("https://wpu-cafe.vercel.app/api/menu")
  .then((response) => response.json())
  .then((data) => {
    allmenu = data.data;
    console.log(allmenu);
    displayMenu(allmenu);
  })
  .catch((error) => {
    console.error("Error fetching menu data:", error);
  });

function displayMenu(menu) {
  const menuList = document.querySelector(".menu-grid");
  menuList.innerHTML = ""; // Clear existing menu items

  menu.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = item.image_url;
    image.alt = item.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = item.name;
    card.appendChild(name);

    menuList.appendChild(card);
  });
}
