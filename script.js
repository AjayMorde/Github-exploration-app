const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox =document.querySelector('#search')
const btn=document.getElementById('#btn');
const getUser = async (username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card =
    ` <div class="card">
            <div>
                    <img class="avatar" src="${data.avatar_url}" alt="Florin pop">
            </div>
            <div class="user-info">
                    <h4>${data.name}</h4>
                    <p>${data.bio}</p>

                <ul class="info">
                        <li>${data.followers} <strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                   
                </div>
            </div>

        </div>`
    main.innerHTML = card;
    getRepos(username)


}
// getUser("AjayMorde")

const getRepos = async (username) => {
    const repos = document.querySelector("#repos");
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
  
    for (let i = 0; i < data.length && i < 5; i++) {
      const item = data[i];
      console.log(item);
      const elem = document.createElement("a");
      elem.classList.add("repo");
      elem.href = item.html_url;
      elem.innerText = item.name;
      elem.target = "_blank";
      repos.appendChild(elem);
    }
  };
  


const formSubmit=()=>{
   
    if(searchBox.value!=""){
        getUser(searchBox.value)
    }
    return false;
}


btn.addEventListener('click',formSubmit());






// <a href="#" class="repo" target="_blank">Repo1</a>
// <a href="#" class="repo" target="_blank">Repo2</a>
// <a href="#" class="repo" target="_blank">Repo3</a>
