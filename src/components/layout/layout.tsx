import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootStyle = styled('div')({
  display: 'grid',
  placeItems: 'center',
  color: 'black',
});

export default function Layout({ children }: Props) {
  return (
    <main className="lg:px-6">
      <RootStyle>{children}</RootStyle>
    </main>
  );
}
