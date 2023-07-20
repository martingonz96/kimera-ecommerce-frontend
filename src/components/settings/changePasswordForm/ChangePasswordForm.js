import { Form } from "semantic-ui-react";
import styles from "./ChangePasswordForm.module.scss";
import { initialValues, validationSchema } from "./ChangePassword.form";
import { useFormik } from "formik";
import useAuth from "@/hooks/useContext";
import { User } from "@/api/user";

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, { password: values.password });
        logout();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Cambiar Password</label>
      <Form.Input
        name="password"
        type="password"
        placeholder="NuevaPassword"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        name="repeatPassword"
        type="password"
        placeholder="Repetir Password"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatPassword}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Cambiar
      </Form.Button>
    </Form>
  );
}
