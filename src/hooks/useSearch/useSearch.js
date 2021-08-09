import { getName } from "country-list";

import fetchAges from "../../utils/fetchAges";
import fetchNations from "../../utils/fetchNations";

export default function useSearch() {
  const onSubmit = async (input) => {
    try {
      const { country, name } = await fetchNations(input);
      if (country.length === 0) {
        window.alert("No results");
        return [];
      }
      const response = await Promise.all(
        country.map((singleCountry) => fetchAges(name, singleCountry))
      );
      return response.map((result) => parseResult(result));
    } catch (error) {
      window.alert("Not a valid name");
      return [];
    }
  };

  const parseResult = ({ age, count, country_id, name, probability }) => {
    const parsedProbability = parseFloat(probability * 100).toFixed(2);
    const countryName = getName(country_id) || country_id;

    return {
      age: age || "-",
      count,
      countryId: country_id,
      countryName,
      name,
      probability: parsedProbability,
    };
  };

  return { onSubmit };
}
