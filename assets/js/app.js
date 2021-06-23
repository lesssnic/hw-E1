

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';

let data = [];

for (i = 20210501; i <= 20210531; i++){

let xhr = new XMLHttpRequest();

xhr.open('GET', url + i + '&json');

xhr.onload = function (){

    let dataT = JSON.parse(this.response).filter((item) => item.cc == 'USD');

    data.push(dataT[0]);
    if (data.length == 31){dataManipulation()};
}

xhr.send();

}

let dataManipulation = function () { 

    data.sort((obj1,obj2) => +obj1.exchangedate.split(".").reverse().join("") - +obj2.exchangedate.split(".").reverse().join(""));
    
    for (let element of data) {
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
    
    console.log(data);
}
    

//let timer_id = setTimeout(dataManipulation, 0);

