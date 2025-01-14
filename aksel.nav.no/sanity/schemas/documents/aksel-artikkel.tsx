import {
  defaultDocPreview,
  editorField,
  groups,
  ingressField,
  innholdFieldNew,
  publishedAtField,
  relevanteArtiklerField,
  sanitySlug,
  SEOFields,
  titleField,
} from "@/lib";

const prefix = "god-praksis/artikler/";

export default {
  title: "Aksel Artikkel",
  name: "aksel_artikkel",
  type: "document",
  groups,
  ...defaultDocPreview,
  fields: [
    publishedAtField,
    editorField,
    titleField,
    sanitySlug(prefix, 3),
    {
      title: "Tema",
      description: "Legg til de viktigeste temaene",
      name: "tema",
      type: "array",
      of: [{ type: "reference", to: [{ type: "aksel_tema" }] }],
      group: "innhold",
    },

    ingressField,
    innholdFieldNew,
    relevanteArtiklerField,

    SEOFields,
  ],
};
