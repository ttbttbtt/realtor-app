import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
// import { RegistrationInfo } from "../../components/RegistarationInfo/RegistrationInfo";
import { Heading } from "../../components/Typografy/Heading";
// import { StyledLink } from "../../components/Typografy/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  useremail: string;
  userpassword: string;
}

const registrationFormSchema = yup.object({
  useremail: yup
    .string()
    .email()
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(8, "Пароль должен содержать не менее 8 символов!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);
  console.log('state-login: ', user)
  const [loginUser, { data: userData }] = useLoginUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
    // dispatch(changeUser(mockUser));
    console.table(data);
    // localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem(data.useremail, JSON.stringify(data))
    navigate("/main");
    };

  // useEffect(() => {
  //   console.log("userData: ", userData);

  //   if (userData?.user_id) {
  //     navigate("/main");
  //     localStorage.setItem('userData', JSON.stringify(userData))
  //     // localStorage.setItem('login', JSON.stringify(data))
  //   }
  // }, [userData, navigate]);

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            disabled={!!Object.keys(errors).length}
            isPrimary
            type="submit"
            buttonText="Войти"
          />
        </form>
        {/* <RegistrationInfo
          span="У вас нет аккаунта?"
          linktext="Зарегистрироваться"
          to="/rega"
        /> */}
      </StyledLoginPage>
    </Container>
  );
};
