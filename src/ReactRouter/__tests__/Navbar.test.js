import { renderWithRouter } from '../helpers/renderWithRouter';
import { screen } from '@testing-library/react';
import Navbar from '../navbar/Navbar';
import userEvent from "@testing-library/user-event";

describe('Navbar', () => {
  it('redirect to about page', () => {
    renderWithRouter(<Navbar />);

    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('redirect to users page', () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId('users-link');

    userEvent.click(usersLink)
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });

  it('redirect to main page', () => {
    renderWithRouter(<Navbar />, '/users');

    const mainLink = screen.getByTestId('main-link');

    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});