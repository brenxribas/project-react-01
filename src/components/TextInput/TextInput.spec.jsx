import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";


describe('<Posts />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput searchValue={'testando'} handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each keypressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'O valor'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'O valor';
    userEvent.type(input, value);
    
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={''} />);
    expect(container).toMatchSnapshot();
  });

});