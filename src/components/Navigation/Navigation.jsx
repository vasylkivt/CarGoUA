import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  const headerNav = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Favorite', href: '/favorite' },
  ];

  return (
    <Nav>
      {headerNav.map(({ name, href }) => {
        return (
          <Link key={name + href} to={href}>
            {name}
          </Link>
        );
      })}
    </Nav>
  );
};

export default Navigation;
