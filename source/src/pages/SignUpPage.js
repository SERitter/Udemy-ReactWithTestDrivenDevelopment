import { Component } from "react";

// const SignUpPage = () => {
//   return <h1>Sign Up</h1>;
// };

class SignUpPage extends Component {
  state = {
    // disabled: true,
  };

  onChangePassword = (event) => {
    const currentValue = event.target.value;
    this.setState({
      password: currentValue,
      // disabled: currentValue !== this.state.passwordConfirmation,
    });
  };

  onChangePasswordConfirmation = (event) => {
    const currentValue = event.target.value;
    this.setState({
      passwordConfirmation: currentValue,
      // disabled: currentValue !== this.state.password,
    });
  };

  render() {
    // let disabled = false;
    // setTimeout(() => {
    //   console.log('updating disabled');
    //   // disabled = true;
    //   this.setState({disabled: false});
    // }, 1000);

    let disabled = true;
    const { password, passwordConfirmation } = this.state;
    if (password && passwordConfirmation) {
      if (password.length >= 6) disabled = password !== passwordConfirmation;
    }

    return (
      <div>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" />
        <label htmlFor="email">E-mail</label>
        <input id="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={this.onChangePassword} />
        <label htmlFor="passwordConfirm">Password Confirmation</label>
        <input
          id="passwordConfirm"
          type="password"
          onChange={this.onChangePasswordConfirmation}
        />
        <button disabled={disabled}>Sign Up</button>
      </div>
    );
  }
}

export default SignUpPage;
