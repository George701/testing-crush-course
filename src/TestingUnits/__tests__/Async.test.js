import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async, { URL } from '../Async';

jest.mock("axios");

const hits = [
  {
    objectID: "1",
    title: "React"
  },
  {
    objectID: "2",
    title: "Angular"
  }
]

describe('Async', () => {
  it('fetches news from API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits }}));
    render(<Async />);
    userEvent.click(screen.getByRole("button"));
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(hits.length);

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith(`${URL}?query=React`);
  });

  it('fetches news from API and reject', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<Async />);
    userEvent.click(screen.getByRole("button"));
    const message = await screen.findByTestId("error-msg");
    expect(message).toBeInTheDocument();
  });

  it('fetches news from API with act()', async () => {
    const promise = Promise.resolve({ data: { hits }})
    axios.get.mockImplementationOnce(() => promise);
    render(<Async />);
    userEvent.click(screen.getByRole("button"));
    await act(() =>  promise);
    expect(screen.getAllByRole('listitem')).toHaveLength(hits.length);
  });
});