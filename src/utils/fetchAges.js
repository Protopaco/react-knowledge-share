const agifyURL = "https://api.agify.io?name=";

export default async function fetchAges(name, { country_id, probability }) {
  const response = await fetch(agifyURL + name + "&country_id=" + country_id);
  return { ...(await response.json()), probability };
}
