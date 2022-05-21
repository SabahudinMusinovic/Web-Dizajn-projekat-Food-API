fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food")
  .then((res) => res.json())
  .then((data) => console.log(data));

const api_url = "https://ptf-web-dizajn-2022.azurewebsites.net/api/Food";

async function getFood() {
  //prikaz stavki (GET)

  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let tempHtml = `
          <div class="p-card">
            <img src="${data[i].imageUrl}" alt="Net Error" />
            <h4><span id="nam0">${data[i].name}</span></h4>
            <p class="price"><span id="pri0">${data[i].price}</span></p>   
          </div>
  `;
    document
      .querySelector(".popular-content")
      .insertAdjacentHTML("beforeend", tempHtml);
  }
}
getFood();

const addFoodListItem = () => {
  //dodavanje stavke (POST)
  const foodid = document.querySelector(".food-id").value;
  const foodname = document.querySelector(".food-name").value;
  const foodprice = document.querySelector(".food-price").value;
  const foodimageUrl = document.querySelector(".food-imageUrl").value;
  fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      id: foodid,
      name: foodname,
      price: foodprice,
      imageUrl: foodimageUrl,
    }),
  }).then((res) => {
    console.log(res);
  });
};
document.querySelector(".sumbit-button").addEventListener("click", () => {
  addFoodListItem();
});
const deleteFoodListItem = (id) => {
  fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food", {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
  });
};
const completeFoodListItem = (id) => {
  fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food", {
    method: "PUT",
  }).then((res) => {
    console.log(res);
  });
};

