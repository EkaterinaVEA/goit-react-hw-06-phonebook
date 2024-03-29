import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styles';
import { RiBook2Line } from 'react-icons/ri';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          <RiBook2Line />
          {title}
        </Title>
      )}
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;