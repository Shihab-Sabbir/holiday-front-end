interface AirportData {
  iso_country: string;
  iso_region: string;
  local_code: string;
  municipality: string;
  name: string;
}

const getAirports = async (): Promise<AirportData[]> => {
  const url =
    "https://pkgstore.datahub.io/core/airport-codes/airport-codes_json/data/9ca22195b4c64a562a0a8be8d133e700/airport-codes_json.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((airport: any) => ({
      iso_country: airport.iso_country,
      municipality: airport.municipality,
      name: airport.name,
    }));
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};

export default getAirports;
