
import { ref } from "../refs.js"

export const createCards = (cards) => {
    const markUp = cards.reduce((acc,card) => {
        acc += `
        <li>
        <h2>${card.title}</h2>
        <img src= ${card.img} alt=${card.title}/>
        <p>${card.description}</p>
        <p>${card.price}</p>
        </li>
        `
        return acc;
    }, '')
    ref.mainCard.innerHTML = markUp
}