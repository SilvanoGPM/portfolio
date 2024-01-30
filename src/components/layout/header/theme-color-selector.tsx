import { usePreferencesStore } from '$stores/preferences';

import { ColorTheme, colorThemes } from '$styles/color-theme';
import { glassmorphismContainer } from '$styles/tokens';
import { Box, Center, useBreakpointValue } from '@chakra-ui/react';
import { ChakraStylesConfig, Select } from 'chakra-react-select';

interface ThemeOption {
  label: string;
  value: string;
}

const options = Object.entries(colorThemes).map<ThemeOption>(
  ([label, value]) => ({
    label,
    value: `linear(to-r, ${value['100']}, ${value['500']}, ${value['900']})`,
  }),
);

export function ThemeColorSelector() {
  const { updatePreferences, preferences } = usePreferencesStore();

  const defaultTheme = options.find(
    (option) => option.label === preferences.color,
  );

  const placement = useBreakpointValue({
    base: 'top' as const,
    lg: 'bottom' as const,
  });

  const chakraStyles: ChakraStylesConfig<ThemeOption> = {
    menuList: () => ({
      w: '120px',
      py: '4',
      ...glassmorphismContainer({
        bg: 'background.alpha.600',
      }),
    }),

    option: (provided) => ({
      ...provided,
      background: 'transparent',
    }),

    valueContainer: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }),

    control: () => ({}),
  };

  return (
    <Select<ThemeOption>
      aria-label="Trocar cores"
      options={options}
      menuPlacement={placement}
      defaultValue={defaultTheme}
      chakraStyles={chakraStyles}
      isSearchable={false}
      placeholder=""
      components={{
        DropdownIndicator: null,
        Option: (props) => (
          <Center
            cursor="pointer"
            w="full"
            h="full"
            mb="2"
            onClick={() => {
              const themeFound = options.find(
                (option) => option.label === props.label,
              );

              if (!themeFound) {
                return;
              }

              props.selectOption(themeFound);

              updatePreferences({
                color: props.label as ColorTheme,
              });
            }}
          >
            <Box
              boxSize="24px"
              rounded="full"
              bgGradient={
                options.find((option) => option.label === props.label)?.value
              }
            />{' '}
          </Center>
        ),

        SingleValue: (props) => (
          <Center cursor="pointer" w="full" h="full">
            <Box boxSize="24px" rounded="full" bgGradient={props.data?.value} />
          </Center>
        ),
      }}
    />
  );
}
