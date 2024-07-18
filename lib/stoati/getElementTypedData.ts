import { DataFormat } from "@/lib/stoati/DataFormat";
import {
  AssetComponent,
  AssetComponentDefaultData,
  SimpleText,
  SimpleTextDefaultData,
  StyledText,
  StyledTextDefaultData,
} from "@/lib/stoati/types";

export const getElementSimpleTextData = (element: DataFormat) => {
  if (element.componentType === "SimpleText") {
    return SimpleText.parse(element.data).values;
  }

  throw new Error("The component type is not correct");
};

export const getElementStyledTextData = (element: DataFormat) => {
  if (element.componentType === "StyledText") {
    return StyledText.parse(element.data).values;
  }

  throw new Error("The component type is not correct");
};

export const getElementAssetData = (element: DataFormat) => {
  if (element.componentType === "Asset") {
    return AssetComponent.parse(element.data).url;
  }

  throw new Error("The component type is not correct");
};
