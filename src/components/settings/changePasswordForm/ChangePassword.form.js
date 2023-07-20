import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("Password is required"),
    repeatPassword: Yup.string()
      .required("Repeat password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
}
