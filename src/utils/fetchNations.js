const nationalizeUrl = "https://api.nationalize.io?name=";

export default async function fetchNations(name) {
  const response = await fetch(nationalizeUrl + name);
  return await response.json();
}
