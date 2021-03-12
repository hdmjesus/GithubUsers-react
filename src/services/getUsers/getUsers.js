export async function getUsuariosFilter(limit = 25) {
  const URL = `https://api.github.com/users?since&per_page=${limit}`;

  const resp = await fetch(URL);

  const data = await resp.json();

  return data;
}
export async function getUsuariosPage(page = 0) {
  const URL = `https://api.github.com/users?since=${
    25 * page - 1
  }&per_page=${25}`;

  const resp = await fetch(URL);

  const data = await resp.json();

  return data;
}

export async function getUsuariosIds(id, limit = 1) {
  const URL = `https://api.github.com/users?since=${id - 1}&per_page=${limit}`;

  const resp = await fetch(URL);

  const data = await resp.json();

  return data;
}
export async function getUrlUser(user, parameter) {
  const url = `https://api.github.com/users/${user}/${parameter}`;
  const resp = await fetch(`${url}`);
  const data = await resp.json();

  return data;
}

export async function getRepoName(user, namerEPO) {
  const url = `https://api.github.com/${user}/${namerEPO}`;
  const resp = await fetch(`${url}`);
  const data = await resp.json();

  return data;
}
