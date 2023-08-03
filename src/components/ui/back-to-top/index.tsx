import { Box, Icon, IconButton, LightMode, useBoolean } from '@chakra-ui/react';
import { useEffect } from 'react';
import { RiArrowUpCircleFill } from 'react-icons/ri';

import { debounce } from '$utils/debounce';

import styles from './styles.module.css';

export function BackToTop() {
  const [showButton, changeShowButton] = useBoolean();

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    changeShowButton.off();
  }

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;

      if (position >= 500) {
        changeShowButton.on();
      } else {
        changeShowButton.off();
      }
    }

    window.addEventListener('scroll', debounce(handleScroll, 250));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeShowButton]);

  const containerClassName = `${styles.default} ${
    showButton ? styles.show : styles.hide
  }`;

  return (
    <LightMode>
      <Box
        pos="fixed"
        zIndex="overlay"
        right="1rem"
        bottom="1rem"
        className={containerClassName}
      >
        <IconButton
          w="40px"
          h="40px"
          aria-label="Voltar ao topo"
          rounded="full"
          onClick={backToTop}
          icon={<Icon as={RiArrowUpCircleFill} fontSize="2xl" color="white" />}
          transition="0.2s ease-in-out"
          _hover={{
            boxShadow: 'red',
          }}
        />
      </Box>
    </LightMode>
  );
}
