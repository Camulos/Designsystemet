import { defineField, defineType } from "sanity";
import { groups } from "../presets/groups";
import { artikkelPreview } from "../presets/artikkel-preview";
import { hiddenFields } from "../presets/hidden-fields";
import { editorField } from "../presets/editors";
import { titleField } from "../presets/title-field";
import { sanitySlug } from "../presets/slug";
import { grunnleggendeKategorier } from "../../../config";

const prefix = "designsystem/side/";

export const GrunnleggendeArtikkel = defineType({
  title: "Ds-Artikkel",
  name: "ds_artikkel",
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
        list: grunnleggendeKategorier.map((x) => ({
          title: x.title,
          value: x.value,
        })),
        layout: "radio",
      },
    }),
    sanitySlug(prefix, 3),
    defineField({
      title: "Innhold",
      description:
        "Innholdet i artikkelen er riktekst. Tips: klikk på ikon i høyre hjørne for å skrive i fullskjerm.",
      name: "content",
      type: "riktekst_grunnleggende",
      group: "innhold",
    }),
  ],
});
