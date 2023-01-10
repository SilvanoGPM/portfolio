import { GetStaticPaths, GetStaticProps } from 'next';

import {
  ProjectTemplate,
  ProjectTemplateProps,
  Category,
} from '$templates/project-template';

import { getProject } from '$http/getProject';
import { findProjects } from '$http/findProjects';

export default function Project(props: ProjectTemplateProps) {
  return <ProjectTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await findProjects({ page: 1 });

  const paths = data.allProjects.map(({ slug }) => ({
    params: { slug: String(slug) },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ProjectTemplateProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };

  const data = await getProject(slug);

  if (!data.project) {
    return { notFound: true };
  }

  const project = {
    ...data.project,
    description: String(data.project.description),
    name: String(data.project.name),
    category: data.project.category as Category,
    techs: (data.project.techs as string[]) || [],
    thumbnail: data.project.thumbnail
      ? String(data.project.thumbnail?.url)
      : null,
  };

  return {
    props: { project },
    revalidate: 60 * 60 * 24 * 7, // one week
  };
};
