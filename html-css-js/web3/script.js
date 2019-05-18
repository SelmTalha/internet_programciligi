// alert("Mesaj Göründü mü ?");
// console.log("birşey yazdık");
// console.log("birşey yazdık");
// console.log("birşey yazdık");
// console.log("birşey yazdık");
// var x=21;
// let y=0.32;
// console.log(x);
// console.log(typeof(x));
// console.log(typeof(y));
// let z="sayı";
// console.log(typeof(z));
// let k;
// //Bir değer atanmadıysa yada yoksa undefined olarak gözükür!
// console.log(typeof(k));
// console.log(typeof(zz));

// const d ="alican";
// //Değişken gibi değer değiştirilemez.Hiç değiştirilemeyendir !
// console.log(typeof(d));
// //d="veli";  Hata verir !

// console.log("ali 2"*3); //Nan (Not a number)
// console.log("2"*3);//6
// console.log("2"+3);//23

// let a="Ali'nin atı";
// console.log(a);
// //substring = bir string ifadenin içinden bir kısmı almaktır.
// let b = a.substring(0,a.indexOf(" "));
// console.log(b);
// console.log(b.length);
// let x="10 tane çocuk";
// console.log(3+ parseInt("2 kişi")); //string içindekilerin sol tarafındaki number değeri alır geri kalanını atar.
// console.log(x[0]);//1
// console.log(x.charAt(4));//a
// console.log(x[x.length-1]);//k
// console.log(Math.floor(12.5));
// console.log(Math.round(12.5));//Yuvarlama işlemi 0.5 ve üstü yukarı yuvarlar.
// console.log(Math.floor(Math.random()*10)+1);

let toplam=0;
for (let i= 0; i<100; i++) {
    toplam=toplam+i;
}
console.log(toplam);
let str="Selim Talha";
let str2="";
for (let i = str.length-1; i>=0; i--) {
    let h =str[i];
    if(h==" "){
        str2=str2+"-";
    }else{
        str2 = str2+h;
    }
}

console.log(str2);
let x = null;
let y = 45;
let z ;



//Belirsizlik ifade etmek için 3 şey vardır:
//null=atama yapılmış ancak içi boşluksa 
//undefined = atama yapılmamış tip belli değilse 
//



//tinyurl.com/myoweb2019
//lecture
//Intro to JS.... Şu an sorumlu olduğumuz yerler!
//Lecture Preview slides
//ctrl k ve c comment ctrl k ve u uncomment
