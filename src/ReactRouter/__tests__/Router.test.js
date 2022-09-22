import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactRouter from '../ReactRouter'
import { MemoryRouter } from 'react-router-dom'

describe('Router', () => {
  it('router test', () => {
    render(
      <MemoryRouter>
        <ReactRouter />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/asdsafasfasdsa']}>
        <ReactRouter />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});