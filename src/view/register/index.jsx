import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { change, register } from "../../redux/actions/register.action";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { user, success, error } = useSelector(
    (state) => state.registerReducer
  );

  return (
    <div className="d-flex bg-white min-vh-100 justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form
              method="post"
              onSubmit={() => {
                dispatch(register(user));
              }}
            >
              <div className="form-group text-center">
                <img src="/logo.png" alt="Logo CarCRM" height="48" />
                <Typography component="h1" variant="h6" className="mt-3">
                  Crie sua conta grátis por 7 dias!
                </Typography>
              </div>

              <TextField
                label="Nome"
                type="text"
                autoComplete="name"
                value={user.name}
                error={error.name && true}
                onChange={(text) => {
                  dispatch(change({ name: text.target.value }));
                  if (error.name && delete error.name);
                }}
              />

              {error.name && (
                <small className="text-danger">{error.name[0]}</small>
              )}

              <TextField
                label="E-mail"
                type="email"
                autoComplete="email"
                value={user.email}
                error={error.email && true}
                onChange={(text) => {
                  dispatch(change({ email: text.target.value }));
                  if (error.email && delete error.email);
                }}
              />

              {error.email && (
                <small className="text-danger">{error.email[0]}</small>
              )}

              <TextField
                label="Senha"
                type="password"
                value={user.password}
                error={error.password && true}
                onChange={(text) => {
                  dispatch(change({ password: text.target.value }));
                  if (error.password && delete error.password);
                }}
              />

              {error.password && (
                <small className="text-danger">{error.password[0]}</small>
              )}

              <TextField
                label="Confirmar Senha"
                type="password"
                value={user.password_confirmation}
                error={error.password_confirmation && true}
                onChange={(text) => {
                  dispatch(
                    change({ password_confirmation: text.target.value })
                  );
                  if (
                    error.password_confirmation &&
                    delete error.password_confirmation
                  );
                }}
              />

              {error.password_confirmation && (
                <small className="text-danger">
                  {error.password_confirmation[0]}
                </small>
              )}

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="my-2"
                onClick={() => {
                  dispatch(register(user));
                }}
              >
                CADASTRAR
              </Button>
              <p className="text-center">
                Já tem uma conta? <Link to="/login">Faça Login</Link>
              </p>
            </form>
            {success && <Redirect to="/vehicles" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
