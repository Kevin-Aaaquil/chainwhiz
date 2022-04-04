import axios from "axios";
import { ALDERAAN_ID, DARTH_VADER_ID, LEIA, SWAPI_API } from "../utils";
import { INFO } from "./info-models";

export const getDarthVaderInfo = async () => {
  return await (
    await axios.get(SWAPI_API + DARTH_VADER_ID)
  ).data;
};

export const getDarthShipInfo = async (link: string) => {
  return await (
    await axios.get(link)
  ).data;
};

export const getAlderaanInfo = async () => {
  return await (
    await axios.get(SWAPI_API + ALDERAAN_ID)
  ).data;
};

export const checkResidents = async (resident: any[]) => {
  for (let i = 0; i < resident.length; i++) {
    const link = resident[i];
    const data = await (await axios.get(link)).data;

    if (data.name === LEIA) return true;
  }
  return false;
};

export const getAllData = async () => {
  const darthVader = await getDarthVaderInfo();
  const starshipLink = darthVader.starships[0];
  const starShip = await getDarthShipInfo(starshipLink);
  const alderaan = await getAlderaanInfo();
  const isSheHere: boolean = await checkResidents(alderaan.residents);

  const body: INFO = {
    starship: {
      name: starShip.name,
      model: starShip.model,
      class: starShip.starship_class,
    },
    crew: starShip.crew,
    isLeiaOnPlanet: isSheHere
  };
  return body;
};

