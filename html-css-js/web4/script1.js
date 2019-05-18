let x=21;

let types = ["Electric","Water","Fire"];

let isimler= [];

isimler[0]="Ali";
isimler[1]="Mehmet";
isimler[2]="Murat";

isimler.push("Arif");//Liste sonuna eleman ekler.

isimler.unshift("Semih");//Liste başına eleman ekler.
console.log(isimler);

isimler.sort();//Baş harflerine göre a'dan z'ye sıralar.
console.log(isimler);

let i =isimler.pop(); //En sondaki elemanı listeden koparıp döndürmeye yarar.
console.log(i);
console.log(isimler);

let j =isimler.shift();//En baştaki elemanı listeden koparıp döndürmeye yarar.
console.log(j);
console.log(isimler);

//findMind()=İçine array gönderip en küçük değeri öğren !
//SwitchPoirs()=İçindeki array elemanlarının yerini değiştir !

