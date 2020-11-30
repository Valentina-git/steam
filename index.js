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