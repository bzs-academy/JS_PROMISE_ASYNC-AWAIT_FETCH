/*
1. YÖNTEM 

FETCH + PROMISE :
-----------------

FETCH - PROMISE yapisina sahiptir
ASYNC calisir
Promise chain kullanabiliriz

fetch(url adresi)
    .then()
    .catch()

request, response :
-------------------
request : kullanici tarafindan server'a yapilan talep
response : server'in kullaniciya dondugu sonuc ;  basarili / basarisiz durum


HTTP methods : get , post, put, patch, delete
--------------

CORS (Cross Origin Resource Share) : Farklı Kaynaklar Arası Veri Paylaşımı

*/

// function makeRequest() {
//     const url = "http://jsonplaceholder.typicode.com/posts";

//     // Promise yapisi ile url adresinden data talebinde bulunuyorum. ( request )   --> basarili / basarisiz bir durum response edecek
    
//     fetch(url)
//         .then( response => {
//             console.log(response);
//             return response.json();
//         })
//         .then( data => {
//             console.log(data[0]);
//             document.getElementById('title').innerHTML = data[0].title;
//             document.getElementById('text').innerHTML = data[0].body;

//             // data.slice(0, 10).forEach( (item, index) => {
//             //     document.getElementById('div1').innerHTML += `<h2>${index + 1}. ${item.title}</h2> \n <p>${item.body}</p>`; 
//             // });

//             data.slice(0, 10).map( (item, index) => {
//                 document.getElementById('div1').innerHTML += `<h2>${index + 1}. ${item.title}</h2> \n <p>${item.body}</p>`; 
//                 document.querySelectorAll('div h2').forEach( tag => tag.style.color = 'blue');
//             });

//         })
//         .catch( error => console.log(error));
// }

// makeRequest();


// 2. YÖNTEM

// FETCH()  +  ASYNC & AWAIT 
// ASYNC & AWAIT  : adim adim ilerler ve islemin sonucunu "await" ile bekler 
// await kullniyor isem mutlaka fonksiyona "async" özelligi vermem gerekmektedir
// promise chain YOKTUR,  await var

/*
    async function () {
        ........
        .......
        await .......    : bu satirda beklenilmesi gereken bir response var, bu response alt satirlarda kullanmak istiyor
        ......
        await .....

    }
*/ 

async function makeRequest() {
    const url = "http://jsonplaceholder.typicode.com/posts";

    const response =  fetch(url); 
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.slice(9, 20).map( (element, index) => {
        document.getElementById('div1').innerHTML += `<h2>${index + 11}. ${element.title}</h2> \n <p>${element.body}</p>`;
    })

}
makeRequest();