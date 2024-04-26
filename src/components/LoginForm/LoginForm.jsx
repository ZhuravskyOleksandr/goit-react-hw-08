import css from './LoginForm.module.css';
import clsx from 'clsx';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { LoginSchema, loginFormInitValues } from '../../constants';

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={loginFormInitValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {formikData => {
          return (
            <Form className={css.form}>
              <div>
                <label className={css.formLabel} htmlFor={emailFieldId}>
                  Email
                </label>
                <Field
                  className={clsx(css.formField, {
                    [css.formFieldWarning]:
                      formikData.touched.email && formikData.errors.email,
                  })}
                  type="email"
                  name="email"
                  id={emailFieldId}
                />
                <ErrorMessage
                  className={css.warning}
                  name="email"
                  component="span"
                />
              </div>

              <div>
                <label className={css.formLabel} htmlFor={passwordFieldId}>
                  Password
                </label>
                <Field
                  className={clsx(css.formField, {
                    [css.formFieldWarning]:
                      formikData.touched.password && formikData.errors.password,
                  })}
                  type="password"
                  name="password"
                  id={passwordFieldId}
                />
                <ErrorMessage
                  className={css.warning}
                  name="password"
                  component="span"
                />
              </div>

              <button className={css.formBtn} type="submit">
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
