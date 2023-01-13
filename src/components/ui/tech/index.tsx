import { forwardRef, ForwardRefRenderFunction, LegacyRef } from 'react';
import { IconProps, Text, TextProps } from '@chakra-ui/react';

import { IntersectingTypes } from '$utils/intersecting-types';

import { iconsTech } from './icons-tech';

interface TechProps extends Partial<IntersectingTypes<IconProps, TextProps>> {
  name: string;
  colored?: boolean;
  bottomGap?: boolean;
}

const originals = ['express'];

const TechBase: ForwardRefRenderFunction<
  HTMLParagraphElement | SVGSVGElement,
  TechProps
> = ({ name, colored = true, bottomGap, ...props }, ref) => {
  const isIconTech = Object.keys(iconsTech).find(
    (key) => key === name.toLocaleLowerCase(),
  );

  if (isIconTech) {
    const { Icon: TechIcon, ...iconProps } =
      iconsTech[isIconTech as keyof typeof iconsTech];

    const otherProps = colored
      ? { ...props, ...iconProps }
      : { ...iconProps, ...props };

    return (
      <TechIcon
        mb={bottomGap ? '10px' : otherProps.mb}
        {...otherProps}
        ref={ref as LegacyRef<SVGSVGElement>}
      />
    );
  }

  const coloredClass = colored ? 'colored' : '';
  const suffix = originals.includes(name) ? 'original' : 'plain';

  return (
    <Text
      {...(props as TextProps)}
      ref={ref as LegacyRef<HTMLParagraphElement>}
    >
      <i
        className={`devicon-${name.toLocaleLowerCase()}-${suffix} ${coloredClass}`}
      ></i>
    </Text>
  );
};

export const Tech = forwardRef(TechBase);
