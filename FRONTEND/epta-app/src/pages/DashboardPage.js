// frontend/epta-app/src/pages/DashboardPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import eptaLogoSrc from "../img/eptaLogo.png";

import VehicleFormModal from "../components/VehicleFormModal";

import {
  LayoutContainer,
  Sidebar,
  SidebarLogo,
  NavList,
  NavItem,
  NavLink,
  MainContent,
  Header,
  UserMenu,
  UserIcon,
  DropdownMenu,
  DropdownItem,
  PageContent,
  DashboardHeader,
  CardsContainer,
  Card,
  CardIcon,
  CardTitle,
  CardValue,
  ActionButton,
  TableContainer,
  VehicleTable,
  StatusIndicator,
  ActionButtonsContainer,
  ActionButtonIcon,
} from "../styles/DashboardPage.styles";

const ReportsContent = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>Página de Relatórios (Apenas Visual)</h2>
    <p>Esta página será desenvolvida futuramente.</p>
  </div>
);

function DashboardPage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("dashboard");

  const [dashboardData, setDashboardData] = useState({
    totalVehicles: 0,
    activeVehicles: 0,
    inactiveVehicles: 0,
  });
  const [vehicles, setVehicles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const dashboardResponse = await api.get("/dashboard");
      setDashboardData(dashboardResponse.data);

      const vehiclesResponse = await api.get("/vehicles");
      setVehicles(vehiclesResponse.data);
    } catch (error) {
      console.error("Erro ao buscar dados do dashboard ou veículos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  const handleRegisterVehicle = () => {
    setIsModalOpen(true);
    console.log("Botão Cadastrar Veículo clicado!");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchData();
  };

  const handleVehicleSaved = (newOrUpdatedVehicle) => {
    fetchData();
  };

  const handleEdit = (vehicleId) => {
    console.log("Editar veículo:", vehicleId);
  };
  const handleArchiveUnarchive = (vehicleId, currentStatus) => {
    console.log("Arquivar/Desarquivar veículo:", vehicleId, currentStatus);
  };
  const handleDelete = (vehicleId) => {
    console.log("Excluir veículo:", vehicleId);
  };

  const DashboardContent = (
    <>
      <DashboardHeader>
        <h1>Olá Admin,</h1>
        <p>Cadastre e gerencie seus veículos</p>
      </DashboardHeader>

      <CardsContainer>
        <Card>
          <CardIcon color="#007bff">🚗</CardIcon>
          <CardTitle>Total</CardTitle>
          <CardValue>{dashboardData.totalVehicles}</CardValue>
        </Card>
        <Card>
          <CardIcon color="#28a745">✅</CardIcon>
          <CardTitle>Ativos</CardTitle>
          <CardValue>{dashboardData.activeVehicles}</CardValue>
        </Card>
        <Card>
          <CardIcon color="#ffc107">💤</CardIcon>
          <CardTitle>Inativos</CardTitle>
          <CardValue>{dashboardData.inactiveVehicles}</CardValue>
        </Card>
      </CardsContainer>

      <ActionButton onClick={handleRegisterVehicle}>
        {" "}
        + Cadastrar Veículo{" "}
      </ActionButton>

      <TableContainer>
        <VehicleTable>
          <thead>
            <tr>
              <th>Nome do veículo</th>
              <th>Placa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.plate}</td>
                  <td>
                    <StatusIndicator status={vehicle.status} />
                    {vehicle.status === "ativo" ? "Ativo" : "Inativo"}
                  </td>
                  <td>
                    <ActionButtonsContainer>
                      <ActionButtonIcon onClick={() => handleEdit(vehicle.id)}>
                        ✏️
                      </ActionButtonIcon>{" "}
                      <ActionButtonIcon
                        onClick={() =>
                          handleArchiveUnarchive(vehicle.id, vehicle.status)
                        }
                      >
                        {vehicle.status === "ativo" ? "📁" : "📂"}{" "}
                      </ActionButtonIcon>
                      <ActionButtonIcon
                        onClick={() => handleDelete(vehicle.id)}
                      >
                        🗑️
                      </ActionButtonIcon>{" "}
                    </ActionButtonsContainer>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  Nenhum veículo cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </VehicleTable>
      </TableContainer>
    </>
  );

  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarLogo src={eptaLogoSrc} alt="EPTA Tecnologia" />
        <NavList>
          <NavItem>
            <NavLink
              as="div"
              onClick={() => setActiveContent("dashboard")}
              className={activeContent === "dashboard" ? "active" : ""}
            >
              📊 Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as="div"
              onClick={() => setActiveContent("reports")}
              className={activeContent === "reports" ? "active" : ""}
            >
              📈 Relatórios
            </NavLink>
          </NavItem>
        </NavList>
      </Sidebar>

      <MainContent>
        <Header>
          <UserMenu onClick={() => setDropdownOpen(!dropdownOpen)}>
            <UserIcon>👤</UserIcon>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
              </DropdownMenu>
            )}
          </UserMenu>
        </Header>
        <PageContent>
          {activeContent === "dashboard" ? (
            DashboardContent
          ) : (
            <ReportsContent />
          )}
        </PageContent>
      </MainContent>

      <VehicleFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleVehicleSaved}
      />
    </LayoutContainer>
  );
}

export default DashboardPage;
