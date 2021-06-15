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
} from "reactstrap";
import "./cadastro.css";
import { withRouter, useHistory } from "react-router-dom";
import { app } from "../../Auth/Config-fire";
import { Menu } from "../../components/Menu/Menu";

const Cadastro = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState();
  const history = useHistory()
  
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
        if(err.code === "auth/weak-password"){
          setError("Senha muito fraca, digite uma senha com letras e numeros");
        } else if(err.code === "auth/email-already-in-use"){
          setError("Email em uso, digite um email valido!");
        } else if(err.code === "auth/invalid-email"){
          setError("Digite o seu email!")
        }
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
