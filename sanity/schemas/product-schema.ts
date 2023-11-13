import { defineField, defineType } from "sanity"

export const product = defineType({
  name: "preset",
  title: "Presets",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        souce: "name",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
})
