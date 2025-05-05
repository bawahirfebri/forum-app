import '../src/styles/style.css';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;