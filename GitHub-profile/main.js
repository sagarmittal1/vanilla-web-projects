const APIURL = 'https://api.github.com/users/';

const userForm = document.querySelector('.user-form');
const username = document.querySelector('#username');
const main = document.querySelector('.user-card');

function getUser(username) {
  axios(APIURL + username)
    .then((res) => {
      createUserCard(res.data);
      getRepos(username);
    })
    .catch((error) => {
      if (error.response.status == 404) {
        createErrorCard('No Profile with this Username');
      }
    });
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (error) {
    createErrorCard('Problem fetching repos');
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avator"
          />
        </div>

        <div class="user-info">
          <h3>${user.name}</h3>
          <h4>@${user.login}</h4>
          <p>${user.bio}</p>
          <ul>
            <li><strong>Followers</strong>: ${user.followers}</li>
            <li><strong>Following</strong>: ${user.following}</li>
            <li><strong>Repos</strong>: ${user.public_repos}</li>
          </ul>

          <div class="repos"></div>
        </div>
      </div>
  `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.querySelector('.repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoElement = document.createElement('a');
    repoElement.classList.add('repo');
    repoElement.href = repo.html_url;
    repoElement.innerText = repo.name;
    repoElement.target = '_blank';

    reposElement.appendChild(repoElement);
  });
}

userForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = username.value;
  if (user) {
    getUser(user);
    username.value = '';
  }
});
