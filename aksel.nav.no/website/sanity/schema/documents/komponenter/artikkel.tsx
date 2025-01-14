import { defineField, defineType } from "sanity";
import { groups } from "../presets/groups";
import { artikkelPreview } from "../presets/artikkel-preview";
import { hiddenFields } from "../presets/hidden-fields";
import { editorField } from "../presets/editors";
import { titleField } from "../presets/title-field";
import { kategoriSlug, sanitySlug } from "../presets/slug";
import { komponentKategorier } from "../../../config";

const prefixOld = "designsystem/komponenter/";
const prefix = "komponenter/";

export const KomponentArtikkel = defineType({
  title: "Komponentartikkel",
  name: "komponent_artikkel",
  type: "document",
  groups,
  ...artikkelPreview,
  fields: [
    ...hiddenFields,
    titleField,
    editorField,
    defineField({
      title: "Kategori",
      name: "kategori",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: komponentKategorier.map((x) => ({
          title: x.title,
          value: x.value,
        })),
        layout: "radio",
      },
    }),
    sanitySlug(prefixOld, 3),
    kategoriSlug(prefix),

    defineField({
      title: "Metadata",
      name: "status",
      group: "innhold",
      type: "object",
      fields: [
        {
          title: "Status",
          name: "tag",
          type: "string",
          initialValue: "new",
          options: {
            list: [
              { title: "Beta", value: "beta" },
              { title: "New", value: "new" },
              { title: "Ready", value: "ready" },
              { title: "Deprecated", value: "deprecated" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "bilde",
          title: "Thumbnail/og-bilde",
          type: "image",
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "intro",
      type: "intro_komponent",
      group: "innhold",
    }),
    defineField({
      title: "Innhold",
      description:
        "Innholdet i artikkelen er riktekst. Tips: klikk på ikon i høyre hjørne for å skrive i fullskjerm.",
      name: "content",
      group: "innhold",
      type: "riktekst_komponent",
    }),
    defineField({
      title: "Kodepakker",
      name: "kodepakker",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "ds-react", value: "ds-react" },
          { title: "ds-css", value: "ds-css" },
          { title: "ds-react-internal", value: "ds-react-internal" },
          { title: "ds-css-internal", value: "ds-css-internal" },
          { title: "ds-icons", value: "ds-icons" },
          { title: "ds-tokens", value: "ds-tokens" },
          { title: "ds-tailwind", value: "ds-tailwind" },
        ],
      },
    }),
    defineField({
      title: "Figma lenke (optional)",
      name: "figma_link",
      type: "url",
      group: "lenker",
    }),
  ],
});
