export async function getUsuariosFilter(limit = 25) {
  const URL = `https://api.github.com/users?since&per_page=${limit}`;

  const resp = await fetch(URL);

  const data = await resp.json();

  return data;
}
export async function getUsuariosPage(page = 0) {
  const URL = `https://api.github.com/users?since=${25 * page}&per_page=${25}`;

  const resp = await fetch(URL);

  const data = await resp.json();

  return data;
}
