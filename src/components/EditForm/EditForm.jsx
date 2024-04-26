import css from './EditForm.module.css';
import clsx from 'clsx';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { editContact } from '../../redux/contacts/operations';
import { EditSchema } from '../../constants';

export default function EditForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const contact = useSelector(selectModalData);

  function handleSubmit(values) {
    dispatch(
      editContact({
        id: contact.id,
        ...values,
      })
    );
    dispatch(closeModal());
  }

  return (
    <Formik
      initialValues={{
        name: contact.name,
        number: contact.number,
      }}
      onSubmit={handleSubmit}
      validationSchema={EditSchema}
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
              <label className={css.formLabel} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={clsx(css.formField, {
                  [css.formFieldWarning]:
                    formikValid.touched.number && formikValid.errors.number,
                })}
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

            <div>
              <button className={css.formBtn} type="submit">
                Save changes
              </button>
              <button
                className={css.formBtn}
                type="button"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
