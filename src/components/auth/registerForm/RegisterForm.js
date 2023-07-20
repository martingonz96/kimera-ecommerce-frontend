import { useFormik } from "formik"
import { Form } from "semantic-ui-react"
import { initialValues, validationSchema } from "./RegisterForm.form"
import { Auth } from "@/api/auth"
import { useRouter } from "next/router"

const auth = new Auth();

function RegisterForm() {

  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit : async (formValues)=> {
      try {
        await auth.register(formValues)
        console.log("Todo OK")
        router.push('/join/sign-in')
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <Form
    onSubmit={formik.handleSubmit}
    >
        <Form.Group widths='equal'>
        <Form.Input name='email' type="email" placeholder='Email' value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
        <Form.Input name='username' type="text" placeholder='Nombre Usuario' value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input name='name' type="text" placeholder="Nombre y Apellido" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
            <Form.Input name='password' type="password" placeholder='Escribe tu password' value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        </Form.Group>
        <Form.Button 
        type="submit"
        fluid
        loading= {formik.isSubmitting}
        >Registrarse</Form.Button>
    </Form>
  )
}

export default RegisterForm