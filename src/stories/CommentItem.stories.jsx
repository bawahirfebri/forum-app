import { MemoryRouter } from 'react-router-dom';
import CommentItem from '../components/CommentItem';
import PropTypes from 'prop-types';

const stories = {
  title: 'CommentItem',
  component: <CommentItem />,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
};

export default stories;

const TemplateStory = (args) => <CommentItem {...args} />;

const WithTypeDefault = TemplateStory.bind({});
WithTypeDefault.args = {
  id: 'comment-1',
  content: 'ada',
  createdAt: '2025-05-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: [],
  owner: {
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Saputra',
  },
  authUserId: 'user-1',
};

const WithTypeUpVoted = TemplateStory.bind({});
WithTypeUpVoted.args = {
  id: 'comment-1',
  content: 'ada',
  createdAt: '2025-05-21T07:00:00.000Z',
  upVotesBy: ['user-1'],
  downVotesBy: [],
  owner: {
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Saputra',
  },
  authUserId: 'user-1',
};

const WithTypeDownVoted = TemplateStory.bind({});
WithTypeDownVoted.args = {
  id: 'comment-1',
  content: 'ada',
  createdAt: '2025-05-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: ['user-1'],
  owner: {
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Saputra',
  },
  authUserId: 'user-1',
};

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  authUserId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export {
  WithTypeDefault,
  WithTypeUpVoted,
  WithTypeDownVoted,
};