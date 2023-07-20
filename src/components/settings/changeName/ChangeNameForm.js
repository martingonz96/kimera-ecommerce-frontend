import { Form } from "semantic-ui-react";
import styles from "./ChangeNameForm.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
import useAuth from "@/hooks/useContext";
import { User } from "@/api/user";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  console.log(user);

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, values);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y Apellido</label>

      <div className={styles.content}>
        <Form.Input
          name="firstname"
          placeholder="Nombre"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />

        <Form.Input
          name="lastname"
          placeholder="Apellidos"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Guardar
        </Form.Button>
      </div>
    </Form>
  );
}
