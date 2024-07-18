import { DataFormat } from "@/lib/stoati/DataFormat";
import getStoatiData from "@/lib/stoati/getData";
import { getElement } from "@/lib/stoati/getElement";
import { getElementStyledTextData } from "@/lib/stoati/getElementTypedData";

const StyledText = async ({
  data,
  path,
}: {
  data: DataFormat[] | DataFormat;
  path: string;
}) => {
  const element = getElement(data, path);

  const elementData = getElementStyledTextData(element);

  return elementData["fr-FR"];
};

export default StyledText;
