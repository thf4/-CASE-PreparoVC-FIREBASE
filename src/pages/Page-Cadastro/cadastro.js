import React, { useCallback, useState } from "react";
import {
  Form,
  Input,
  Container,
  FormGroup,
  Label,
  Col,
  Card,
  Row,
  Button,
  Alert,
} from "reactstrap";
import "./cadastro.css";
import { withRouter } from "react-router-dom";
import { app } from "../../Auth/Config-fire";
import { Menu } from "../../components/Menu/Menu";

const Cadastro = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState();

  const cadastroUser = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password);
        setError("Usuario cadastrado com sucesso!");
        history.push("/login");
      } catch (err) {
        setError("Por favor, informe email e senha para realizar o cadastro.");
      }
    },
    [history, user]
  );

  return (
    <div>
      <Menu />
      <Container>
        <div className="cadastar-camp">
          <Card className="card-cadastro">
            <Form onSubmit={cadastroUser} className="card-body">
              <Label className="mt-4">CADASTRO DO CANDIDATO </Label>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-MAIL"
                      className=" input-Cadastrar"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="SENHA"
                      className="input-Cadastrar"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>

              <Button className=" btn-Cadastrar btn-danger ">CADASTRAR</Button>
            </Form>
            {error}
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Cadastro);
