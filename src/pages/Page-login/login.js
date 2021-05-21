import React, { useCallback, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
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
  Spinner,
} from "reactstrap";

import { app } from "../../Auth/Config-fire";
import "./login.css";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../Auth/Auth-Provider";

const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        const response = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push(`/dados/${currentUser.uid}`);
        setLoading(true);
        return response;
      } catch (err) {
        console.log(err);
        setError("Verifique se o email e senha estão corretos.");
      }
    },
    [history, currentUser]
  );

  return (
    <div>
      <Menu />

      <div className="logincamp">
        <Container>
          <Card className="card-login">
            <Form onSubmit={loginUser} className="card-body">
              <Label>LOGIN</Label>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="EMAIL"
                      bsSize="xs"
                      className="mt-2 input-login"
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
                      bsSize="xs"
                      className="mt-4 input-login"
                    />
                  </Col>
                </Row>
              </FormGroup>

              {error}
              <Button className="mt-4 btn-login-LOGIN btn-danger ">
                ENTRAR
              </Button>
              <Button className="mt-2 btn-login-RECUPERAR">
                RECUPERAR SENHA
              </Button>
              <Button href="/cadastrar" className="mt-2 btn-login-CADASTRAR">
                CADASTRAR
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Login);
