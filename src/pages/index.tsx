import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { request } from '$services/dato';
import { HomeTemplate } from '$templates/home-template';
import { GetInfoAndLatestProjectsDocument } from '$graphql/generated';
import { Project, Category } from '$templates/home-template/projects';
import { Analytics } from '$components/analytics';

interface InfoProps {
  aboutMe: string;
  techs: string[];
  api: string;
  web: string;
  other: string;
  title: string;
  description: string;
}

interface HomeProps {
  info: InfoProps;
  projects: Project[];
}

export default function Home({ info, projects }: HomeProps) {
  const { title, description, ...restInfo } = info;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          images: [
            {
              url: 'https://silvanomarques.vercel.app/cover.png',
              width: 1280,
              height: 720,
              alt: 'Silvano Marques',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Analytics />

      <HomeTemplate projects={projects} info={restInfo} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await request(GetInfoAndLatestProjectsDocument, {
    first: 3,
  });

  const info = data.info as InfoProps;
  const projectsRaw = data.allProjects;

  const projects = projectsRaw.map<Project>((project) => ({
    ...project,
    slug: String(project.slug),
    name: String(project.name),
    category: project.category as Category,
    techs: (project.techs as string[]) || [],
    thumbnail: project.thumbnail ? String(project.thumbnail?.url) : null,
  }));

  return {
    revalidate: 60 * 60 * 24 * 7, // one week
    props: {
      info,
      projects,
    },
  };
};
