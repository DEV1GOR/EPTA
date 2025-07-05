import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  Container,
  LoginBox,
  LeftPanel,
  RightPanel,
  Logo,
  WelcomeText,
  Form,
  Label,
  Input,
  Button,
  RegisterText,
  RegisterLink,
  ImagePlaceholder,
} from "../styles/LoginPage.styles";

import logoImage from "../img/eptaLogo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("jwt_token", token);

      console.log("Login bem-sucedido! Token salvo no localStorage.");
      navigate("/dashboard");
    } catch (err) {
      console.error("Erro no login:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(
          "Erro ao tentar logar. Verifique suas credenciais e tente novamente."
        );
      }
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftPanel>
          <Logo src={logoImage} alt="EPTA Tecnologia" />
          <WelcomeText>Bem-vindo de volta! Insira seus dados.</WelcomeText>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p
                style={{ color: "red", marginBottom: "15px", fontSize: "14px" }}
              >
                {error}
              </p>
            )}

            <Button type="submit">Entrar</Button>
          </Form>

          <RegisterText>
            Não tem uma conta?{" "}
            <RegisterLink to="/register">
              Cadastre-se gratuitamente!
            </RegisterLink>
          </RegisterText>
        </LeftPanel>
        <RightPanel>
          <ImagePlaceholder>🖼️</ImagePlaceholder>
        </RightPanel>
      </LoginBox>
    </Container>
  );
}

export default LoginPage;
