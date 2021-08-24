import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App: React.FunctionComponent<{}> = () => {
  const [firstName, setFirstName] = useState('');
  const [tableData, setTableData] = useState(['a', 'b']);
  const updateMyInput = e => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <input value={firstName} onChange={updateMyInput} />
      {tableData.map((key, value) => {
        return <div key={value}>{key}</div>;
      })}
      <div>{firstName}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
