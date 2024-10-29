import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Colunas,
  Table,
  PaginationContainer,
  EditRow,
  Button,
  PaginationButton,
} from "./styles";
import React from "react";
import { checkLoggedIn } from "../../../utils/auth";

function TableWithPagination({
  itemsPerPage,
  companies,
  onDelete,
  onEdit,
  editedCompanyId,
  onUpdate,
}) {
  TableWithPagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    companies: PropTypes.array.isRequired,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [collaboratorsCount, setCollaboratorsCount] = useState("");

  useEffect(() => {
    const isLoggedIn = checkLoggedIn();
    if (!isLoggedIn) {
      document.cookie = `redirectUrl=${window.location.href}; path=/`;
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get("page");

    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }

    setTotalPages(Math.ceil(companies.length / itemsPerPage));
  }, [companies, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, companies.length);
  const currentItems = companies.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", page);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${urlParams}`
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
  };

  const handleUpdateClick = (id) => {
    onUpdate(id, companyName, collaboratorsCount);
  };

  return (
    <Colunas>
      <Table>
        <thead>
          <tr>
            <th>Data de Criação</th>
            <th>Nome da Empresa</th>
            <th>Quantidade de Funcionários</th>
            <th>Empresa Ativa</th>
            <th>Última Atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((company) => (
            <React.Fragment key={company.id}>
              <tr>
                <td>{formatDate(company.createdAt)}</td>
                <td>{company.companyName}</td>
                <td>{company.collaboratorsCount}</td>
                <td>{company.isActive ? "Sim" : "Não"}</td>
                <td>{formatDate(company.lastSubmit)}</td>
                <td>
                  <Button onClick={() => onEdit(company.id)}>Editar</Button>
                  <Button onClick={() => handleDeleteClick(company.id)}>
                    Excluir
                  </Button>
                </td>
              </tr>
              {editedCompanyId === company.id && (
                <EditRow>
                  <td colSpan="6">
                    <input
                      placeholder="Nome"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <input
                      placeholder="Quantidade de Funcionários"
                      type="number"
                      value={collaboratorsCount}
                      onChange={(e) => setCollaboratorsCount(e.target.value)}
                    />
                    <Button onClick={() => handleUpdateClick(editedCompanyId)}>
                      Atualizar
                    </Button>
                    <Button onClick={() => onEdit(null)}>Cancelar</Button>
                  </td>
                </EditRow>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <PaginationButton
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <PaginationButton
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </Colunas>
  );
}

TableWithPagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  companies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  editedCompanyId: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
};

export default TableWithPagination;
