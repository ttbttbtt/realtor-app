import { StyledRegistrationInfo } from "./RegistrationInfo.style";
import { StyledLink } from "../Typografy/StyledLink";

interface RegistrationInfoProps {
  span: string
  linktext: string
  to: string
}

export const RegistrationInfo = ({span, linktext, to}: RegistrationInfoProps) => {
  return (
    <StyledRegistrationInfo>
      <span>
        {/* У вас нет аккаунта? */}
        {span}
        {/* <a href="#">Зарегистрироваться</a> */}
        <StyledLink to={to} LinkText={linktext} />
      </span>
    </StyledRegistrationInfo>
  );
};
