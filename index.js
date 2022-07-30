const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#profile')
const APIURL = 'https://api.github.com/users/'

// form.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const searchInput = form.elements.search.value
//     form.elements.search.value = ''
//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`)
//     // image.src = res.data[0].show.image.medium
//     // document.body.image = image.src
//     console.log(res.data)
// })
function getUser(username) {
    const card = `
    <div class="card">
            <div class="profile_image">
                <img src="${username.avatar_url}" alt="${username} ">
            </div>
            <div class="profile_info">
                <h2>${username.name} </h2>
                <p>${username.bio} 
                

                <ul>
                    <li>${username.followers} <b>Followers</b></li>
                    <li>${username.following}  <b>Following</b></li>
                    <li>${username.public_repos} <b>Repositories</b></li>
                </ul>
            </div>
        </div>
    `
    main.innerHTML = card
}
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = search.value
    search.value = ''
    try {
        const res = await axios.get(APIURL + username)
    getUser(res.data)
    } catch(err) {
        if(err.response.status === 404) {
            errorCard()
        }
    }
})

function errorCard() {
    const card = `
    <div class= "card">
    <h2 style="text-align:center;">User doesnt exist</h2>
    </div>
    `
    main.innerHTML = card
}