import { defineField, defineType } from "sanity";
import { groups } from "../presets/groups";
import { artikkelPreview } from "../presets/artikkel-preview";
import { hiddenFields } from "../presets/hidden-fields";
import { editorField } from "../presets/editors";
import { titleField } from "../presets/title-field";
import { ingressField } from "../presets/ingress";
import { SEOFields } from "../presets/seo";
import { sanitySlug } from "../presets/slug";

const prefix = "blogg/";

export const Blogg = defineType({
  title: "Blogg",
  name: "aksel_blogg",
  type: "document",
  groups,
  ...artikkelPreview,
  fields: [
    ...hiddenFields,
    editorField,
    titleField,
    sanitySlug(prefix, 2),
    ingressField,
    defineField({
      title: "Innhold",
      name: "content",
      type: "riktekst_standard",
      group: "innhold",
    }),

    SEOFields,
  ],
});