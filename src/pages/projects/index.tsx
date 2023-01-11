import Head from 'next/head';

import { ProjectsTemplate } from '$templates/projects-template';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Meus projetos | Silvano Marques</title>
      </Head>

      <ProjectsTemplate />
    </>
  );
}
