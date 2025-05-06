import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from '../components/ThreadItem';
import { MemoryRouter } from 'react-router-dom';

const stories = {
  title: 'ThreadItem',
  component: ThreadItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default stories;

const TemplateStory = (args) => <ThreadItem {...args} />;

const WithTypeDefault = TemplateStory.bind({});
WithTypeDefault.args = {
  id: 'thread-1',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  category: 'redux',
  createdAt: '2025-05-21T07:00:00.000Z',
  owner: {
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Saputra',
  },
  authUserId: 'user-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const WithTypeUpVoted = TemplateStory.bind({});
WithTypeUpVoted.args = {
  id: 'thread-1',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  category: 'redux',
  createdAt: '2025-05-21T07:00:00.000Z',
  upVotesBy: ['user-1'],
  downVotesBy: [],
  totalComments: 0,
  owner: {
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Saputra',
  },
  authUserId: 'user-1',
};

const WithTypeDownVoted = TemplateStory.bind({});
WithTypeDownVoted.args = {
  id: 'thread-1',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  category: 'redux',
  createdAt: '2025-05-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: ['user-1'],
  totalComments: 0,
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

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUserId: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export { WithTypeDefault, WithTypeUpVoted, WithTypeDownVoted };
