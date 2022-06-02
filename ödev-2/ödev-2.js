//ÖDEV
// kullanıcı tarafından girilen bir kelimenin
var kelime,
kelime=prompt("Bir kelime giriniz:")
//S-1) Kaç karakterlidir ?
document.write("Girilen kelimenin karakter sayısı:" + kelime.length + "<br/>");
//S-2) boşluklar alınarak Kaç karakterlidir ?
document.write("Kelimeden boşluklar çıkarıldığında kalan karakter sayısı:" + kelime.trim.length + "<br/>");
//S-3) bütün kelimeyi küçük harfle göstermek ?
document.write("Küçük harf gösterimi:" + kelime.toLowerCase() + "<br/>");
//S-4) bütün kelimeyi büyük harfle göstermek ?
document.write("Büyük harf gösterimi:" + kelime.toUpperCase() + "<br/>");
//S-5) ilk harf nedir  ?
document.write("Kelimenin ilk harfi:" + kelime.charAt(0) + "<br/>");
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
document.write("Kelime java ile başlıyormu:" + kelime.startsWith("java") + "<br/>");
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
document.write("Kelimenin sonuna -ben js öğreniiyorum eklenmiş hali" + kelime.concat("-ben js öğreniyorum") + "<br/>");
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
document.write("0-4 arası index değerleri:" + kelime.substring(0,4) + "<br/>");
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?
var kelime2 = prompt("İkinci kelime giriniz:");
document.write("İkinci kelime ilk kelimenin yerine geçirilmiştir:" + kelime.replace(kelime,kelime2) + "<br/>");