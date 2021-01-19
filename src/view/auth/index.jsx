import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { change, login } from "../../redux/actions/auth.action";
import { Link, Redirect } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const { credentials, success } = useSelector((state) => state.authReducer);

  return (
    <div className="d-flex bg-white min-vh-100 justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form method="post" onSubmit={() => dispatch(login(credentials))}>
              <div className="form-group text-center">
                <img src="/logo.png" alt="Logo CarCRM" height="48" />
                <Typography component="h1" variant="h6" className="mt-3">
                  Plataforma para Revenda de Veículos
                </Typography>
              </div>

              <TextField
                label="E-mail"
                type="email"
                autoComplete="email"
                value={credentials.email}
                onChange={(text) =>
                  dispatch(change({ email: text.target.value }))
                }
              />

              <TextField
                label="Senha"
                type="password"
                value={credentials.password}
                onChange={(text) =>
                  dispatch(change({ password: text.target.value }))
                }
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="my-2"
                onClick={() => dispatch(login(credentials))}
              >
                Entrar
              </Button>
              
              <p className="text-center">Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
            </form>
            {success && <Redirect to="/vehicles" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
