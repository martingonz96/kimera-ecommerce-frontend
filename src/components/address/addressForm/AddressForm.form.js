import { add } from "lodash";
import * as Yup from "yup";

export function initialValues(address) {
  return {
    title: address ? address.title : "",
    name: address ? address.name : "",
    address: address ? address.address : "",
    city: address ? address.city : "",
    state: address ? address.state : "",
    postal_code: address ? address.postal_code : "",
    phone: address ? address.phone : "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("Title is required"),
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postal_code: Yup.string().required("Postal Code is required"),
    phone: Yup.number().required("Phone is required"),
  });
}
