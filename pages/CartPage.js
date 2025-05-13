return React.createElement(
    'div',
    { className: 'cart-page' },
    [
      React.createElement('h2', { key: 'title' }, 'Your Shopping Cart'),
      React.createElement(
        'ul',
        { key: 'list' },
        cartItems.map((item) =>
          React.createElement(
            'li',
            { key: item.id },
            [
              React.createElement('img', { src: item.image, alt: item.title }),
              React.createElement('div', {}, [
                React.createElement('h4', {}, item.title),
                React.createElement('p', {}, `$${item.price.toFixed(2)} x ${item.quantity}`),
                React.createElement('div', { className: 'quantity-controls' }, [
                  React.createElement('button', {
                    onClick: () => updateQuantity(item.id, -1)
                  }, '-'),
                  React.createElement('span', {}, item.quantity),
                  React.createElement('button', {
                    onClick: () => updateQuantity(item.id, 1)
                  }, '+')
                ]),
                React.createElement('button', {
                  className: 'remove-btn',
                  onClick: () => removeFromCart(item.id)
                }, 'Remove')
              ])
            ]
          )
        )
      ),
      React.createElement('h3', { key: 'total' }, `Total: $${total.toFixed(2)}`),
      React.createElement(
        'button',
        {
          key: 'checkout',
          className: 'checkout-btn',
          onClick: function () {
            alert('Checkout Complete!');
          }
        },
        'Proceed to Checkout'
      )
    ]
  ); // ✅ Make sure this closing parenthesis is present!
  