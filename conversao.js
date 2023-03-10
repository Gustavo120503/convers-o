var metros = parseFloat(prompt("Digite um valor em metros"));
var opcao = prompt("Digite a opção desejada para a conversão:\nmm - milímetro\ncm - centímetro\ndm - decímetro\ndam - decâmetro\nhm - hectômetro\nkm - quilômetro");

var resultado ;

switch (opcao){
   case "mm":
   resultado = metros * 1000;
   alert(metros + " metros equivalem a " + resultado + " milímetros. ");
   break;
   case "cm":
         resultado = metros * 100;
         alert (metros + " metros equivalem a " + resultado + " centímetros. ");
      break;
      case "dm":
         resultado = metros * 10;
         alert (metros + " metros equivalem a " + resultado + " decímetros. ");
      case "dam":
      break
         resultado = metros / 10;
         alert (metros + " metros equivalem a " + resultado + " decâmetros. ");
      break
      case "hm":
         resultado = metros / 100;
         alert (metros + " metros equivalem a " + resultado + " hectômetros. ");
      case "km":
         resultado = metros / 1000;
         alert ( metros + " metros equivalem a " + resultado + " quilômetros. ");
         break
      default:
         alert("opção invalida")
         break
   }