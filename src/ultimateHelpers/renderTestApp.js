import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {createReduxStore} from '../store';
import {MemoryRouter } from "react-router-dom";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.initialRoute]}>
        {component}
      </MemoryRouter>
    </Provider>
  );
}