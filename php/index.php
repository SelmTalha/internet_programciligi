<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<p><a href="hesap.php">Hesap Makinası</a></p>
<!-- <h1>Hello World</h1> -->
    <?php
        // for ($i=1; $i < 8; $i++) { 
        //     echo "<p>Hello World ".$i."</p>";
        // }
            $g="    20 Selim     ";
            $g_yeni=trim($g);
            $g_dizi = explode(" ",$g_yeni);
            $g_birlesik=implode("-",$g_dizi);
            echo $g."</br>";
            $yas=$g_dizi[0];
            $sayilar=array(26,67,77,435,34);
            $yazi="Selim $yas yasindadir.";
            echo "<p>".$g_dizi[0]."</p>";
            echo "<p>".$g_dizi[1]."</p>";
            echo "<p>".$g_birlesik."</p>";
            echo "<p>".$yazi."</p>";
            array_push($sayilar,11); //Array_push=Liste sonuna eleman ekleme!
            $son=array_pop($sayilar); //Sondaki elemanı sil.
            $ilk=array_shift($sayilar); //İlk elemanı sil.
            array_unshift($sayilar,34);//Listenin başındaki elemanı 34 ile değiştir.


                for ($i=0; $i < count($sayilar) ; $i++) { 
                    echo "<p>".$sayilar[$i]."</p>";
                }

                foreach ($sayilar as $sayi) {
                    echo "<p>".$sayi."</p>";
                }
            ?>
</body>
</html>


<!-- Foreach ? -->

<!-- Slice =koparma-->
<!-- pop,shift,unshift,push -->

<!-- echo "<p>".$sayilar[1]."</p>"; /Array dizisinde 1.indexteki ifadeyi döndür. -->
<!-- echo "<p>".strlen(trim($g))."</p>"; // Boşlukları bul ve onlar olmadan uzunluğu hesapla -->
<!-- //echo "<p>".strpos($g,"S")."<p>"; strpos aradığımız ifadenin yerini buluyo.
//echo "<p>".substr($g,3,5)."</p>"; substr başlangıç,gösterilme miktarı "3 'ten başla 5 harfi yazdır." -->

<!-- $s="Selim Talha";
echo $s[4];-> 4.elemanı gösterir. -->

<!-- Cast etme :
String ifadeyi int'a çevirme
$age=(int) "12"; -->