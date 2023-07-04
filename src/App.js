import React from 'react';
import { Provider } from 'react-redux';
import store from './books/store';
import Books from './books/books';

import { ThemeProvider } from './themes/context';
import ThemeSwitcher from './themes/themeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Books />
      </Provider>
      <div>
        <h1>My Awesome App</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
