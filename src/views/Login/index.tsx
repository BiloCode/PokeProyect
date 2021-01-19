import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./index.scss";

import RootLayout from "components/layouts/RootLayout";
import DarkBackgroundLayout from "components/layouts/DarkBackgroundLayout";
import Input from "components/common/Input";
import BigTitle from "components/common/Title/BigTitle";
import Button from "components/common/Button";

const Login : FC<RouteComponentProps> = () => (
  <RootLayout>
    <DarkBackgroundLayout>
      <div className="login-container">
        <BigTitle text='Iniciar Sesión Pokemon' />
        <form action="" className="form-container">
          <Input labelText='Nombre de usuario'/>
          <Input labelText='Contraseña' type='password' />
          <Button text='Iniciar Sesión' />
        </form>
      </div>
    </DarkBackgroundLayout>
  </RootLayout>
);

export default Login;