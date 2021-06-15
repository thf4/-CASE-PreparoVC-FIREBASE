import React, { useState, useContext, useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
  Alert,
} from "reactstrap";
import "./local.css";

import { app } from "../../Auth/Config-fire";
import { Menu } from "../../components/Menu-User/User-Menu";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../Auth/Auth-Provider";

const Local = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    cep: "",
    cidade: "",
    estado: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const db = await app.firestore();
      setSuccess("Atualizado com sucesso!");
      setError(null)
      return await db.collection(`usuario-Endereço`).doc(currentUser.uid).set(user);
    } catch (err) {
      console.log(err);
      setSuccess(null)
      return setError("Não foi possivel atualizar!");
    }
  };

  useEffect(()=>{
    const data = async () => {
      const response  =  await app.firestore().collection("usuario-Endereço").doc(currentUser.uid).get()
      if(response.data()){
        setUser(response.data())
      }
    }
   data()
  },[currentUser.uid])
  return (
    <div className="local-div">
      <Menu />
      <h6>Localização</h6>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Card>
            {error && <Alert color="danger">{error}</Alert>}
            {success && <Alert color="success">{success}</Alert>}
            <CardBody>
              <div>
                <h4>Instruções</h4>
                <p>
                  Preencha seus dados de Localização. Sempre os mantenha
                  atualizado.
                </p>
              </div>
              <div>
                <FormGroup row>
                  <Label for="cep">CEP٭</Label>
                  <Col sm={5}>
                    <Input
                      id="cep"
                      type="text"
                      value={user.cep || ""}
                      onChange={(e) =>
                        setUser({ ...user, cep: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="cidade">Cidade٭</Label>
                  <Col sm={5}>
                    <Input
                      id="cidade"
                      type="text"
                      value={user.cidade || ""}
                      onChange={(e) =>
                        setUser({ ...user, cidade: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="estado">Estado٭</Label>
                  <Col sm={5}>
                    <Input
                      type="select"
                      name="select"
                      id="estado"
                      value={user.estado|| ""}
                      onChange={(e) =>
                        setUser({ ...user, estado: e.target.value })
                      }
                    >
                      <option disabled>Selecione o Estado</option>
                      <option>AC</option>
                      <option>AL</option>
                      <option>AP</option>
                      <option>AM</option>
                      <option>BA</option>
                      <option>CE</option>
                      <option>DF</option>
                      <option>ES</option>
                      <option>GO</option>
                      <option>MA</option>
                      <option>MT</option>
                      <option>MS</option>
                      <option>MG</option>
                      <option>PA</option>
                      <option>PB</option>
                      <option>PR</option>
                      <option>PI</option>
                      <option>RJ</option>
                      <option>RN</option>
                      <option>RS</option>
                      <option>RO</option>
                      <option>RR</option>
                      <option>SC</option>
                      <option>SP</option>
                      <option>SE</option>
                      <option>TO</option>
                    </Input>
                  </Col>
                  <Label for="bairro">Bairro٭</Label>
                  <Col sm={5}>
                    <Input
                      id="bairro"
                      type="text"
                      value={user.bairro|| ""}
                      onChange={(e) =>
                        setUser({ ...user, bairro: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="endereço">Endereço٭</Label>
                  <Col sm={5}>
                    <Input
                      id="endereço"
                      type="text"
                      value={user.endereco|| ""}
                      onChange={(e) =>
                        setUser({ ...user, endereco: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="numero">Número٭</Label>
                  <Col sm={5}>
                    <Input
                      id="numero"
                      type="text"
                      value={user.numero|| ""}
                      onChange={(e) =>
                        setUser({ ...user, numero: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="complemento">Complemento٭</Label>
                  <Col sm={5}>
                    <Input
                      id="complemento"
                      type="text"
                      placeholder="Insira um complemento se achar necessário"
                      value={user.complemento|| ""}
                      onChange={(e) =>
                        setUser({ ...user, complemento: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
          <Button className="btn-local">Enviar</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Local;
