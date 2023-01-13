import Head from 'next/head';

import { ProjectsTemplate } from '$templates/projects-template';
import { Analytics } from '$components/analytics';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Meus projetos | Silvano Marques</title>
      </Head>

      <Analytics />

      <ProjectsTemplate />
    </>
  );
}
