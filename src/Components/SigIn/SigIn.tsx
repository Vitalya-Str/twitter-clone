import XIcon from "@mui/icons-material/X";
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
          <button>E-Mail</button>
          <button>Passwod</button>
          <div style={{ marginBottom: '20px' }}>----------ИЛИ----------</div>
          <button>Зарегестрироваться</button>
        </div>
      </div>
    </div>
  );
};
