import markdownToTxt from 'markdown-to-txt';

export interface Project {
  slug?: string | null;
  name?: string | null;
  description?: string | null;
  category?: string | null;
  url?: string | null;
  repository?: string | null;
  techs?: unknown;
  thumbnail?: { url?: string } | null;
}

const LONG_TEXT_LENGTH = 165;

export function formatProject(project: Project) {
  const descriptionIsLong =
    project.description && project.description.length > LONG_TEXT_LENGTH;

  const description = descriptionIsLong
    ? markdownToTxt(String(project.description)).slice(0, LONG_TEXT_LENGTH) +
      '... (clique para continuar lendo.)'
    : String(project.description);

  return {
    slug: String(project.slug),
    name: String(project.name),
    description,
    category: project.category as 'web' | 'mobile' | 'api' | 'other',
    techs: (project.techs as string[]) || [],
    repository: project.repository,
    url: project.url,
    thumbnail: project.thumbnail ? String(project.thumbnail?.url) : null,
  };
}
