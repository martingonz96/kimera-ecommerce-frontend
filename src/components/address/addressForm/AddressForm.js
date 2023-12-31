import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./AddressForm.form";
import { Address } from "@/api/address";
import useAuth from "@/hooks/useContext";

const addressCtrl = new Address();

export function AddressForm({
  onClose,
  openClose,
  onReload,
  addressId,
  address,
}) {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        if (addressId) {
          await addressCtrl.updateAddress(formValue, addressId);
        } else {
          await addressCtrl.addAddress(formValue, user.id);
        }
        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Titulo de nueva Direccion"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />

      <Form.Group widths="equal">
        <Form.Input
          name="name"
          placeholder="Nombre y Apellido"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="address"
          placeholder="Direccion"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="state"
          placeholder="Provincia"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input
          name="city"
          placeholder="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          placeholder="Codigo postal"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <Form.Input
          name="phone"
          placeholder="Telefono"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
