const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke =()=>{
    fetch(url)
    .then(data=>data.json())
    .then(items=>{
        jokeContainer.textContent=`${items.joke}`;
    })
}
btn.addEventListener('click',getjoke)
getjoke()