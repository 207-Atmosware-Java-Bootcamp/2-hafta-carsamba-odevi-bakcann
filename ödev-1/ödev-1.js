


//Kullanıcı tarafından aldığımız iki tane sayının
//Bu sayılardan en büyüğü alt taban en küçüğü üst taban şeklinde üstünü alalım.

var number1,number2;
number1=Number(prompt("1.sayıyı giriniz"));
document.write(number1);
console.log(number1);


number2=Number(prompt("2.sayıyı giriniz"));
document.write(number2);
console.log(number2);



document.write(Math.pow(Math.abs(Math.max(number1,number2)),
    Math.abs(Math.min(number1,number2))));

//birinci sayı 2   ikinci sayı 3 girilmiştir