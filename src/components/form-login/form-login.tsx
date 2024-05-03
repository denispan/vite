import {FormEvent} from 'react';
import {Container} from '../container/container.tsx';

const FormLogin = () => {
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container center>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div>
          <label className="visually-hidden">E-mail</label>
          <input
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
        >
          Sign in
        </button>
      </form>
    </Container>

  );
};

export {FormLogin};
