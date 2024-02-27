import { theme } from '$styles/theme';
import { Flex, FlexProps } from '@chakra-ui/react';
import { Fragment } from 'react';
import Marquee from 'react-fast-marquee';

import { TechCard } from './tech-card';

const blackLogos = ['nextjs', 'github', 'express'];

interface TechListProps extends FlexProps {
  techs: string[];
  useMarquee?: boolean;
}

export function TechList({ techs, useMarquee, ...props }: TechListProps) {
  const Wrapper = useMarquee ? Marquee : Fragment;

  return (
    <Flex py="4" wrap={useMarquee ? 'nowrap' : 'wrap'} {...props}>
      <Wrapper
        autoFill
        pauseOnHover
        speed={60}
        gradient
        gradientColor={theme.colors.background['500']}
      >
        {techs.map((tech) => (
          <TechCard
            direction={useMarquee ? 'vertical' : 'horizontal'}
            disableGlassmorphism
            key={tech}
            name={tech}
            border="1px"
            borderRadius="lg"
            borderColor="brand.500"
            bg="brand.alpha.200"
            colored={!blackLogos.includes(tech)}
            techProps={{ fontSize: '4xl' }}
            textProps={{ fontSize: 'xl' }}
            m="2"
          />
        ))}
      </Wrapper>
    </Flex>
  );
}
