//
// Swiss QR Bill Generator
// Copyright (c) 2022 Manuel Bleichenbacher
// Licensed under MIT License
// https://opensource.org/licenses/MIT
//

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import { render } from './test-utils';


test('Navigation to about page works', async () => {
  render(<NavBar />);
  const user = userEvent.setup();

  const link = screen.getByRole('link', { name: 'navAbout' });

  await user.click(link);

  expect(window.location.pathname).toBe('/about');
});
