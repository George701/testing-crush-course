import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, ConsumerComponent } from './Context'

describe("Context", () => {
  it("ConsumerComponent shows default value", () => {
    render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
  });

  it("ConsumerComponent toggle value", () => {
    render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/^Message:/)).toHaveTextContent("Message: Welcome!");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
  });
});