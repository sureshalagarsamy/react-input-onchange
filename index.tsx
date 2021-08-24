import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App: React.FunctionComponent<{}> = () => {
  const [firstName, setFirstName] = useState<string>('');
  const updateMyInput = e => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <input value={firstName} onChange={updateMyInput} />
      <p>{firstName}</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
