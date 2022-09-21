import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Need to find an element - getBy
// Need to show that element is not in the DOM - queryBy
// Need to show from start there is no element, but 
// after async function it appears - findBy

describe('App', () => {
  

  // test('renders learn react link', () => {
  //   render(<App />);
  //   // screen.debug();
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // it('testing through snapshot', () => {
  //   const { asFragment } = render(<App />);
  //   expect(asFragment(<App />)).toMatchSnapshot();
  // });

  // it('renders App component', () => {
  //   render(<App />);
  //   expect(screen.getByText(/Search:/i)).toBeInTheDocument();
  // })

  // it('searches by role', () => {
  //   render(<App />);
  //   expect(screen.getByRole("textbox")).toBeInTheDocument();
  // })
  
  // it('searches by label', () => {
  //   render(<App />);
  //   expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  //   // expect(screen.getByLabelText(/search/i)).toBeRequired();
  //   expect(screen.getByLabelText(/search/i)).toBeEmpty();
  //   expect(screen.getByLabelText(/search/i)).toHaveAttribute('id');
  //   expect(screen.getByLabelText(/search/i)).not.toBeRequired()
  // })

  // it('searches by placeholder', () => {
  //   render(<App />);
  //   expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();
  // })

  // it('searches by altText', () => {
  //   render(<App />);
  //   expect(screen.getByAltText("search image")).toBeInTheDocument();  
  //   expect(screen.getByAltText("search image")).toHaveClass('img');
  // })

  // it('searches by display value', () => {
  //   render(<App />);
  //   // only for default values
  //   expect(screen.getByDisplayValue("")).toBeInTheDocument();
  // })

  // it('searches for react', () => {
  //   render(<App />);
  //   expect(screen.queryByText(/Searches for React/i)).toBeNull();
  // })

  // it('find user', async () => {
  //   render(<App />);
  //   expect(screen.queryByText(/Logged in as/i)).toBeNull();
  //   // screen.debug();
  //   expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
  //   // screen.debug();
  // })

    it('renders App component using fireEvent', async () => {
      render(<App />);
      await screen.findByText(/Logged in as/i);
      expect(screen.queryByText(/Searches for React/)).toBeNull();
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: "React" }
      });
      expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
    });

    it('renders App component using userEvent', async () => {
      render(<App />);
      await screen.findByText(/Logged in as/i);
      expect(screen.queryByText(/Searches for React/)).toBeNull();
      userEvent.type(screen.getByRole("textbox"), "React");
      expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
    });
});

describe("events", () => {
  it("checkbox click with fireEvent", () => {
    const handleChange = jest.fn();
    const { container } = render(<input type='checkbox' onChange={handleChange} />)
    // eslint-disable-next-line testing-library/no-node-access
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toBeCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("checkbox click with userEvent", () => {
    const { container } = render(<input type='checkbox'/>)
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    // There can be named keys that were used while action
    // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true});
    expect(checkbox).toBeChecked();
  });

  it("double click", () => {
    const handleChange = jest.fn();
    const { container } = render(<input type='checkbox' onChange={handleChange}/>)
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(handleChange).toBeCalledTimes(2);
  });

  it('input focus', () => {
    const { getByTestId } = render(<input type='text' data-testid="simple-input" />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('focus', () => {
    const { getAllByTestId } = render(
      <div>
        <input data-testid="element" type="checkbox" />
        <input data-testid="element" type="radio" />
        <input data-testid="element" type="number" />
      </div>
    );

    const [checkbox, radio, number] = getAllByTestId('element');
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
    userEvent.tab();
    expect(number).toHaveFocus();
  });

  it("select option", () => {
    const { selectOptions, getByRole, getByText } = render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    userEvent.selectOptions(getByRole("combobox"), "1");
    expect(getByText("A").selected).toBeTruthy();

    userEvent.selectOptions(getByRole("combobox"), "2");
    expect(getByText("B").selected).toBeTruthy();
    expect(getByText("A").selected).toBeFalsy();
  });
});


