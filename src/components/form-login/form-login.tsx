import {FormEvent} from 'react';
import {Container} from '../container/container.tsx';
import styles from './styles.module.scss';

const FormLogin = () => {
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container center>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login form</h2>
        <form
          className={styles.form}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div>
            <label htmlFor="email" className="visually-hidden">E-mail</label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input
              id="password"
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
      </div>
    </Container>

  );
};

export {FormLogin};
