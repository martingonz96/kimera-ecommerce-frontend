import { useFormik } from "formik"
import { Form } from "semantic-ui-react"
import { useRouter } from "next/router"
import { initialValues, validationSchema } from "./LoginForm.form"
import { Auth } from "@/api/auth"
import useAuth from "@/hooks/useContext"

const auth= new Auth()



function LoginForm() {


 const { login } = useAuth()
  
  
  const router = useRouter()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValues) => {
            try {
            const res = await auth.login(formValues)
              login(res.jwt)
              // router.push('/')
            } catch (error) {
              console.log(error)
            }
        }
    })
  return (
    <Form
    onSubmit={formik.handleSubmit}>
        <Form.Input name='identifier' type="text" placeholder='Email or username' value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier} />
        <Form.Input name='password' type="password" placeholder='Password' value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Login</Form.Button>

    </Form>
  )
}

export default LoginForm