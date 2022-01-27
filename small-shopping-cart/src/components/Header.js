import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1> Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a style={{color :'blue'}} href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a style={{color :'blue', marginLeft: '10px'}} href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
