import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Add() {
 async function addProducts(val) {
  const res = await fetch("http://localhost:7000/fff",{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(val)
  });
  const data = await res.json()
   return data 
  
 }


  return (
    <>
      <Formik
        initialValues={{ image: "", name: "", description: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required("Required"),
          name: Yup.string()
           
            .required("Required"),
          description: Yup.string()
            .required("Required"),
          price: Yup.string()
            
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
              addProducts(values)
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="image"> image</label>
            <input
              id="image"
              type="url"
              {...formik.getFieldProps("image")}
            />
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}

            <label htmlFor="name">name</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="description">description </label>
            <input id="description" type="description" {...formik.getFieldProps("description")} />
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}

            <label htmlFor="price"> price</label>
            <input
              id="price"
              type="number"
              {...formik.getFieldProps("price")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <button type="submit">add</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Add;
