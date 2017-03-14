import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';

function mapStateToProps(state) {
  //Whatever gets returned here will show up as props inside book list
  return {
    books: state.books
    };
};

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            className='list-group-item'
            onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  };
};

//anything return for mapDispatchToProps will end up as props on the BookList
//So, when we call this.props.selectBook, it will call that action creator in the proper manner and dispatch
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, it will be dispatched to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
