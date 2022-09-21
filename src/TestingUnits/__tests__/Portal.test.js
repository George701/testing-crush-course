import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Portal'



describe("Portal", () => {
  const handleClose = jest.fn();
  const testId = 'my-portal';

  it('modal shows the children and a close button', () => {
    render(
      <Modal onClose={handleClose}>
        <div data-testid={testId}>My Portal</div>
      </Modal>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(handleClose).toBeCalledTimes(1);
  });

  it('should be unmounted', () => {
    const { unmount } = render(
      <Modal>
        <div data-testid={testId}>My Portal</div>
      </Modal>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    unmount();
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });
});