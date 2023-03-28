import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { Link } from "react-router-dom";
import { PainelGeral } from "./styled";
import { PageTitle } from "../../components/HeaderPainel";
import TabelaPainelProdutos from "../../components/TabelaPainelProdutos";

function PainelAdm() {
  return (
    <>
      <div>
        <HeaderPainel />
      </div>
      <div className="container">
        <PainelGeral>
          <div className="painel">
            <PageTitle className="title">Painel Administrativo</PageTitle>
            <p>Bem vindo, admin!</p>
          </div>
          <div className="button-area">
            <Link to="/paineladm">
              <button>Produtos</button>
            </Link>

            <Link to="/paineladmuser">
              <button>Usuarios</button>
            </Link>

            <Link to="/paineladmpedido">
              <button>Pedidos</button>
            </Link>
          </div>
          <div className="btnAdd">
            <Link to="/paineladmcadastro" className="button-add">
              adicionar novo
            </Link>
          </div>
          <div className="tabela">
            <TabelaPainelProdutos />
          </div>
        </PainelGeral>
      </div>
    </>
  );
}

export default PainelAdm;
