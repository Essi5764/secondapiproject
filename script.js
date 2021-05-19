

const baseURL = 'https://calendarific.com/api/v2/holidays';//Calendarific API end point. 
const apiKey = '1f6488a51cbcda469c89ba19cab95f0265e7f167';// Including the API key.

const type = document.querySelector('.search');//Defining a variable to store the searchTerm class
const month = document.getElementById('monthInput');//Defining a variable to store the date.
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');//Defining a variable to store the submitBtn class



let country = 'US';
let year = '2021';
// let month = 5;

searchForm.addEventListener('submit', fetchResults);// listening for submitBtn, then calls fetchResutls function. 



function fetchResults(e) {//function to display the returned data
    // console.log(e);
    e.preventDefault();
    url = `${baseURL}?&api_key=${apiKey}&country=${country}&year=${year}`;// Compiling the Url.(Adding more to modify o the base url to get the endpoint that we want).
    // console.log('URL:', url);
    if (month.value !== '') { //Test if month isn't blank, then.. 
        console.log(month.value)
        console.log(month)
        url += `&month=${month.value}`;// adds startDateValue to existing url(with required syntax)
        console.log('URL:', url);
    }

    if (type.value !== '') {//Test if type isn't blank, then.. 
        console.log(type.value)
        url += `&type=${type.value}`;// adds endDateValue to existing url(with required syntax)
        console.log('URL:', url);
    }

    // fetch(url)//fecthes the url built
    //     .then(function (result) {//promise resolver
    //         console.log(result)
    //         return result.json();//returns our result in JSON-ifies the data
    //     })
    //     .then(function (json) {// chaining promise resolver
    //         console.log(json);
    //         display(json);// grabs the JSON-ifies resuts and feeds to displayResults function
    //     })
    
    fetch(url)//fecthes the url built
        .then((res) => res.json())
        .then(function (json) {
        console.log(json)
        display(json)
    })
    .catch((err) => console.log(err))
    


}
function display(json) {
    // while (row.firstChild) {//while prvious data is there(while section has a firstChild)
    //     row.removeChild(row.firstChild);//remove previous search data(remove the section firstChild)
    // }
    var table = document.getElementById('myTable')
    var x;
    
    console.log(json);
    for (let x in json.response.holidays) {
        
        // console.log(json.response[x]);
        console.log(json.response.holidays[x].date.iso);
        console.log(json.response.holidays[x].name);
        console.log(json.response.holidays[x].description);
      
        for (var i = 0; i < json.response.holidays.length; i++){
            var row = `<tr>
            <td>${json.response.holidays[x].name}</td>
            <td>${json.response.holidays[x].description}</td>
            <td>${json.response.holidays[x].date.iso}</td>
          </tr>`

          table.innerHTML += row
        }

    }  
    
}