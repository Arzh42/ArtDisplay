import { ComponentType } from "@/lib/stoati/types";
import { z } from "zod";

const baseDataFormat = z.object({
  id: z.string(),
  templateCode: z.string(),
  componentType: ComponentType,
  data: z.any().optional(),
});

export type DataFormat = z.infer<typeof baseDataFormat> & {
  children?: DataFormat[];
};

export const dataFormat: z.ZodType<DataFormat> = baseDataFormat.extend({
  children: z.lazy(() => dataFormat.array()).optional(),
});
