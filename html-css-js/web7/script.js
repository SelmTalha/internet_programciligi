(function(){
    let timer;
    window.addEventListener("load",function(){
        document.getElementById("arti").addEventListener("click",function(){
            timer = setInterval(f,3000); 
            console.log("timer kuruldu",timer);
        });
        document.getElementById("iptal").addEventListener("click",f2);
        function f2(){
            clearInterval(timer);
            console.log("timer iptal edildi");
        }
        function f(){
            let mesaj=prompt("Bir mesaj yaz");
            let x = document.getElementById("mesaj");
            x.innerHTML += "-" + mesaj + "<br>";
        }
    });
})();

//setTimeout(function , delayMS)=Kaç ms (Bir defa çalışması için zaman ayarlama)
//setInterval(function , delayMs)=Devamlı güncelleme (sürekli zaman ayarı)
//clearTimeout(timerID) = timer i durdurmak için kullanılır.
//clearInterval(timerID) = Sürekli çalışma olan intervali durdurmak gerekir. Yoksa sürekli çalışma devam eder.