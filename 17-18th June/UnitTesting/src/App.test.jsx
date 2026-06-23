import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe("App", () => {
  test("should show APP", () => {
    render(<App />);

    const textElement = screen.getByText(/App/i);

    expect(textElement).toBeInTheDocument();
  });
});
