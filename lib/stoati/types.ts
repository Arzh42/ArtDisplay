import { z } from "zod";

export const ComponentType = z.enum([
  "SimpleText",
  "StyledText",
  "Asset",
  "Location",
  "Struct",
  "Template",
]);

export const LocaleKeyFormat = z.string().regex(/[a-z][a-z]-[A-Z][A-Z]/);

export const AssetComponentDefaultData = z.string().nullable();

export type AssetComponentDefaultData = z.infer<
  typeof AssetComponentDefaultData
>;

export const AssetComponent = z.object({
  id: z.string(),
  url: AssetComponentDefaultData,
  assetId: z.string().optional(),
});

export type AssetComponent = z.infer<typeof AssetComponent>;

export const SimpleTextDefaultData = z.record(LocaleKeyFormat, z.string());
export type SimpleTextDefaultData = z.infer<typeof SimpleTextDefaultData>;

export const SimpleText = z.object({
  id: z.string(),
  values: SimpleTextDefaultData,
});

export type SimpleText = z.infer<typeof SimpleText>;

export const StyledTextDefaultData = z.record(LocaleKeyFormat, z.string());
export type StyledTextDefaultData = z.infer<typeof StyledTextDefaultData>;

export const StyledText = z.object({
  id: z.string(),
  values: StyledTextDefaultData,
});

export type StyledText = z.infer<typeof StyledText>;
