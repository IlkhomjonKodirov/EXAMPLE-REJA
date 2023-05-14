console.log('Frontend JS ishga tushdi');

function itemTemplate(item) {
  return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text"> ${item.reja} </span>
      <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
      </div>
    </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e){
  e.preventDefault();// submit qilinganda boshqa urlga o'tib ketmasligi uchun preventDefault() ishlatiladi

  axios
    .post("/create-item", {reja: createField.value})
    .then((responce) => {
      document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(responce.data));
      createField.value = "";
      createField.focus();  
  })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});

/* axiosning yaxshi tomoni: 
  1)json formatni qabul qilayotganda uni avtomatik object qilib beradi
  2) Ma'lumotni yuborayotgan paytda ham objectni jsonga avtomatik o'tkazib jo'natadi */