import { Suspense } from 'react';
import { Header } from 'components';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Main;
