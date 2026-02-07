import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landingPage/Home/Hero";

describe("Hero component", () => {
  it("renders the hero image", () => {
    render(<Hero />);
    const image = screen.getByAltText("HomeHero Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "media/images/homeHero.png");
  });

  it("renders the heading and description", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /invest in everything/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more./i)
    ).toBeInTheDocument();
  });

  it("renders the signup button with correct link", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /signup for free/i });
    expect(button).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /signup for free/i });
    expect(link).toHaveAttribute("href", "../Signup");
  });
});