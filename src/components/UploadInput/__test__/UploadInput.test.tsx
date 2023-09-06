import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from '../__stories__/UploadInput.stories';
import { composeStories } from '@storybook/react';

const { Base } = composeStories(stories);

describe('UploadInput', () => {
  it('renders the input correctly', () => {
    render(<Base />);
    const input = screen.getByTestId('upload-input');
    expect(input).toBeInTheDocument();
  });

  it('upload correctly', async () => {
    render(<Base />);
    const uploadInput: HTMLInputElement = screen.getByTestId(
      'upload-native-input',
    );
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    await userEvent.upload(uploadInput, file);

    if (uploadInput && uploadInput.files) {
      expect(uploadInput?.files[0]).toStrictEqual(file);
      expect(uploadInput?.files.item(0)).toStrictEqual(file);
      expect(uploadInput?.files).toHaveLength(1);
    }
  });
});
