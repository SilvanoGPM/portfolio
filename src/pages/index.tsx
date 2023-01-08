import { HomeTemplate, HomeTemplateProps } from '$templates/HomeTemplate';
import { GetStaticProps } from 'next';

import { request } from '$services/dato';
import { GetLanguagesDocument } from '$graphql/generated';
import { TechnologiesProps } from '$templates/HomeTemplate/Technologies';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const data = await request(GetLanguagesDocument);

  const technologies = data.language?.names as TechnologiesProps;

  return {
    revalidate: 60 * 60 * 24 * 7, // one week
    props: {
      technologies,
    },
  };
};
