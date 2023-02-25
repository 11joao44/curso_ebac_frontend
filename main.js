
document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name')
    const username = document.querySelector ('#username')
    const avatar = document.querySelector('#avatar')
    const repository = document.querySelector('#public_repos')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const profile = document.querySelector('#html_url')
    const bio = document.querySelector('#bio')


    fetch('https://api.github.com/users/11joao44')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            repository.innerText = json.public_repos;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profile.href = json.html_url;
            bio.innerText = json.bio;
        })
})