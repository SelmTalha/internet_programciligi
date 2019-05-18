
//Module Pattern (Anonim fonksiyona paketleme !)
(function everything(){
    let count = 0;

    let x =function incr(n){
        count += n;
    }
    x(4);
    (function(){
        count=0;
    })();
    x(2);
    console.log(count);    
})();

/* Fonksiyon Normal Kullanımı :
function everything(){
    let count = 0;

    function incr(n){
        count += n;
    }
    function reset(){
        count=0;
    }
    incr(4);
    incr(2);
    console.log(count);    
}

everything();
*/