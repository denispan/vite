import {FormLogin} from './components/form-login/form-login.tsx';

const App = () => {
  console.log(process.env.NODE_ENV);
  return <FormLogin/>;
};

export {App};
