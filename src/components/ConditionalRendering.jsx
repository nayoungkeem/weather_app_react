import React from 'react';

function ConditionalRendering() {
  const num = 11;
  const str = '';

  if (num % 2 === 0) {
    return <div>{num}은 짝수</div>;
  } else {
    return <div>{num}은 홀수</div>;
  }
}

export default ConditionalRendering;
