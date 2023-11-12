import { Section } from 'components';
import { Heading, List, ListItem, Paragraph, SubHeading } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Section>
      <Heading>Welcome to CarGoUA!</Heading>
      <Paragraph>
        Your ultimate destination for finding the perfect car to suit your
        needs.
      </Paragraph>

      <Paragraph>
        At Car Rent, we make your journey extraordinary. Whether you&apos;re
        planning a road trip or just need a reliable vehicle for the day,
        we&apos;ve got you covered.
      </Paragraph>

      <SubHeading>Why Choose Car Rent?</SubHeading>
      <List>
        <ListItem>
          <strong>Wide Selection:</strong> Explore our diverse range of cars,
          from sleek sedans to spacious SUVs. We have something for every
          adventure.
        </ListItem>
        <ListItem>
          <strong>Easy Booking:</strong> Our user-friendly platform ensures a
          hassle-free booking experience. Just a few clicks, and you&apos;re on
          your way!
        </ListItem>
        <ListItem>
          <strong>Quality Assurance:</strong> Rest easy knowing that every car
          in our fleet undergoes rigorous inspections, ensuring your safety and
          satisfaction.
        </ListItem>
        <ListItem>
          <strong>Flexible Rental Plans:</strong> Choose the rental duration
          that suits your schedule. Hourly, daily, or weekly – the choice is
          yours.
        </ListItem>
      </List>

      <Paragraph>
        Ready to embark on your next journey? Click{' '}
        <strong>
          <Link to="/catalog">Start</Link>
        </strong>{' '}
        to begin discovering our fleet of top-notch vehicles!
      </Paragraph>
    </Section>
  );
};
export default Home;
