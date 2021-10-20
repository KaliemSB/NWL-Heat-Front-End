import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';

export const LoginBox = () => {
  const { signInUrl, user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  });

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem.</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  );
};