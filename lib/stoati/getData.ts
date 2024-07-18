import { dataFormat } from "@/lib/stoati/DataFormat";
import { z } from "zod";

const getStoatiData = async () => {
  const stoatiId = process.env.NEXT_PUBLIC_STOATI_ID || process.env.STOATI_ID;
  let stoatiSecret: string | undefined = process.env.STOATI_SECRET;
  const url = process.env.STOATI_URL;

  if (!stoatiId) {
    throw new Error(
      "The Stoati tools have not been properly initialized please add a NEXT_PUBLIC_STOATI_ID env variable"
    );
  }

  if (!stoatiSecret) {
    return null;
  }

  const data = await fetch(url + "/shops/" + stoatiId + "/components/data", {
    headers: {
      authorization: `Bearer ${stoatiSecret}`,
    },
  });

  if (!data.ok) {
    throw data;
  }

  const response = await data.json();

  if (response === null) {
    return null;
  }

  return z.array(dataFormat).parse(response);
};

export default getStoatiData;
