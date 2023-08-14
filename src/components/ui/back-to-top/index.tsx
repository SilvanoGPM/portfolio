import {
  Box,
  Icon,
  IconButton,
  useBoolean,
  useEventListener,
} from '@chakra-ui/react';
import { AiFillCaretUp } from 'react-icons/ai';
import { throttle } from '$utils/throttle';

import styles from './styles.module.css';

const ON_SCROLL_THROTTLE_MILLIS = 1000;
const MIN_HEIGHT_TO_SHOW_BUTTON = 500;

export function BackToTop() {
  const [showButton, changeShowButton] = useBoolean();

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    changeShowButton.off();
  }

  function onScroll() {
    const position = window.pageYOffset;

    if (position >= MIN_HEIGHT_TO_SHOW_BUTTON) {
      changeShowButton.on();
    } else {
      changeShowButton.off();
    }
  }

  useEventListener('scroll', throttle(onScroll, ON_SCROLL_THROTTLE_MILLIS));

  const containerClassName = `${styles.default} ${
    showButton ? styles.show : styles.hide
  }`;

  return (
    <Box
      flexDir="column"
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
        icon={<Icon as={AiFillCaretUp} fontSize="2xl" color="white" />}
        transition="0.2s ease-in-out"
        _hover={{
          boxShadow: 'red',
        }}
      />
    </Box>
  );
}
