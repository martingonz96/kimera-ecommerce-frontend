import JoinLayout from '@/layout/JoinLayout/JoinLayout';
import styles from './sign-up.module.scss';
import Link from 'next/link';
import RegisterForm from '@/components/auth/registerForm/RegisterForm';

export default function signUp() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
        
        <RegisterForm/>
        <div className={styles.actions}>
          <Link href='/join/sign-in'>Atras</Link>
        </div>
        </div>
      </JoinLayout>
    </>
  );
}