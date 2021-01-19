import { Http } from '../../config/Http';
import { changeLoading } from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS'
}

export const change = (payload) => ({
    type: actionTypes.CHANGE,
    payload
});

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
});

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);

    dispatch(change({
        email: '',
        password: '',
    }));

    dispatch(success(true));
}

export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        message: 'Aguarde, verificando as credenciais...'
    }));

    return Http.post('oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'hHdADziV1NTmuuwK0QPLa43oeZ0EZkYcBNO3fvEF',
            username: credentials.email,
            password: credentials.password
        })
        .then(response => {
            dispatch(changeLoading({ open: false }));

            if (response.status === 200 && response.data.access_token) {
                dispatch(setUserToken(response.data.access_token));
            }
            else {
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    message: 'Erro na tentativa de autenticação no servidor',
                }));
            }
        })
        .catch(error => {
            dispatch(changeLoading({ open: false }));

            if (error.response) {
                let statusCode = error.response.status;

                if (statusCode === 401 || statusCode === 400) {
                    dispatch(changeNotify({
                        open: true,
                        class: 'error',
                        message: 'E-mail e/ou senha incorretos',
                    }));
                }
            }
            else {
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    message: 'Não foi possível estabelecer uma conexão com o servidor',
                }));
            }
        });
}