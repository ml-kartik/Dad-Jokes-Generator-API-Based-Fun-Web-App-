// for style2.css
const jokeButton = document.getElementById('jokeButton');
// let jokeText = document.getElementById('joke'); // for style2.css

jokeButton.addEventListener('click', getJoke);

async function getJoke() {
    let config = {headers: {Accept: 'application/json'}};
    const response = await axios.get(`https://icanhazdadjoke.com/`, config);
    // jokeText.innerText =response.data.joke // for style2.css
    fetchedJoke = response.data.joke; // for style.css

    // for style.css
    const jokeEl = document.getElementById('joke');
    jokeEl.textContent = fetchedJoke;
    jokeEl.classList.add('visible');
    
    // Optional fun shake on the container:
    const container = document.getElementById('container');
    container.classList.remove('shake');
    void container.offsetWidth; // reflow
    container.classList.add('shake');
}



