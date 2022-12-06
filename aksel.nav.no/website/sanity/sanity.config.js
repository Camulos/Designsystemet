import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { createAuthStore, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import {
  defaultDocumentNode,
  publicationFlow,
  structure,
} from "./custom-plugins";
import { form } from "./form";
import { getTemplates } from "./util";

import schemas from "./schema";

const projectId = "hnbe3yhs";

const sharedConfig = {
  projectId,
  apiVersion: "2021-10-21",
  schema: schemas,
  ...form,
  document: {
    newDocumentOptions: (prev, { currentUser }) => {
      const adminOrDev = currentUser.roles.find((x) =>
        ["developer", "administrator"].includes(x.name)
      );
      if (adminOrDev) {
        return prev;
      }
      return getTemplates(currentUser.roles);
    },
  },
  plugins: [
    deskTool({
      title: "Desk",
      structure,
      defaultDocumentNode,
    }),
    table(),
    codeInput(),
    media({
      projectId,
      dataset: "production",
    }),
    visionTool(),
    unsplashImageAsset(),
    publicationFlow({
      includedSchemas: ["testDoc"],
    }),
  ],
};

export const workspaceConfig = defineConfig([
  {
    name: "dev",
    title: "Dev",
    dataset: "development",
    basePath: "/admin/dev",
    ...sharedConfig,
    auth: createAuthStore({
      redirectOnSingle: false,
      mode: "replace",
      projectId,
      dataset: "development",
      providers: [
        {
          name: "saml",
          title: "NAV SSO",
          url: "https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37",
          logo: "/images/navlogo.svg",
        },
        {
          name: "github",
          title: "GitHub",
          url: "https://api.sanity.io/v1/auth/login/github",
        },
        {
          name: "google",
          title: "Google",
          url: "https://api.sanity.io/v1/auth/login/google",
        },
      ],
    }),
  },
  /* {
    name: "default",
    title: "Live",
    dataset: "production",
    basePath: "/admin/prod",
    ...sharedConfig,
    auth: createAuthStore({
      redirectOnSingle: false,
      mode: "replace",
      projectId,
      dataset: "production",
      providers: [
        {
          name: "saml",
          title: "NAV SSO",
          url: "https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37",
          logo: "/images/navlogo.svg",
        },
        {
          name: "github",
          title: "GitHub",
          url: "https://api.sanity.io/v1/auth/login/github",
        },
        {
          name: "google",
          title: "Google",
          url: "https://api.sanity.io/v1/auth/login/google",
        },
      ],
    }),
  }, */
]);

/* interface WorkspaceOptions {
  name: string
  title: string
  projectId: string
  dataset: string
  plugins?: PluginOptions[]
  schema?: SchemaPluginOptions
  document?: DocumentPluginOptions
  tools?: Tool[] | ComposableOption<Tool[], ConfigContext>
  form?: SanityFormConfig
  basePath?: string
  subtitle?: string
  logo?: React.ComponentType
  icon?: React.ComponentType
  navbar?: {
    components?: {
      ToolMenu: React.ComponentType<ToolMenuProps>
    }
  }
  theme?: StudioTheme
}



 */
