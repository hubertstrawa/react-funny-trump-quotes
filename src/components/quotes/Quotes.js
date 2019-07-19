import React, { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import Spinner from '../layout/Spinner';
import { Divider, Transition } from 'semantic-ui-react';

const Quotes = (quotes, count, loading) => {
  if (quotes.quotes === undefined) {
    return <h1>There aren't any</h1>;
  } else {
    return (
      <Transition visible='false' animation='scale' duration={500}>
        <div>
          {quotes.quotes.map(quote => (
            <QuoteItem key={quote.quote_id} quote={quote} />
          ))}
        </div>
      </Transition>
    );
  }
};

const quoteStyle = {
  display: 'flex',
  flexDirection: 'column'
};

export default Quotes;
