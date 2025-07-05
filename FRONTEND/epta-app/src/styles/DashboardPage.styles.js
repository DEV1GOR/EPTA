import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;

  border-radius: 8px;
  overflow: hidden;
`;

export const Sidebar = styled.nav`
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 8px;
`;

export const SidebarLogo = styled.img`
  width: 120px;
  margin-bottom: 30px;
  align-self: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #ecf0f1;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #3498db;
    font-weight: bold;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.header`
  background-color: #ffffff;
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const UserIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #555;
  font-size: 20px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
  padding: 10px 0;
  border: 1px solid #eee;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PageContent = styled.div`
  padding: 30px;
  flex-grow: 1;
  background-color: #ffffff;
`;

export const DashboardHeader = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 5px;
  }
  p {
    font-size: 16px;
    color: #666;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 25px;
  flex: 1;
  min-width: 280px;
  max-width: calc(33.33% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #f0f0f0;

  @media (max-width: 992px) {
    max-width: calc(50% - 10px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
  color: ${(props) => props.color || "#007bff"};
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
  font-weight: normal;
`;

export const CardValue = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.1s ease;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  border: 1px solid #f0f0f0;
`;

export const VehicleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 15px;
    border-bottom: 1px solid #eee;
    white-space: nowrap;
  }

  th {
    background-color: #f8f8f8;
    color: #555;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  td {
    font-size: 15px;
    color: #333;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === "ativo" ? "#28a745" : "#ffc107"};
  margin-right: 8px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ActionButtonIcon = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #555;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
    color: #007bff;
  }
`;
