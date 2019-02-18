// @flow
import React from 'react';
import { connect } from 'react-redux';

const TodoToggleAll = ({dispatch}) => (
  <div>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={(e) => dispatch({type: "TOGGLE_ALL", completed: e.target.checked})}
    />
    <label htmlFor="toggle-all" />
  </div>
);

export default connect()(TodoToggleAll)
