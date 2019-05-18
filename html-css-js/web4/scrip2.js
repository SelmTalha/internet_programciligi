let str ="Selim Talha";


console.log(str[0]);//0.indeks yani "S"
console.log(str.length);//Uzunluk

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element);
}

let d = str.split(" ");//Parantez içindekini bulur ve ona göre dizi karakterlerine böler.Boşluk gibi
console.log(d)

d.reverse();//Ters döndürür.
d.push("gel. ");

let str2=d.join(" ");//splitten farkı tek bir stringe dönüştürmesi ! Ve aralarına ne koyarak birleştireceğimiz !!

console.log(str2);

//JS and the DOM 

let count =0;
function incr(n){//Artırma İşlemi
    var count = 10;
    console.log(count);
    for (let i = 0; i < 10; i++) {
        var count = i*i;
    }
    console.log(count);
    count=count + n ; //count += n;
}
function decr(n){//Azaltma İşlemi
    count -= n; //count = count - n;
}
console.log(count);
incr(5);
decr(3);
decr(1);
console.log(count);

