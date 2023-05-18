console.log('Frontend JS ishga tushdi');

function itemTemplate(item) {
  return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text"> ${item.reja} </span>
      <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
      </div>
    </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e){
  e.preventDefault();// submit qilinganda boshqa urlga o'tib ketmasligi uchun preventDefault() ishlatiladi

  axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {
      document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(response.data));
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

document.addEventListener('click', function(e) {
  // delete operations
  console.log(e.target);
  if(e.target.classList.contains('delete-me')) {
    // alert('Siz delete tugmasini bosdingiz');
    if(confirm("Aniq o'chirmoqchimisiz?")) {
      // alert("Yes deb javob berildi");
      axios
      .post("/delete-item", {id: e.target.getAttribute("data-id")})// frontendan id post qilinyapti
      .then((respose) => {
        console.log(respose.data);
        e.target.parentElement.parentElement.remove(); // biz o'chirmoqchi bo'lgan rejani tutgan li tagini butunlay o'chirish mantig'i
      })
      .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
      });
    }
  }
  // edit operations
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) { 
      axios
        .post("/edit-item", { 
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling!");
        });
    }
  }
});
// Hamma rejalarni o'chirish
document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});

