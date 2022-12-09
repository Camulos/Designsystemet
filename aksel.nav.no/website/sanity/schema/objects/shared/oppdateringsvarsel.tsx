import { defineField, defineType } from "sanity";
import { UpdateInfo } from "../../custom-components";

export const Oppdateringsvarsel = defineType({
  title: "Kode",
  name: "updateWarning",
  type: "object",
  fields: [
    defineField({
      name: "updateInfo",
      type: "string",
      title: " ",
      components: {
        field: UpdateInfo,
      },
    }),
    defineField({
      type: "date",
      name: "lastVerified",
      description: "Kun synlig for utviklere",
      hidden: ({ currentUser }) => {
        return !currentUser?.roles.some((r) => r.name === "developer");
      },
      readOnly: true,
    }),
  ],
});
