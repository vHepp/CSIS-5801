/**
 * @jest-environment jsdom
 */
 import React, { useContext, useState } from 'react'
import { render, screen } from "@testing-library/react";
import Login from "../src/components/Login";
import { LogTimings } from 'concurrently';


// ensure use of jsdom testing environment
test('ensure tests are using correct testing environment', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

// test that the username displays
test("renders username field", () => {
    render(<Login />);

    // define the username field
    const username_field = screen.getByTestId("username-input");

    // ensure the username field is rendered on screen
    expect(username_field).toBeInTheDocument();
    expect(username_field).toHaveAttribute("type", "text");
});

test('send a username to the username field', () => {
    render(<App />);
    render(<Login />);
 
    const inputEl = screen.getByTestId("username-input");
    userEvent.type(inputEl, "ejgill");
 
    expect(screen.getByTestId("username-input")).toHaveValue("ejgill");
});

test('send a password to the password field', () => {
    render(<Login />);
 
    const inputEl = screen.getByTestId("password-input");
    userEvent.type(inputEl, "ejgill");
 
    expect(screen.getByTestId("password-input")).toHaveValue("notagoodpassword");
});
