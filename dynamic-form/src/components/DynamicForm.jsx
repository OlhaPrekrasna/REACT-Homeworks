import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstFieldValue = watch('firstField');
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const showSecondField = firstFieldValue && firstFieldValue.length >= 5;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label className={styles.label}>First Field</label>
      <input
        {...register('firstField', {
          required: 'First field is required',
          minLength: {
            value: 5,
            message: 'Minimum length is 5 characters',
          },
        })}
        className={styles.input}
      />
      {errors.firstField && (
        <p className={styles.error}>{errors.firstField.message}</p>
      )}

      {showSecondField && (
        <>
          <label className={styles.label}>Second Field</label>
          <input
            {...register('secondField', {
              required: 'Second field is required',
            })}
            className={styles.input}
          />
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </>
      )}

      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default DynamicForm;
