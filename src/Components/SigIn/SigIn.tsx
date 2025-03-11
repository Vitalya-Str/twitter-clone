import XIcon from "@mui/icons-material/X";
import Email from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import RegistIcon from "@mui/icons-material/AppRegistration";
import s from "./SigIn.module.css";

export const SignIn = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.leftSide}>
        <XIcon className={s.Xicon} />
      </div>
      <div className={s.rightSide}>
        <h1>В курсе происходящего</h1>
        <h4>Присоединяйтесь сегодня.</h4>

        <div className={s.buttonElem}>
          <div className={s.buttonBox}>
            <Email className={s.buttonIcon} />
            <button className={s.twitButton}>E-Mail</button>
          </div>
          <div className={s.buttonBox}>
            <PasswordIcon className={s.buttonIcon} />
            <button className={s.twitButton}>Passwod</button>
          </div>

          <div style={{ marginBottom: "20px" }}>----------ИЛИ----------</div>
          <div className={s.buttonBox}>
            <RegistIcon className={s.buttonIcon} />
            <button className={s.twitButton}>Зарегестрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};
