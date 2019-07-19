import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

const Search = props => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.search(text);
    setText('');
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <Input
          style={{ marginBottom: '0.8rem' }}
          fluid
          placeholder='Search'
          value={text}
          onChange={onChange}
        />
        <Button fluid type='submit'>
          Click Here
        </Button>
      </form>
    </div>
  );
};

export default Search;
