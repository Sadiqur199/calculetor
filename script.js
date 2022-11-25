function gethistory(){
  const historyValue = document.getElementById('history-value').innerText 
   return historyValue;
}

function printhistory(num){
    document.getElementById('history-value').innerText = num;
}

function getoutput(){
  const printOutput =  document.getElementById('output-value').innerText;
  return printOutput;

}

function printoutput(num){

  if (num == '')
  {
    document.getElementById('output-value').innerText = num
  }
  else{
    const outputValue = document.getElementById('output-value').innerText=getFormatedNumber(num)
    return outputValue;
  }
}

function getFormatedNumber(num){
  if(num == '-'){
    return '';
  }
  const n = Number(num);
  const value = n.toLocaleString('en')
  return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}



const operator = document.getElementsByClassName("operator");
for (let i =0; i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    if (this.id == 'clear')
    {
      printhistory('')
      printoutput ('')
    }
    
    else if(this.id == 'backspace')
    {
      const Output = reverseNumberFormat(getoutput()).toString()
      if(Output){
        Output = Output.str(0,Output.length-1)
        printoutput(Output);
      }
    }

    else
    {
      let output = getoutput()
      let history = gethistory()
      if(output!= '')
      {
        output = reverseNumberFormat(output);
        history = history + output;
        if(this.id == '=')
        {
          const result = eval(history);
          printoutput(result)
          printhistory('')

        }
        
      }
    }
  });
}


const number = document.getElementsByClassName('number')
for (let i = 0 ; i<number.length;i++)
{
  number[i].addEventListener('click',function(){
    const output = reverseNumberFormat(getoutput())
    if(output!=NaN)
    {
      output1 = output+this.id;
      printoutput(output1)
    }
  });
}