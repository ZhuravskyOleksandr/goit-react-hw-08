import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Invalid phone number'
    )
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Must be no more than 50 characters long')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <div>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.formField}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.warning} name="name" component="span" />
        </div>

        <div>
          <label className={css.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.formField}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.warning}
            name="number"
            component="span"
          />
        </div>

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
