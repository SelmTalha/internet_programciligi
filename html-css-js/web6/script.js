//courses.cs.washington.edu
//HTML FORM ELEMENTLERİ W3SCHOOLS

(function() {
window.addEventListener("load",function(){
    let mybtn=document.getElementById("btn"); //Elemana ulaşmaya yarar!
    alert(mybtn.innerText)
    mybtn.addEventListener("click",function(){
        alert("hello");
    });
    let p = document.getElementById("prg");
    p.innerText = "Yazı Değil";
});
})();


// mybtn.addEventListener("click",fun);

// function fun() {
//     alert("hello");
// }
//alert("hello"); //Print 'in js deki karşılığı

//Click Here butonuna özellik eklemek için kullanılır.
//element.addEventListener("Click",handelFunction);
//function handelFunction(){
//event handler code
//}

//document.createdElement() Eleman eklemeye yarar.

///////////////////////////////////////////////////////

//DOM = Document Object Model (Döküman Nesne Modeli)
//Document=Sayfa elemanlarına ulaşmaya yarar.
//history=Daha önce ziyaret edilen sayfalara ulaşmaya yarar.
//location=Url adına ulaşmayı sağlıyor.
//navigator=İnsanların web sayfasını hangi browserla gördüğünü gösterir.
//screen=Ekran bilgilerini alır.Değiştirme yapılabilir.
//window=Browser Penceresi

