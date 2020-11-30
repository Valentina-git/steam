import {ref} from "../refs.js"

export const navigation = (links) => {
    const markUp = links.reduce((acc, link) => {
        acc += `<li>${link}</li>`
        return acc;
    }, '')
    // return markUp
    ref.naviList.innerHTML = markUp;
}

