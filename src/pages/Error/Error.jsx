import { Link, useRouteError } from 'react-router-dom';

import { Section, Container } from 'components';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Section id="error-page">
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Go Home </Link>
      </Container>
    </Section>
  );
};

export default ErrorPage;
