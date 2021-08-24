import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface IProps {
  firstName: string;
}

const App: React.FunctionComponent<IProps> = props => {
  const [firstName, setFirstName] = useState<string>(props.firstName);
  const updateMyInput = e => {
    setFirstName(e.target.value);
    // props.firstName = e.target.value;
  };
  return (
    <div>
      <input value={firstName} onChange={updateMyInput} />
      <p>{firstName}</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
