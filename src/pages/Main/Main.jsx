import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header, Container, Footer } from 'components';

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
export default Main;
