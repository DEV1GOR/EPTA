import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 1080px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const RightPanel = styled.div`
  flex: 1;
  background-color: #e6f2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const WelcomeText = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RegisterText = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImagePlaceholder = styled.div`
  font-size: 60px;
  color: #a0c7e8;
`;
