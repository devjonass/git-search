const baseUrl = "https://api.github.com/users/";

async function getUser(users) {
  try {
    const getApi = await fetch(`${baseUrl}${users}`);
    const user = await getApi.json();

    return user;
  } catch (error) {
    console.log(error);
  }
}

async function getRepos(users) {
  try {
    const getApi = await fetch(`${baseUrl}${users}/repos`);
    const repository = await getApi.json();

    return repository;
  } catch (err) {
    console.log(err);
  }
}
