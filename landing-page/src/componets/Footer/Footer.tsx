import Style from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={Style.formContainer}>
        <p className={Style.signUp}>Sign Up for News</p>
        <div>
          <input placeholder="email" type="email" />
        </div>

        <div className={Style.btnContainer}>
          <button className={Style.btn}>Receive Updates</button>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.logoContainer}>
          <div className={Style.seven}>7</div>
          <div className={Style.logo}>ROCK</div>
          <div className={Style.seven}>7</div>
        </div>
        <p>© 2023 Ankit</p>
      </div>
    </>
  );
};
export default Footer;
