import React from "react";
import { defineType, defineField } from "sanity";
import Avatar from "boring-avatars";
import { EditorPreview } from "../custom-components/EditorPreview";
import { EditorPage } from "../custom-components/EditorPage";

export const Editors = defineType({
  title: "Forfattere",
  name: "editor",
  type: "document",
  components: {
    preview: EditorPreview,
  },
  fields: [
    defineField({
      title: "Navn",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Må legge til navn"),
    }),
    defineField({
      title: "Sanity bruker-id (dev only)",
      name: "user_id",
      type: "slug",
      validation: (Rule) => Rule.required().error("Må ha Id"),
      options: {
        source: (_, { currentUser }) => {
          return currentUser.id;
        },
        slugify: (input) => input,
      },
      readOnly: true,
      hidden: ({ currentUser }) =>
        !currentUser.roles.find((x) => x.name === "developer"),
    }),
    defineField({
      title: "Roller",
      description: "eks: Utvikler, Webanalytiker, uu-spesialist",
      name: "roller",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "profilside",
      type: "string",
      title: "",
      components: {
        field: EditorPage,
      },
      readOnly: true,
      hidden: ({ currentUser, parent }) => {
        const { id, roles } = currentUser;
        return (
          !roles.find(({ name }) =>
            ["developer", "administrator"].includes(name)
          ) && parent?.user_id?.current !== id
        );
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      user_id: "user_id",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
        subtitle: "Min profilside",
        media: () => (
          <Avatar
            size={100}
            name={title}
            square
            variant="beam"
            colors={["#D1DAB9", "#92BEA5", "#6F646C", "#671045", "#31233E"]}
          />
        ),
      };
    },
  },
});
