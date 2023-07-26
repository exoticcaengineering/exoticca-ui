import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  it('renders the input label', async () => {
    render(<Base />);
    const uploadInput: HTMLInputElement = screen.getByTestId(
      'upload-native-input',
    );
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    await userEvent.upload(uploadInput, file);

    // await waitFor(() =>
    //   fireEvent.change(uploadInput, {
    //     target: { files: [file] },
    //   }),
    // );
    // console.log(document);
    // const image = document.querySelector(
    //   "[test-dataid='upload-input']",
    // ) as HTMLInputElement;
    // // const submitButton = screen.getByTestId('upload-input-button');
    // // fireEvent.click(submitButton);

    const list = screen.getByTestId('upload-input-list');
    // console.log('button', uploadInput);
    if (uploadInput && uploadInput.files) {
      expect(uploadInput?.files[0]).toStrictEqual(file);
      expect(uploadInput?.files.item(0)).toStrictEqual(file);
      expect(uploadInput?.files).toHaveLength(1);
    }

    // expect(label).toBeInTheDocument();
  });

  // it('shows the input placeholder', () => {
  //   render(<Base />);
  //   const label = screen.getByPlaceholderText(/Placeholder/);
  //   expect(label).toHaveAttribute('placeholder');
  // });

  // it('render input completely rounded', () => {
  //   render(<Base />);
  //   const input = screen.getByTestId('input');
  //   expect(input).toHaveStyle('border-radius: 24px');
  // });

  // it('render input with left side rounded', () => {
  //   render(<LeftRounded />);
  //   const input = screen.getByTestId('input');
  //   expect(input).toHaveStyle('border-radius: 24px 0 0 24px');
  // });

  // it('render input with right side rounded', () => {
  //   render(<RightRounded />);
  //   const input = screen.getByTestId('input');
  //   expect(input).toHaveStyle('border-radius: 0 24px 24px 0');
  // });

  // it('render input without icon', () => {
  //   render(<WithoutIcon />);
  //   const icon = screen.queryByTestId('user-icon');
  //   expect(icon).not.toBeInTheDocument();
  // });

  // it('render read only input', () => {
  //   render(<ReadOnly />);
  //   const input = screen.getByRole('textbox');
  //   expect(input).toHaveAttribute('readonly');
  // });

  // it('render disabled input', () => {
  //   render(<Disabled />);
  //   const input = screen.getByRole('textbox');
  //   expect(input).toHaveAttribute('disabled');
  // });

  // it('writes some value into the input', () => {
  //   render(<Base />);
  //   const input = screen.getByRole('textbox');
  //   fireEvent.change(input, { target: { value: 'test' } });
  //   expect(input).toHaveValue('test');
  // });
});
