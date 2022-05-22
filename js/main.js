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
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/0`, {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
  });
};
const completeFoodListItem = () => {
  const foodid = document.querySelector(".food-id").value;
  const foodname = document.querySelector(".food-name").value;
  const foodprice = document.querySelector(".food-price").value;
  const foodimageUrl = document.querySelector(".food-imageUrl").value;
  fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food", {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      id: Number(foodid),
      name: String(foodname),
      price: Number(foodprice),
      imageUrl: String(foodimageUrl),
    })
  }).then((res) => {
    console.log(res);
  }); 
};

document.querySelector(".dodaj-button").addEventListener("click", () => {
  document.querySelector(".dodaj").style.display = "block";
  document.querySelector(".update").style.display = "none";
  document.querySelector(".izbrisi").style.display = "none";
});
document.querySelector(".izmjena-button").addEventListener("click", () => {
  document.querySelector(".update").style.display = "block";
  document.querySelector(".dodaj").style.display = "none";
  document.querySelector(".izbrisi").style.display = "none";
});
document.querySelector(".brisi-button").addEventListener("click", () => {
  document.querySelector(".izbrisi").style.display = "block";
  document.querySelector(".dodaj").style.display = "none";
  document.querySelector(".update").style.display = "none";
});


const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");


const catagory = document.querySelectorAll(".catagory input");
const cataImg = document.querySelector("#c-img");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});


document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");


  connectSecWithNavLink();
});

catagory.forEach((element) => {
  element.addEventListener("click", () => {
    catagory.forEach((ele) => {
      ele.classList.remove("active");
    });

    let values = element.value;
    element.classList.add("active");
    
  });
});


const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};

let deleteId=document.querySelector('.food-id')
let deleteForm=document.querySelector('.deleteForm')
let updateForma=document.querySelector('.updateForma')
deleteForm.addEventListener("submit",(e)=>{
  e.preventDefault() 
  deleteFoodListItem(Number(deleteId.value))
})  
updateForma.addEventListener("submit",(e)=>{
  e.preventDefault() 
  completeFoodListItem()
})  