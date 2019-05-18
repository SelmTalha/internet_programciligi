(function(){
    let sayi=0;
    window.addEventListener("load",function(){
        let arti = document.getElementById("arti");//Html dökümanındaki artı'yı bul ve değişken artıya ata
        let eksi = document.getElementById("eksi");//Html dökümanındaki eksi'yi bul ve değişken eksiyi ata
        arti.addEventListener("click",function(){//Artıya tıklanma durumunu incele
            sayi++;
            let p=document.getElementById("prg")
            p.innerHTML=sayi;
        });
        eksi.addEventListener("click",function(){//Eksiye tıklanma durumunu incele
            sayi--;
            let p=document.getElementById("prg")
            p.innerHTML=sayi;
        });
    });
})();