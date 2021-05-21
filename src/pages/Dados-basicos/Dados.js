import React, { useState, useContext } from "react";
import {
  Form,
  Input,
  Container,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  CardSubtitle,
  CardTitle,
  Col,
  Alert,
} from "reactstrap";
import { Menu } from "../../components/Menu-User/User-Menu";
import Footer from "../../components/Footer/Footer";
import { app } from "../../Auth/Config-fire";
import { AuthContext } from "../../Auth/Auth-Provider";

const Dados = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    image: "",
    github: "",
    behance: "",
    linkedin: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = app.firestore();
      setError("Atualizado com sucesso!");
      return db.collection(`usuario/`).doc(currentUser.uid).set(user);
    } catch (err) {
      console.log(err);
      return setError("Não foi possivel atualizar!");
    }
  };

  return (
    <div>
      <Menu />
      <Container className="pt-4">
        <Form onSubmit={handleSubmit}>
          <Card>
            {error && <Alert color="success">{error}</Alert>}
            <CardBody>
              <CardTitle>
                <h4>Foto de perfil</h4>
              </CardTitle>
              <CardSubtitle>Adicione uma foto em seu perfil</CardSubtitle>
              <Form className="mt-3 col-md d-flex flex-column align-items-left justify-content-center">
                <Label className="">Carregar</Label>
                <Input
                  type="file"
                  value={user.image}
                  onChange={(e) => setUser({ ...user, image: e.target.value })}
                />
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>E-mail</h4>
                </CardTitle>
                <CardSubtitle>Você pode alterar seu email</CardSubtitle>
              </div>
              <FormGroup row>
                <Label for="emailex" sm={1}>
                  E-mail
                </Label>
                <Col sm={4}>
                  <Input
                    id="emailex"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <Button className="mt-2" color="primary">
                Atualizar
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>Instruções</h4>
                </CardTitle>
                <CardSubtitle>
                  Preencha seus dados de perfil. Sempre mantenha seu telefone
                  atualizado.
                </CardSubtitle>
              </div>
              <FormGroup row>
                <Label for="emailex">Nome</Label>
                <Col sm={4}>
                  <Input
                    id="emailex"
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="emailex">Sobrenome</Label>
                <Col sm={4}>
                  <Input
                    id="emailex"
                    type="text"
                    value={user.surname}
                    onChange={(e) =>
                      setUser({ ...user, surname: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="emailex">Telefone</Label>
                <Col sm={4}>
                  <Input
                    id="emailex"
                    type="text"
                    value={user.telephone}
                    onChange={(e) =>
                      setUser({ ...user, telephone: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>Links Pessoais</h4>
                </CardTitle>
                <CardSubtitle>
                  Compartilhe seu perfil de outras plataformas aqui.
                </CardSubtitle>
              </div>

              <FormGroup row>
                <Label for="Github">Github</Label>
                <Col sm={4}>
                  <Input
                    id="Github"
                    type="text"
                    value={user.github}
                    onChange={(e) =>
                      setUser({ ...user, github: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Behance">Behance</Label>
                <Col sm={4}>
                  <Input
                    id="Behance"
                    type="text"
                    value={user.behance}
                    onChange={(e) =>
                      setUser({ ...user, behance: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="linkedin">Linkedin</Label>
                <Col sm={4}>
                  <Input
                    id="linkedin"
                    type="text"
                    value={user.linkedin}
                    onChange={(e) =>
                      setUser({ ...user, linkedin: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
          <Button className="btn-atualizar-dados">Atualizar</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Dados;
