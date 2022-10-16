import React, { useCallback, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import {
  Card,
  Container,
  Container2,
  Conteudo,
  Formulario,
  Imagem,
  Input,
  InputButton,
  Label,
  Titulo,
} from "../Styles/stylesVagas";
import ImagemEmpresa1 from "../Images/img_empresa1.jpeg";
import { Link } from "react-router-dom";
import { api } from "../Service/api";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const Vagas = () => {
  const [listVaga, setListVaga] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCarregar = useCallback(() => {
    (async () => {
      try {
        await api.get(`/vagas`).then((response) => {
          setListVaga(response.data);
        });
      } catch {
        console.log("Error");
      }
    })();
  }, []);

  const handleExcluir = useCallback(
    (id) => {
      (async () => {
        try {
          await api.delete(`/vagas/${id}`).then(() => {
            handleCarregar();
          });
        } catch {
          console.log("Error");
        }
      })();
    },
    [handleCarregar],
  );

  useEffect(() => {
    (async () => {
      try {
        await api.get(`/vagas`).then((response) => {
          setListVaga(response.data);
        });
      } catch {
        console.log("Error");
      }
    })();
  }, []);

  const handleCadastrar = (e) => {
    (async () => {
      e.preventDefault();
      try {
        await api
          .post(`/vagas`, {
            titulo: titulo,
            descricao: descricao,
          })
          .then(() => {
            handleCarregar();
          });
      } catch {
        console.log("Error");
      }
    })();
  };

  return (
    <>
      <Header />
      <Titulo>Vagas</Titulo>
      <Container>
        <Card>
          <Imagem src={ImagemEmpresa1} alt="Imagem da empresa" />
          <Conteudo>
            <Container2>
              <Formulario onSubmit={(e) => handleCadastrar(e)}>
                <Label>
                  Título:
                  <Input
                    name="titulo"
                    required
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </Label>
                <Label>
                  Descrição:
                  <Input
                    name="descricao"
                    required
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </Label>
                <InputButton type="submit" />
              </Formulario>
            </Container2>
          </Conteudo>
        </Card>
        {listVaga.map((vaga, i) => (
          <Card key={i}>
            <Imagem src={ImagemEmpresa1} alt="Imagem da empresa" />
            <Conteudo>
              <h3>
                <b>{vaga.titulo}</b>
              </h3>
              <p>{vaga.descricao}</p>
              <h5>
                <Link to={`/sobre/${vaga.codigo}`}>
                  Clique para acompanhar sua candidatura
                </Link>
              </h5>
              <FontAwesomeIcon
                size="lg"
                cursor="pointer"
                icon={faRemove}
                onClick={() => handleExcluir(vaga.codigo)}
              />
            </Conteudo>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Vagas;
