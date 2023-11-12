import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header, Container, Footer, RotateLoaderWrap } from 'components';
import { useSelector } from 'react-redux';
import { BarLoader, RotateLoader } from 'react-spinners';
import { selectIsLoading } from '../redux/car/selectors';

const Main = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <BarLoader
        loading={isLoading}
        color="#0B44CD"
        width="100%"
        speedMultiplier={0.5}
        cssOverride={{ position: 'absolute' }}
      />

      <main>
        <Suspense
          fallback={
            <RotateLoaderWrap>
              <RotateLoader margin={60} size={50} color="#0B44CD" />
            </RotateLoaderWrap>
          }
        >
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
