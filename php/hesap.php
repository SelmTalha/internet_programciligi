<?php
function topla($s1,$s2){
    return $s1+$s2;
}

function p_yaz($yazi){
echo "<p>".$yazi."</p>";
}
p_yaz(topla(3,4));
p_yaz(topla(12,26));
p_yaz("SELİM");
p_yaz(77);
?>