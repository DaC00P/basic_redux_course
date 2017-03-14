import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={'posts/'+post.id}>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>
              {post.title}
            </strong>
          </Link>
        </li>
      );
    });
  };

  render(){
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    return(
      <div>
        <div className='test-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add A Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }

};

//the {fetchPosts} in the connect statement below is syntactic sugar for the below method.
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts}, dispatch);
// }

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
