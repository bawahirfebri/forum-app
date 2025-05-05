import PropTypes from 'prop-types';
import CategoriesList from '../components/CategoriesList';

const stories = {
  title: 'CategoriesList',
  component: CategoriesList,
};

export default stories;

const TemplateStory = (args) => <CategoriesList {...args}/>;

const WithTypeDefault = TemplateStory.bind({});
WithTypeDefault.args = {
  categories: ['redux', 'perkenalan', 'dicoding'],
  activeCategory: '',
};

const WithTypeActive = TemplateStory.bind({});
WithTypeActive.args = {
  categories: ['redux', 'perkenalan', 'dicoding'],
  activeCategory: 'redux',
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export { WithTypeDefault, WithTypeActive };