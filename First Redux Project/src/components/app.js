import React, { Component } from 'react';

import BookList from './book_list';
import BookDetail from './book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
