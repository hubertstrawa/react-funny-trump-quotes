import React from 'react';
import { Message } from 'semantic-ui-react';

const QuoteItem = ({ quote: { value, tags } }) => {
  return (
    <Message floating style={quoteStyle}>
      <p>{value}</p>
      <p style={{ fontSize: '0.7rem' }}>
        tags: <strong>{tags}</strong>
      </p>
    </Message>
  );
};

const quoteStyle = {
  width: '80%',
  margin: '1.5rem auto'
};

export default QuoteItem;
