import { BloggCard } from "@/components";
import { AkselHeader, Footer } from "@/layout";
import { SanityT, akselBloggPosts } from "@/lib";
import { getClient } from "@/sanity-client";
import { Heading } from "@navikt/ds-react";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import React, { lazy } from "react";
import NotFotfund from "../404";

const Page = (props: PageProps): JSX.Element => {
  if (!props.bloggposts) {
    return <NotFotfund />;
  }

  return (
    <>
      <Head>
        <title>Produktbloggen - Aksel</title>
        <meta property="og:title" content="Produktbloggen - Aksel" />
      </Head>
      <div className="bg-gray-50">
        <AkselHeader variant="inngang" />
        <main
          tabIndex={-1}
          id="hovedinnhold"
          className="min-h-[80vh] bg-gray-100 focus:outline-none"
        >
          <div className="relative bg-white px-4 pt-8 pb-8 md:pt-12">
            <div className="dynamic-wrapper-2xl w-fit">
              <Heading
                level="1"
                size="xlarge"
                spacing
                className="algolia-index-lvl1"
              >
                Produktbloggen
              </Heading>
            </div>
          </div>
          <div className="relative px-4 pt-8 pb-24">
            <div className="dynamic-wrapper-2xl w-fit">
              <div className="mt-4 grid gap-2 divide-y divide-gray-300">
                {props.bloggposts.map((blog) => (
                  <BloggCard key={blog._id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer variant="aksel" />
      </div>
    </>
  );
};

const WithPreview = lazy(() => import("../../components/WithPreview"));

const Wrapper = (props: any): JSX.Element => {
  if (props?.preview) {
    return (
      <PreviewSuspense fallback={<Page {...props} />}>
        <WithPreview comp={Page} query={akselBloggPosts} props={props} />
      </PreviewSuspense>
    );
  }

  return <Page {...props} />;
};

export default Wrapper;

export type AkselBloggPage = Partial<
  SanityT.Schema.aksel_blogg & {
    slug: string;
    contributors?: { title?: string }[];
  }
>;

interface PageProps {
  bloggposts: AkselBloggPage[];
  preview: boolean;
}

interface StaticProps {
  props: PageProps;
  notFound: boolean;
  revalidate: number;
}

export const getStaticProps = async ({
  preview = false,
}: {
  preview?: boolean;
}): Promise<StaticProps | { notFound: true }> => {
  const { bloggposts } = await getClient().fetch(akselBloggPosts);

  return {
    props: {
      bloggposts,
      preview,
    },
    notFound: !bloggposts && !preview,
    revalidate: 60,
  };
};
