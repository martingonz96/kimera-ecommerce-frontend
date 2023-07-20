import { Form } from "semantic-ui-react";
import styles from "./ChangeEmailForm.module.scss";
import { useFormik } from "formik";
import useAuth from "@/hooks/useContext";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { User, updateUser } from "@/api/user";

export function ChangeEmailForm() {
  const userCtrl = new User();

  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.email),
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, { email: values.email });
        updateUser("email", values.email);
        formik.handleReset();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Cambiar email</label>
      <Form.Input
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repeatEmail"
        placeholder="Confirmar email"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Cambiar email
      </Form.Button>
    </Form>
  );
}
