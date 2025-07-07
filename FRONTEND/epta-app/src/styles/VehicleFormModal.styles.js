import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 576px) {
    padding: 25px;
    width: 95%;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #333;
  }

  @media (max-width: 576px) {
    font-size: 24px;
    top: 15px;
    right: 15px;
  }
`;

export const ModalMainTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-top: 0;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const CarIcon = styled.div`
  font-size: 60px;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #555;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 12px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 15px 20px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.1s ease;
  margin-top: 25px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    padding: 12px 15px;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const MessageContainer = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
`;

export const SuccessMessage = styled.p`
  color: #28a745;
  font-size: 14px;
`;
