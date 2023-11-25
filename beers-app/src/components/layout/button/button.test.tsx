import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
  it('should be rendered ', () => {
    render(<Button title={'test'} />);
    const btn = screen.getByRole<HTMLButtonElement>('button');

    expect(btn).toHaveTextContent('test');
    userEvent.click(btn);
  });
});
