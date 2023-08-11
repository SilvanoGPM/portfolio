import { Logo } from './logo';
import { Navbar } from './navbar';
import { Footer } from './footer';

export interface ContentProps {
  isLargeScreen: boolean;
}

export function Content({ isLargeScreen }: ContentProps) {
  return (
    <>
      <Logo />
      <Navbar isLargeScreen={isLargeScreen} />
      <Footer />
    </>
  );
}
