import Header from './Header';
import Catalogue from './Catalogue';
import PropTypes from 'prop-types';

const ItemListContainer = ({ language }) => {
  return (
    <div>
      <Header />
      <Catalogue language={language} />
    </div>
  );
};
ItemListContainer.propTypes = {
  language: PropTypes.string.isRequired
};
export default ItemListContainer;
