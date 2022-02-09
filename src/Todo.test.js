import React from "react";
import { render, screen,fireEvent} from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
  render(<Todo />);
});

it("matches snapshot", function() {

    // Object.defineProperty(window, "localStorage", {
    //     value: {
    //       getItem: jest.fn(() => null),
    //       setItem: jest.fn(() => null)
    //     },
    //     writable: true
    //   });
    
    const { asFragment } = render(<Todo />);

    // expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });


  it("runs the delete function on button click", function() {
    const removeMock = jest.fn();
    const { getByText,debug } = render(<Todo deleteTodo={removeMock} />);
    const deleteButton = getByText("❌");
    fireEvent.click(deleteButton);
    expect(removeMock).toHaveBeenCalled();
  });