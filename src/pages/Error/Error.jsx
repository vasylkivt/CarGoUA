import { Link, useRouteError } from 'react-router-dom';

import { Section } from 'components';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Section id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go Home </Link>
    </Section>
  );
};

export default ErrorPage;
