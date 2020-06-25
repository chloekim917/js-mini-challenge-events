/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const element = document.querySelector("h1#header")
element.addEventListener('click', function(){
  function toggleColor(element) {
    if (element.style.color === "red") {
      element.style.color = "black"
    } else {
      element.style.color = "red"
    }
  }
  
})

/***** Deliverable 2 *****/
const newPlayer = document.querySelector("#new-player-form")
newPlayer.addEventListener('submit', function(e){
  e.preventDefault()
  const player = {
    number: e.target.number.value,
    name: e.target.name.value,
    nickname: e.target.nickname.value,
    photo: e.target.photo.value,
    likes: 0
  }
  renderPlayer(player)
  newPlayer.reset()
})

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", function(e){

  if(e.target.className === 'like-button'){
    const button = e.target
    const likes = button.parentNode.querySelector(".likes")
    likes.textContent = `${parseInt(likes.textContent)+1} likes`
  }
 
})