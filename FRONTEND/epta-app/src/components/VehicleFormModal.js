import React, { useState } from "react";
import api from "../services/api";

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalMainTitle,
  ModalSubtitle,
  CarIcon,
  Form,
  Label,
  Input,
  SubmitButton,
  MessageContainer,
  ErrorMessage,
  SuccessMessage,
} from "../styles/VehicleFormModal.styles";

function VehicleFormModal({ isOpen, onClose, onSave, vehicleData }) {
  const [name, setName] = useState(vehicleData ? vehicleData.name : "");
  const [plate, setPlate] = useState(vehicleData ? vehicleData.plate : "");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const data = { name, plate };
      let response;

      if (vehicleData && vehicleData.id) {
        response = await api.put(`/vehicles/${vehicleData.id}`, data);
        setMessage("Veículo atualizado com sucesso!");
      } else {
        response = await api.post("/vehicles", data);
        setMessage("Veículo cadastrado com sucesso!");
      }

      onSave(response.data);

      if (!vehicleData) {
        setName("");
        setPlate("");
      }

      setTimeout(() => {
        onClose();
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error("Erro ao salvar veículo:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(`Erro: ${error.response.data.message}`);
      } else {
        setMessage("Erro ao salvar veículo. Tente novamente.");
      }
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ModalMainTitle>Cadastrar</ModalMainTitle>
        <ModalSubtitle>
          {vehicleData ? "Editar Veículo" : "Novo Veículo"}
        </ModalSubtitle>

        <CarIcon>🚗</CarIcon>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="vehicleName">Nome do veículo</Label>
          <Input
            id="vehicleName"
            type="text"
            placeholder="Digite o nome do veículo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label htmlFor="vehiclePlate">Placa</Label>
          <Input
            id="vehiclePlate"
            type="text"
            placeholder="Digite a placa do veículo"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            required
            maxLength="7"
          />

          <SubmitButton type="submit">
            {vehicleData ? "Salvar Edição" : "Criar Veículo"}
          </SubmitButton>
        </Form>

        {message && (
          <MessageContainer>
            {message.includes("Erro") ? (
              <ErrorMessage>{message}</ErrorMessage>
            ) : (
              <SuccessMessage>{message}</SuccessMessage>
            )}
          </MessageContainer>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}

export default VehicleFormModal;
