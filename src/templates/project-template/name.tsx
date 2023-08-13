import { Box, Flex, Icon, IconButton } from '@chakra-ui/react';

import { Title } from '$components/chakra/title';
import { CategoryBadge } from '$components/ui/project-card/category-badge';

import { Project } from '.';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface NameProps {
  project: Project;
}

export function Name({ project }: NameProps) {
  const { back } = useRouter();

  return (
    <Flex align="center" gap="1rem">
      <Box>
        <Flex gap="2" mb="2">
          <IconButton
            aria-label="Voltar"
            icon={<Icon as={AiOutlineArrowLeft} />}
            onClick={back}
            variant="outline"
            rounded="full"
          />

          <CategoryBadge category={project.category} />
        </Flex>

        <Title underlineWidth="50%">{project.name}</Title>
      </Box>
    </Flex>
  );
}
