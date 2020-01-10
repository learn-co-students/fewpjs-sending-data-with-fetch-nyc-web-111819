// Add your code here
function submitData(name, email) {
  fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    accept: "application/json"
  },
  body: JSON.stringify({name, email})
})
  .then(response => response.json())
  .then(data => {
    console.log(data.id)
    let id = data.id
    document.body.append(id)
  })
  .catch(error => {
    alert("Something went wrong")
    document.body.append(error.message)
  })
}
submitData()