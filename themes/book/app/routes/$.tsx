import {
  json,
  type V2_MetaFunction,
  type LinksFunction,
  type LoaderFunction,
} from '@remix-run/node';
import { getProject, isFlatSite, type PageLoader } from '@myst-theme/common';
import {
  KatexCSS,
  useOutlineHeight,
  useSidebarHeight,
  PrimaryNavigation,
  TopNav,
  getMetaTagsForArticle,
  ErrorDocumentNotFound,
  ErrorUnhandled,
} from '@myst-theme/site';
import { getConfig, getPage } from '~/utils/loaders.server';
import { useLoaderData } from '@remix-run/react';
import type { SiteManifest } from 'myst-config';
import {
  TabStateProvider,
  UiStateProvider,
  useBaseurl,
  useSiteManifest,
  useThemeTop,
  ProjectProvider,
} from '@myst-theme/providers';
import { MadeWithMyst } from '@myst-theme/icons';
import { ComputeOptionsProvider, ThebeLoaderAndServer } from '@myst-theme/jupyter';
import { ArticlePage } from '~/components/ArticlePage';
import type { TemplateOptions } from '~/types';
import { useRouteError, isRouteErrorResponse } from '@remix-run/react';
import {
  Footer,
  TextWithLink,
  ButtonWithIcon,
  iconPositions,
} from '@myst-theme/site/dist/components/Custom';
type ManifestProject = Required<SiteManifest>['projects'][0];

export const meta: V2_MetaFunction<typeof loader> = ({ data, matches, location }) => {
  if (!data) return [];

  const config: SiteManifest = data.config;
  const project: ManifestProject = data.project;
  const page: PageLoader['frontmatter'] = data.page.frontmatter;

  const siteTitle = config?.title ?? project?.title ?? '';

  return getMetaTagsForArticle({
    origin: '',
    url: location.pathname,
    title: page?.title ? `${page.title}${siteTitle ? ` - ${siteTitle}` : ''}` : siteTitle,
    description: page?.description ?? project?.description ?? config?.description ?? undefined,
    image:
      (page?.thumbnailOptimized || page?.thumbnail) ??
      (project?.thumbnailOptimized || project?.thumbnail) ??
      undefined,
    twitter: config?.options?.twitter,
    keywords: page?.keywords ?? project?.keywords ?? config?.keywords ?? [],
  });
};

export const links: LinksFunction = () => [KatexCSS];

export const loader: LoaderFunction = async ({ params, request }) => {
  const [first, ...rest] = new URL(request.url).pathname.slice(1).split('/');
  const config = await getConfig();
  const project = getProject(config, first);
  const projectName = project?.slug === first ? first : undefined;
  const slugParts = projectName ? rest : [first, ...rest];
  const slug = slugParts.length ? slugParts.join('.') : undefined;
  const flat = isFlatSite(config);
  const page = await getPage(request, {
    project: flat ? projectName : (projectName ?? slug),
    slug: flat ? slug : projectName ? slug : undefined,
    redirect: process.env.MODE === 'static' ? false : true,
  });
  return json({ config, page, project });
};

function ArticlePageAndNavigationInternal({
  children,
  hide_toc,
  hideSearch,
  projectSlug,
  inset = 20, // begin text 20px from the top (aligned with menu)
}: {
  hide_toc?: boolean;
  hideSearch?: boolean;
  projectSlug?: string;
  children: React.ReactNode;
  inset?: number;
}) {
  const top = useThemeTop();
  const { container, toc } = useSidebarHeight(top, inset);
  return (
    <>
      <TopNav hideToc={hide_toc} hideSearch={hideSearch} />
      <PrimaryNavigation
        sidebarRef={toc}
        hide_toc={hide_toc}
        footer={<MadeWithMyst />}
        projectSlug={projectSlug}
      />
      <TabStateProvider>
        <article
          ref={container}
          className="article content article-grid grid-gap"
          // article does not neet to get top as it is in the page flow (z-0)
          // style={{ marginTop: top }}
        >
          {children}
        </article>
      </TabStateProvider>
      <Footer>
        <div className="flex flex-col md:mx-3 xl:mx-6">
          <div>Developed by the Office of eResearch, QUT</div>
          <div>
            <TextWithLink
              link={{
                href: 'https://www.qut.edu.au/about/indigenous',
                text: 'QUT acknowledges the Traditional Owners of the lands where QUT now stands.',
                isExternal: true,
              }}
              hasExternalIcon={true}
            />
          </div>
          <div className="hidden lg:block">
            <TextWithLink
              textBeforeLink={'TEQSA Provider ID '}
              link={{
                href: 'https://www.qut.edu.au/about/indigenous',
                text: 'PRV12079',
                isExternal: true,
              }}
              hasExternalIcon={true}
              textAfterLink={' Australian University | CRICOS No. 00213J'}
            />
          </div>
          <div className="block lg:hidden">
            <TextWithLink
              textBeforeLink={'TEQSA'}
              link={{
                href: 'https://www.teqsa.gov.au/national-register/provider/queensland-university-technology',
                text: 'PRV12079',
                isExternal: true,
              }}
              hasExternalIcon={true}
              textAfterLink={'| CRICOS No. 00213J'}
            />
          </div>
        </div>
        <div className="md:mx-3">
          <ButtonWithIcon
            iconPosition={iconPositions.before}
            link={{
              href: 'https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage',
              text: 'Contact eResearch',
              isExternal: true,
            }}
            hasExternalIcon={true}
          />
        </div>
      </Footer>
    </>
  );
}

export function ArticlePageAndNavigation({
  children,
  hide_toc,
  hideSearch,
  projectSlug,
  inset = 20, // begin text 20px from the top (aligned with menu)
}: {
  hide_toc?: boolean;
  hideSearch?: boolean;
  projectSlug?: string;
  children: React.ReactNode;
  inset?: number;
}) {
  return (
    <UiStateProvider>
      <ArticlePageAndNavigationInternal
        children={children}
        hide_toc={hide_toc}
        hideSearch={hideSearch}
        projectSlug={projectSlug}
        inset={inset}
      />
    </UiStateProvider>
  );
}

export default function Page() {
  const { container } = useOutlineHeight();
  const data = useLoaderData() as { page: PageLoader; project: ManifestProject };
  const baseurl = useBaseurl();
  const pageDesign: TemplateOptions = (data.page.frontmatter as any)?.site ?? {};
  const siteDesign: TemplateOptions =
    (useSiteManifest() as SiteManifest & TemplateOptions)?.options ?? {};
  const { hide_toc, hide_search, hide_footer_links } = {
    ...siteDesign,
    ...pageDesign,
  };
  return (
    <ArticlePageAndNavigation
      hide_toc={hide_toc}
      hideSearch={hide_search}
      projectSlug={data.page.project}
    >
      {/* <ProjectProvider project={project}> */}
      <ProjectProvider>
        <ComputeOptionsProvider
          features={{ notebookCompute: true, figureCompute: true, launchBinder: false }}
        >
          <ThebeLoaderAndServer baseurl={baseurl}>
            <main ref={container} className="article-grid subgrid-gap col-screen">
              <ArticlePage article={data.page} hide_all_footer_links={hide_footer_links} />
            </main>
          </ThebeLoaderAndServer>
        </ComputeOptionsProvider>
      </ProjectProvider>
    </ArticlePageAndNavigation>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <ArticlePageAndNavigation>
      <main className="article">
        {isRouteErrorResponse(error) ? (
          <ErrorDocumentNotFound />
        ) : (
          <ErrorUnhandled error={error as any} />
        )}
      </main>
    </ArticlePageAndNavigation>
  );
}
