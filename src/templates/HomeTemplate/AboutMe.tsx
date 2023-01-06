import { Box, Text } from '@chakra-ui/react';

import { SubTitle } from '$components/chakra/SubTitle';
import { HighlightText } from '$components/chakra/HighlightText';

export function AboutMe() {
  return (
    <Box as="section">
      <SubTitle>Sobre mim</SubTitle>

      <Text maxW="600px" fontSize="xl" textAlign="justify">
        Me chamo <HighlightText>Silvano Marques</HighlightText> e atualmente
        estou localizado no estado de Pernambuco. Comecei a estudar programação
        com 14 anos e desde não parei, meu foco é em desenvolvimento web, porém
        já explorei algumas outras áreas, como mobile, games e arduino. Estou no
        último ano do meu processo de formação para{' '}
        <HighlightText>Técnico em Desenvolvimento de Sistemas</HighlightText>.
      </Text>
    </Box>
  );
}
