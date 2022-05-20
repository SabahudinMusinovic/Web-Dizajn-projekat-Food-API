
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
.then(res=>res.json())
.then(data=>console.log(data))

const api_url='https://ptf-web-dizajn-2022.azurewebsites.net/api/Food'

async function getFood(){ //prikaz stavki (GET)

const response= await fetch(api_url);
const data=await response.json();
for (let i=0; i<data.length;i++){
  const {name,price}=data[i];
  document.getElementById('nam'+i).textContent=name;
  document.getElementById('pri'+i).textContent=price;
  }
}
getFood();

const addFoodListItem=()=>{ //dodavanje stavke (POST)
  const id=document.getElementById('food-id').value
  const name=document.getElementById('food-name').value
  const price=document.getElementById('food-price').value
  const imageUrl=document.getElementById('food-imageUrl').value
  fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food',{
    method: 'POST',
    headers:{'Content-type':'application/json;charset=UTF-8'},
    body:JSON.stringify({
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl
    })
  }).then(res=>{
    console.log(res);
  })
  }

