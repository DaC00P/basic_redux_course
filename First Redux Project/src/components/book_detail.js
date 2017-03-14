import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
};

class BookDetail extends Component {
  render() {
    if(!this.props.book){
        return <div>Select a Book to get Started!</div>
    };

    return (
      <div>
        <h3>Details For:</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(BookDetail);
