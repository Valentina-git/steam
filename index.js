import data from "./data/index.js"
import {navigation} from "./utils/nav.js"
import {ref} from "./refs.js"
import { createCards } from "./utils/createCards.js"

console.log(data);

// const ref = {
//     naviList: document.querySelector('.list')
// }

// ref.naviList.innerHTML = navigation(data.navigationsLink);

navigation(data.navigationsLink)
createCards(data.games.actions)

const createMarkup = (event) => {
    const name = event.target.dataset.link;
    createCards(data.games[name]);
}

const findGame = (event) => {
    console.log(event.target);
    const game = data.games[event.target.dataset.category]
    .find(game => game.id == event.target.dataset.id)
    console.log(game);
}


ref.navList.addEventListener("click", createMarkup)

ref.mainCard.addEventListener("click", findGame)

