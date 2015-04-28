function isEven(number) {
if(number < 0)
 return isEven(-1*number);
  if(number == 0)
    console.log(true);
  else if (number == 1)
    console.log(false);
  else 
      return isEven(number -2);
}

isEven(-4);
