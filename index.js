// Add your code here
function submitData(name, email) {
  let url = 'http://localhost:3000/users'

  let user = {
    name: name,
    email: email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  }

  let fetchFunc = function () {
    fetch(url, configObj)
    .then(function(response){
      return response.json()
    })
    .then(function(user){
      postIdToBody(user)

    })
    .catch(function(error){
      postErrorToBody(error)
    })

  }

  return fetchFunc();
}

function postIdToBody(user) {
  // console.log(json)
  // console.dir(json)
  div = document.createElement('div')
  div.innerHTML = user.id
  document.body.appendChild(div)
}

function postErrorToBody(error) {
  // console.warn("Ruh, roh")
  // console.log(error.message)
  div = document.createElement('div')
  div.innerHTML = error.message
  document.body.appendChild(div)
}

// submitData('jimmy', 'jimmy@gmail.com')
submitData()