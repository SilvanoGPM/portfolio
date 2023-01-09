import { GetStaticProps } from 'next';

import { request } from '$services/dato';
import { HomeTemplate, HomeTemplateProps } from '$templates/home-template';
import { GetLanguagesAndLatestProjectsDocument } from '$graphql/generated';
import { TechnologiesProps } from '$templates/home-template/technologies';
import { Project, Category } from '$templates/home-template/projects';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const data = await request(GetLanguagesAndLatestProjectsDocument, {
    first: 3,
  });

  const technologies = data.language?.names as TechnologiesProps;
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
      technologies,
      projects: { projects },
    },
  };
};
