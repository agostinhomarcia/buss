import { useEffect, useState } from "react";
import TableWithPagination from "./TableWithPagination";
import { Container } from "./styles";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function ViewCompanies() {
  const [companies, setCompanies] = useState([]);
  const [editedCompanyId, setEditedCompanyId] = useState(null);

  useEffect(() => {
    axios
      .get("https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      try {
        await axios.delete(
          `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`
        );
        toast.success("Item excluído com sucesso!");
        setCompanies(companies.filter((company) => company.id !== id));
      } catch (error) {
        console.error("Erro ao excluir item:", error);
        toast.error(
          "Erro ao excluir item. Verifique o console para mais detalhes."
        );
      }
    }
  };

  const handleUpdate = async (id, companyName, collaboratorsCount) => {
    try {
      const updatedData = {
        companyName,
        collaboratorsCount,
      };
      const response = await axios.put(
        `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`,
        updatedData
      );
      console.log("Resposta da atualização:", response.data);
      toast.success("Empresa atualizada com sucesso!");
      setEditedCompanyId(null);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar empresa:", error);
      toast.error(
        "Erro ao atualizar empresa. Verifique o console para mais detalhes."
      );
    }
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedCompanies = companies.map((company) => {
      if (company.id === id) {
        return { ...company, [name]: value };
      }
      return company;
    });
    setCompanies(updatedCompanies);
  };

  return (
    <Container>
      <ToastContainer />
      <h1>Visualizar Empresas Externas</h1>
      <p>Lista de empresas externas cadastradas na BusinessFlow.</p>
      <TableWithPagination
        itemsPerPage={10}
        companies={companies}
        onDelete={handleDelete}
        onEdit={(id) => setEditedCompanyId(id)}
        editedCompanyId={editedCompanyId}
        onInputChange={(e, id) => handleInputChange(e, id)}
        onUpdate={handleUpdate}
      />
    </Container>
  );
}

export default ViewCompanies;
