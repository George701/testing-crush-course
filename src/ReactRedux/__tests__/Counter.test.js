import React from 'react'
import Counter from '../Counter'
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../helpers/renderWithRedux';

describe('Counter', () => {
  it('renders value', () => {
    renderWithRedux(<Counter />);

    expect(screen.getByTestId('value-title')).toHaveTextContent('0')
  });

  it('increments value', () => {
    renderWithRedux(<Counter />, {
      counter: { value: 10 }
    });

    const incrementBtn = screen.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  });

  it('decrements value', () => {
    renderWithRedux(<Counter />, {
      counter: { value: 100 }
    });

    const decrementBtn = screen.getByTestId('decrement-btn');
    userEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('99')
  });
})