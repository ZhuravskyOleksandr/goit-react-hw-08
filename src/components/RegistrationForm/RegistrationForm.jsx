import css from './RegistrationForm.module.css';
import clsx from 'clsx';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegistrationSchema,
  registerationFormInitValues,
} from '../../constants';

export default function RegistrationForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={registerationFormInitValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {formikValid => {
        return (
          <Form className={css.form}>
            <div>
              <label className={css.formLabel} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={clsx(css.formField, {
                  [css.formFieldWarning]:
                    formikValid.touched.name && formikValid.errors.name,
                })}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.warning}
                name="name"
                component="span"
              />
            </div>

            <div>
              <label className={css.formLabel} htmlFor={emailFieldId}>
                Email
              </label>
              <Field
                className={clsx(css.formField, {
                  [css.formFieldWarning]:
                    formikValid.touched.email && formikValid.errors.email,
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
                    formikValid.touched.password && formikValid.errors.password,
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
              Sign Up
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
