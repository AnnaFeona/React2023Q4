import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved
// import '@testing-library/jest-dom/extend-expect';
// import { cleanup, fireEvent } from '@testing-library/react';

// import { userEvent } from '@testing-library/user-event';
import { Button, ButtonProps } from './button';

const buttonTest = ({ ...props }: ButtonProps) => {
  render(<Button {...props} />);

  return screen.getByRole('button');
};

describe('button click', () => {
  it('should be rendered ', async () => {
    const switchBtn = buttonTest({ title: 'click' });

    expect(screen.getByRole('button'));
    expect(switchBtn).toHaveProperty('disabled');
  });
});
