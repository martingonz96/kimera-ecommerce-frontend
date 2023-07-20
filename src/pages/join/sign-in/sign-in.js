
import JoinLayout from '@/layout/JoinLayout/JoinLayout'
import styles from './sign-in.module.scss'
import Link from 'next/link'
import LoginForm from '@/components/auth/loginForm/LoginForm'

function signInPage() {
  return (
    <>
    <JoinLayout>
    <div className={styles.signIn}>
    <h3>Iniciar sesión</h3>

    <LoginForm />
    <div className={styles.actions}>
    <Link href='/join/sign-up'>No tienes cuenta? Registrate</Link>
    </div>
    </div>
    </JoinLayout>
    </>

  )
}

export default signInPage