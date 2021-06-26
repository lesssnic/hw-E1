

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';

async function usdRequests(){

let monthRate = [];

for (i = 20210501; i<=20210531; i++){

await fetch(url + i + '&json').then(Response => Response.json()).then(arrJson => arrJson.filter(item => item.cc == 'USD')).then(objUSD => monthRate.push(objUSD[0]));
}    

console.log(monthRate);

for (let element of monthRate) {
    let row = resultUsdRate.insertRow();
    
      let cell = row.insertCell();
      let text = document.createTextNode(element.exchangedate);
      cell.appendChild(text);

      cell = row.insertCell();
      text = document.createTextNode(' - ');
      cell.appendChild(text);

      cell = row.insertCell();
      text = document.createTextNode(element.rate);
      cell.appendChild(text);
    
  }

return monthRate;
};

usdRequests();