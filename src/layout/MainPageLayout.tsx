import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainPageLayout = ({ children }: Props) => {
  return (
    <main
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </main>
  );
};

export default MainPageLayout;
