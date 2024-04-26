import css from './RegistrationPage.module.css';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div>
      <RegistrationForm />
      <p className={css.tooltip}>
        Already have an account?{' '}
        <Link to={'/login'} className={css.link}>
          Sign In.
        </Link>
      </p>
    </div>
  );
}
