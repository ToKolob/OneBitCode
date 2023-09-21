let txunitOfMeasurement = document.querySelector('select#unitOfMeasurement')
let txunitValue = document.querySelector('input#unitValue')
let txunitOfOutput = document.querySelector('select#unitOfOutput')
let txanswer = document.querySelector('span#answer')

function convert(){
  unitValue = parseFloat(txunitValue.value)
  //converting the unit to meters
  switch (txunitOfMeasurement.value) {
    case 'meter' :
      unitValue *= 1
      break;
    case "kilometer" :
      unitValue *= 1000
      break;
    case 'centimeter' :
      unitValue *= 0.01
      break;
    case 'millimeter' :
      unitValue *= 0.001
      break;
    case 'mile' :
      unitValue *= 1609
      break;
    case 'yard' :
      unitValue *= 0.914
      break;
    case 'foot' :
      unitValue *= 0.305
      break;
    case 'inch' :
      unitValue *= 0.254
      break;
  }

  //converting the meter to unit of output
  switch (txunitOfOutput.value) {
    case 'meter' :
      unitValue /= 1
      break;
    case "kilometer" :
      unitValue /= 1000
      break;
    case 'centimeter' :
      unitValue /= 0.01
      break;
    case 'millimeter' :
      unitValue /= 0.001
      break;
    case 'mile' :
      unitValue /= 1609
      break;
    case 'yard' :
      unitValue /= 0.914
      break;
    case 'foot' :
      unitValue /= 0.305
      break;
    case 'inch' :
      unitValue /= 0.254
      break;
  }
  txanswer.innerHTML = `  ${unitValue} ${txunitOfOutput.value}` 
}