import css from './LoginPage.module.css';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
      <p className={css.tooltip}>
        Don&apos;t have an account?{' '}
        <Link to={'/register'} className={css.link}>
          Sign Up.
        </Link>
      </p>
    </div>
  );
}
