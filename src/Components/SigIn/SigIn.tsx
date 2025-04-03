import XIcon from "@mui/icons-material/X";
import Email from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import RegistIcon from "@mui/icons-material/AppRegistration";
import s from "./SigIn.module.css";
import { AddFormSignIn } from "../AddFormSignIn/AddFormSignIn";

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
            <button className={s.twitButton}>Password</button>
          </div>

          <div style={{ marginBottom: "20px" }}>----------ИЛИ----------</div>
          <div className={s.buttonBox}>
            <RegistIcon className={s.buttonIcon} />
            <a href="#openModal">
              <button className={s.twitButton}>Зарегистрироваться</button>
            </a>
          </div>
        </div>
      </div>
      <div id="openModal" className={s.modal}>
        <div className={s.modal_dialog}>
          <div className={s.modal_content}>
            <div className={s.modal_header}>
              <div className={s.modalIcon}>
                <XIcon />
              </div>
              <a href="#close" title="Close" className={s.close}>
                ×
              </a>
            </div>

            <div className={s.modal_body}>
              <h1 className={s.modal_title}>Создайте учетную запись</h1>
              <AddFormSignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
