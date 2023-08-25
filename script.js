// Fetch the API data
fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
//get response in two stages
 .then(response => response.json()) //read the response as json
.then(data1 => {
    //data1 = json.parse(data1);
    console.log("api result :", data1);
  const tableBody = document.getElementById('table-body');
  // Loop through the data and create table rows
  data1.data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.office}</td>
      <td>${item.position}</td>
      <td>${item.salary}</td>
    `;
    tableBody.appendChild(row);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});