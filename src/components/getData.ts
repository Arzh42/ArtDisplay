import { dataFormat } from "@stoati/tools";
import { z } from "zod";

const getData = async () => {
  const response = await fetch(
    "https://api.stoati.fr/shops/" +
      import.meta.env.STOATI_ID +
      "/components/data",
    {
      headers: {
        authorization: `Bearer ${import.meta.env.STOATI_SECRET}`,
      },
    }
  );

  const data = z.array(dataFormat).parse(await response.json());

  return data;
};

export default getData;
