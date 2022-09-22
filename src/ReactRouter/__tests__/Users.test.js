import { screen } from '@testing-library/react';
import Users from "../Pages/Users";
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithRouter } from '../helpers/renderWithRouter';


jest.mock('axios');

describe('Users', () => {
  let response;
  beforeEach(() => {
		response = {
			data: [
				{
					"id": 1,
					"name": "Leanne Graham",
				},
				{
					"id": 2,
					"name": "Ervin Howell",
				},
				{
					"id": 3,
					"name": "Clementine Bauch",
				},
			]
		}
  });

  afterEach(() => {
      jest.clearAllMocks();
  });

  test('renders users', async () => {
    axios.get.mockReturnValue(response);
    
		renderWithRouter(<Users/>)
    
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });

  test('redirects to detailed page', async () => {
    axios.get.mockReturnValue(response);
  
		renderWithRouter(
			null,
			'/users'
		);

    const users = await screen.findAllByTestId('user-item');
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-page-detailed')).toBeInTheDocument();
  });
})