import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import _ from 'lodash';


import {createPost} from '../actions/index';

const FIELDS = {
    title: {
      type: 'input',
      label: 'Title for Post'
    },
    categories:{
      type: 'input',
      label: 'Enter some Categories'
    },
    content: {
      type: 'textarea',
      label: 'Contents'
    }
};


class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      //navigate the user to the index via the router & context.push
      this.context.router.push('/');
    });
  };

  renderField(fieldConfig, field){
    const fieldHelper = this.props.fields[field];

    return(
      <div key={fieldHelper.id} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ?' has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type='text' className='form-control' {...fieldHelper}/>
        <div key={fieldHelper.name} className='text-help'>
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  };

  render() {
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>
          Cancel
        </Link>
      </form>
    )
  };
};

function validate(values){
  const errors = {};

  _.each(FIELDS, (type, field)=>{
    if(!values[field]){
      errors[field] = `Enter a ${field}`
    }
  });
  return errors;
};


//connect first arguement is mapstatetoprops, second is mapDispatchToProps, redux forms first is formconfig, then the two from connect
export default reduxForm({form: 'PostsNew',
                          fields: _.keys(FIELDS),
                          validate
                          }, null, {createPost})(PostsNew);
