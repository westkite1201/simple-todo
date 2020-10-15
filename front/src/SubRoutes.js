import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import TodoContainer from './containers/TodoContainer';

export default () => {
  return (
    <Fragment>
      <Route exact path="/todo" component={TodoContainer} />
    </Fragment>
  );
};
