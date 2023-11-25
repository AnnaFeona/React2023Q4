import { FC } from 'react';
// import './layout.scss';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};
