interface LocationData {
  iso_country: string;
  geonameid: string;
  municipality: string;
  name: string;
}

const getLocations = async (): Promise<LocationData[]> => {
  const url =
    "https://pkgstore.datahub.io/core/world-cities/world-cities_csv_preview/data/3d2b714c7fa2d24162a1853a92ebd2a7/world-cities_csv_preview.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((location: any) => ({
      iso_country: location.country,
      municipality: location.name,
      geonameid: location.geonameid,
      name: location.subcountry,
    }));
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};

export default getLocations;
