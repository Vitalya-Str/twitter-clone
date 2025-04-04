import { Formik } from "formik";
import s from "./AddFormSignIn.module.css";

export const AddFormSignIn = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors: { email?: string; password?: string } = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
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
        /* and other goodies */
      }) => (
        <form className={s.wrapper} onSubmit={handleSubmit}>
          <div>Введите E-mail</div>

          <input
            className={s.input}
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <div>Введите пароль</div>
          <input
            className={s.input}
            placeholder="Введите пароль"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button className={s.button} type="submit" disabled={isSubmitting}>
            Зарегистрироваться
          </button>
        </form>
      )}
    </Formik>
  </div>
);
