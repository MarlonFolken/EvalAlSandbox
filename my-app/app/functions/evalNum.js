//Me dan un numero
  //La funcion evalua y regresa un número
  function evalNum (userNum) {
    //Evalua si da 0 (no hay repeticion de numeros)
    let myString = (userNum).toString();
    let aSetString = new Set(myString);
    console.log("aSetString", aSetString);
    if(aSetString.size === myString.length){
      return 0;
    }else{
      //Tomo el numero y lo convierto en elementos individuales de un array:
      const arrayOfDigits = Array.from(String(userNum), Number);
      console.log("arrayOfDigits", arrayOfDigits)
      const individualArr = [];
      for (let index = 0; index < arrayOfDigits.length; index++) {
        if(arrayOfDigits[index] == arrayOfDigits[index+1]){
          individualArr.push(arrayOfDigits[index]);
        }
      }
      if(arrayOfDigits[arrayOfDigits.length - 1] == arrayOfDigits[0]){
        console.log("intoedge");
        individualArr.push(arrayOfDigits[0]);
      }
      console.log("Despues de sumar array...")
      console.log("arrayOfDigits", arrayOfDigits)
      console.log("individualArr", individualArr)
      //Teniendo todos los numeros que se repiten, se procede a sumarlos.
      let sumNum = individualArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return sumNum;
      //console.log(arrayOfDigits);   //[1,2,3,4,5]
    }
  }