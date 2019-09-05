/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get(`https://api.github.com/users/haloking1212`)
//     .then( response => {
//         // deal with the response data in here
//         console.log(response.data);
//     })
//     .catch( err => {
//         // deal with the error in here
//         console.log("The data was not returned",err)
//  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers","justsml", "luishrd", "bigknell", "haloking1212"];

followersArray.forEach(userName => {

  axios.get(`https://api.github.com/users/${userName}`)

.then( (response) => {
  const newPerson = createData(response);
  selectingDiv.appendChild(newPerson);
  console.log(response)
})
.catch( (err) => {
  console.log(err)
})
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createData(obj) {

  //creating element tags
  const dCard = document.createElement("div")
  const imgE = document.createElement("img")
  const dCardInfo = document.createElement("div")
  const headerthree = document.createElement("h3")
  const paraUser = document.createElement("p")
  const paraLocation = document.createElement("p")
  const paraProfile = document.createElement("p")
  const aLink = document.createElement("a")
  const paraFollowers = document.createElement("p")
  const paraFollowing = document.createElement("p")
  const paraBio = document.createElement("p")

//stucturing elements
dCard.appendChild(imgE)
dCard.appendChild(dCardInfo)
dCardInfo.appendChild(headerthree)
dCardInfo.appendChild(paraUser)
dCardInfo.appendChild(paraLocation)
dCardInfo.appendChild(paraProfile)
paraProfile.textContent = `Profile: `
paraProfile.appendChild(aLink) 
dCardInfo.appendChild(paraFollowers)
dCardInfo.appendChild(paraFollowing)
dCardInfo.appendChild(paraBio)


//adding classes to elements
dCard.classList.add("card")
dCardInfo.classList.add("card-info")
headerthree.classList.add("name")
paraUser.classList.add("username")

//adding content to elements
imgE.src = obj.data.avatar_url
headerthree.textContent = obj.data.name
paraUser.textContent = `Profile: ${obj.data.login}`
paraLocation.textContent = `Location: ${obj.data.location}`
aLink.href = obj.data.html_url
aLink.textContent = obj.data.html_url
paraFollowers.textContent = `Followers: ${obj.data.followers}`
paraFollowing.textContent = `Following: ${obj.data.following}`
paraBio.textContent = `Bio: ${obj.data.bio}`

  return dCard;
}
const selectingDiv = document.querySelector(".cards")
