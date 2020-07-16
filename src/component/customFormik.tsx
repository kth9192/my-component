import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Select, { ValueType } from 'react-select';

function CustomFormik() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleSelect = (
    test: any,
    handleChange: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    console.log(test.value);
    handleChange('test', test.value);
  };

  return (
    <Cover>
      <Formik
        initialValues={{ test: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Select
              value={options}
              onChange={(e) => handleSelect(e, setFieldValue)}
              options={options}
            />

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Cover>
  );
}

const Cover = styled.div`
  display: fle;
`;

export default CustomFormik;
