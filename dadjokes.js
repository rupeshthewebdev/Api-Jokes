const joke = document.querySelector("#joke");
const jokeBtn = document.getElementById("jokeBtn");

// const setHeader = {
//     headers: {
//         Accept : "application/json"
//     }
// }

// const genJoke = () => {
//     fetch("https://icanhazdadjoke.com",setHeader).
//         then((res) => 
//             res.json()
//         ).then((data) => {
//             joke.innerHTML = data.joke;
//         }).catch((err) => {
//             console.log("Error");
//         })
// }

const genJoke = async () => {
    try {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json()
        joke.innerHTML = data.joke;
    } catch (err) {
        console.log(err);
    }
}

jokeBtn.addEventListener('click', genJoke)
genJoke()