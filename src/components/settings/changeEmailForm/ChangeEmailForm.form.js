import * as Yup from "yup";

export function initialValues(email) {
  return {
    email: email,
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    repeatEmail: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .oneOf([Yup.ref("email")], "Emails must match"),
  });
}
