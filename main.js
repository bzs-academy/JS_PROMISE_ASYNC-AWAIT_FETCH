/*

PROMISE
ASYNC & AWAIT
FETCH ,  {AXIOS - React }
AJAX


NEREDEYIZ ? 

SYNC  VS ASYNC  ?   ---> SYNC : Es zamanli           ASYNC : paralel 

javascript ---> SYNC ve Single-Thread ( Yukaridan asagi)
*/

var getAnimals = () => {

    console.log('1. cat');

    setTimeout( () => {
        console.log('2. dog');
    }, 5000);

    console.log('3. butterfly');
}

getAnimals();

/*

problem icin cözum sunan metodlar :

1. yöntem : PROMISE
2. yöntem : ASYNC & AWAIT

*/

/*
PROMISE

1. pending : bekleme sureci
2. basarili : bir fonksiyon donecek --> resolve()
3. basarisiz : bir fonksiyon --> reject()

let promise_Obj = new Promise( (resolve, reject) => { islemler buraya gelecek })

*/

// PROMISE OBJ olusturma
let promise_Obj = new Promise( (resolve, reject) => {

    // pending process, bekleme sureci
    setTimeout( () => {
        const number = Math.floor(Math.random() * 500 );
        // Eger sayi 250'den buyuk ise BASARILI  (resolve () )
        if (number > 250) {
            resolve( number );

        } else {
            // Eger sayi 250'den kucuk ise BASARISIZ  (reject () )
            reject(`${number} 250'den buyuk degil`);

        }
    }, 4000);
});

// PROMISE OBJ. kullanma
// .then() / .catch() --> promise chain
/*
promise_Obj
        .then( function - resolve )
        .then (..........)
        .then(..........)
        .catch ( function - reject )

*/

promise_Obj
    .then( result => console.log(` Promise resolved. result : ${result}`) ) 
    .catch( reason => console.log(`Promise rejected. reason : ${reason}`))
