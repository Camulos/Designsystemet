import { defineField, defineType } from "sanity";

const limits = [
  "/blogg/",
  "/artikkel/",
  "/god-praksis/artikler/",
  "/prinsipper/",
  "/designsystem/side/",
  "/designsystem/komponenter/",
];

export const Redirect = defineType({
  name: "redirect",
  title: "Redirects",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Fra",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((_, { parent }: { parent?: any }) => {
          if (!parent?.source?.startsWith?.("/")) {
            return "Kan bare redirecte fra relativ-url, eks /min/gamle/sideurl";
          }
          const valid = limits.find(
            (x) => parent?.source?.startsWith?.(x) && parent.source > x
          );

          if (!valid) {
            return `Kan bare redirecte fra sider som starter med en av disse url-ene ${limits.join(
              ", "
            )}`;
          }
          return true;
        }),
    }),
    defineField({
      name: "destination",
      title: "Til",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "permanent",
      title: "Permanent",
      type: "boolean",
      initialValue: () => true,
    }),
  ],
  __experimental_omnisearch_visibility: false,
});
