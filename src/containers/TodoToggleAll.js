// @flow
import React from 'react';
import { connect } from 'react-redux';
import {toggleAll} from '../actions'

const TodoToggleAll = ({dispatch}) => (
  <div>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={(e) => dispatch(toggleAll(e.target.checked))}
    />
    <label htmlFor="toggle-all" />
  </div>
);

export default connect()(TodoToggleAll)
