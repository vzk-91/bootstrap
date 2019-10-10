const postUrl = "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog";
const usersUrl = "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users"
const cart = document.getElementById("cart");
const aside = document.getElementById("aside");
const submBtn = document.getElementById('submBtn');
const title= document.getElementById('title');
const description = document.getElementById('desc');


const getPostsByFetch = function () {
    
    fetch(
      postUrl, 
      {
        method: "get"
      }
    )
      .then(function (response) { 
        return response.json().then(function (data) { 
          console.log(data);
          
          data.forEach(function(el) {
            cart.insertAdjacentHTML( 'beforeend',`<div class='item'>
            <div class='title'> <p>${el.author}</p>  <p>${el.title}</p>   </div>
            <div class='discription'> ${el.description}</div>
            </div>`)
          })
        });
      })
  };
  
   getPostsByFetch();

   const getUsersByFetch = function (){
    fetch(
        usersUrl, 
        {
          method: "get" 
        }
      )
        .then(function (response) { 
          return response.json().then(function (data) { 
            data.forEach(function(el) {
              aside.insertAdjacentHTML( 'beforeend',`<div class='item_bloger'>
                <img src="${el.avatar}" class="photo"> 
                <p> ${el.name}</p>
              </div>`);
            });
          });
        });
    };
   
    getUsersByFetch()

   submBtn.addEventListener('click', function(){
    const data = { 
      title: title.value,
      description: description.value,
      
    }
  
    fetch( 
      postUrl,
      {
        method: "POST", 
        body: JSON.stringify(data), 
        headers: {
          'Content-Type': 'application/json' 
        }
      }
    )
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (err) {
      console.log("Error", err);
    });
  })
  
     
   

