async function getText(params) {
  
    var x = document.getElementById('params').value
   
    const myHeaders = new Headers();
    myHeaders.append("mensaje", x);
    const urlencoded = new URLSearchParams();

   const requestOptions = {
    method: "POST",
    headers: myHeaders  
   
};
await
fetch("https://chatapi12001.azurewebsites.net/api/Get?mensaje=\"que es c\"", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
         
}