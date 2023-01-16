import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rangeParser from 'parse-numeric-range';
import type { NormalComponents } from 'react-markdown/lib/complex-types';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';

import { Image } from '$components/chakra/image';

import { CustomHeader } from './custom-header';

import './highlight';

type Components = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CodeProps = any;

export const components: Components = {
  h1(props) {
    return <CustomHeader {...props} />;
  },

  h2(props) {
    return <CustomHeader {...props} />;
  },

  h3(props) {
    return <CustomHeader {...props} />;
  },

  h4(props) {
    return <CustomHeader {...props} />;
  },

  h5(props) {
    return <CustomHeader {...props} />;
  },

  h6(props) {
    return <CustomHeader {...props} />;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code({ node, className, inline, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || '');
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;

        const metadata = node.data.meta?.replace(/\s/g, '');
        const exec = RE.exec(metadata) || [''];

        const strlineNumbers = RE?.test(metadata) ? exec[0] : '0';
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;

        const data = highlight.includes(applyHighlights) ? 'highlight' : null;

        return { data };
      } else {
        return {};
      }
    };

    return match ? (
      <SyntaxHighlighter
        style={materialDark}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers
        useInlineStyles
        lineProps={applyHighlights}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p: (paragraph: { children?: any; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];

      return (
        <div>
          <Image
            src={image.properties.src}
            alt={image.properties.alt || ''}
            w="full"
            h="full"
            maxW="full"
            maxH="400px"
          />
        </div>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};
