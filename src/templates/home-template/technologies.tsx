import { Section } from '$components/layout/section';
import { TechList } from '$components/ui/tech-list';

export interface TechnologiesProps {
  technologies: string[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <Section title="Tecnologias" textAlign="center" align="center" my="8">
      <TechList useMarquee techs={technologies} w="full" justify="center" />
    </Section>
  );
}
