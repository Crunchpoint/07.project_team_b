import React from 'react'
import styles from "@/styles/login/Login.module.scss"
import GoogleLogin from 'react-google-login';
import Google from './Google';

const Login = () => {
  return (
    <div className={styles.login}>
        <div className={styles.main}>
            <img className={styles.main_img} src="../src/img/login/login_bg.png" alt='토토로'/>
            <div className={styles.text}>
                <p className={styles.text_01}>GHIBLI</p>
                <p className={styles.text_02}>studio</p>
                <div className={styles.text_circle}></div>
            </div>
            <div className={styles.button}>
                <button className={styles.kakao}>
                    <img className={styles.kakao_img} src="../src/img/login/kakao_logo.png" alt='카카오로고'/>
                    <div className={styles.kakao_text}>카카오로 쉬운시작</div>
                </button>
                <Google/>
            </div>
        </div>
    </div>
  )
}

export default Login