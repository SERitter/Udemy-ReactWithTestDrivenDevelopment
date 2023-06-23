import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
    });
    it("has username input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Username");
      expect(input).toBeInTheDocument();
    });
    it("has email input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("E-mail");
      expect(input).toBeInTheDocument();
    });
    it("has password input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input.type).toBe("password");
    });
    it("has password confirmation input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Confirmation");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password confirmation input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Confirmation");
      expect(input.type).toBe("password");
    });
    it("has sign-up button", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeInTheDocument();
    });
    it("has sign-up button disabled initially", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeDisabled();
    });
  });
  describe("Interactions", () => {
    it("enables the button when password and password confirmation fields match and are more than 5 characters", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      const passwordConfirmationInput = screen.getByLabelText(
        "Password Confirmation"
      );
      UserEvent.type(passwordInput, "P4ssword");
      UserEvent.type(passwordConfirmationInput, "P4ssword");
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeEnabled();
    });
    it("does not enable the button when password and password confirmation fields match and are less than 6 characters", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      const passwordConfirmationInput = screen.getByLabelText(
        "Password Confirmation"
      );
      UserEvent.type(passwordInput, "P4ss");
      UserEvent.type(passwordConfirmationInput, "P4ss");
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeDisabled();
    });
    it("sends the username, email and password to the backend after clicking the button", () => {
      render(<SignUpPage />);
      const usernameInput = screen.getByLabelText("Username");
      const emailInput = screen.getByLabelText("E-mail");
      const passwordInput = screen.getByLabelText("Password");
      const passwordConfirmationInput = screen.getByLabelText(
        "Password Confirmation"
      );
      UserEvent.type(usernameInput, "user1");
      UserEvent.type(emailInput, "user1@mail.com");
      UserEvent.type(passwordInput, "P4ssword");
      UserEvent.type(passwordConfirmationInput, "P4ssword");
      const button = screen.queryByRole("button", { name: "Sign Up" });
      UserEvent.click(button);
      
    });
  });
});
