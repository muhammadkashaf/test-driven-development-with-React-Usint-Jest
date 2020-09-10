import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/world/i);
  expect(linkElement).toBeInTheDocument();
});



test("find hello in the documents", () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByText(/hello/i);
  expect(worldElement).toBeInTheDocument();
});



test("find input in the placeholder", () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByPlaceholderText(/email/i);
  expect(worldElement).toBeInTheDocument();
});

