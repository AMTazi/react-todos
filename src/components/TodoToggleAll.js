// @flow
import React from 'react';

const TodoToggleAll = (props: { onToggleAll: () => void }) => (
  <div>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={props.onToggleAll}
    />
    <label htmlFor="toggle-all" />
  </div>
);

export default TodoToggleAll;
