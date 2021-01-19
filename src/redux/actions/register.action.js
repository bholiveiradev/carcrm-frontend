import { Http } from '../../config/Http';
import { changeLoading } from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
    CHANGE: 'REGISTER_CHANGE',
    ERROR: 'REGISTER_ERROR',
    SUCCESS: 'REGISTER_SUCCESS'
}

export const change = (payload) => ({
    type: actionTypes.CHANGE,
    payload
});

export const error = (payload) => ({
    type: actionTypes.ERROR,
    payload
});

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
});

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);

    dispatch(change({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }));

    dispatch(success(true));
}

export const register = data => dispatch => {
    dispatch(changeLoading({
        open: true,
        message: 'Cadastrando usuário...'
    }));

    return Http.post('/register', data)
        .then(response => {
            dispatch(changeLoading({ open: false }));

            if (response.status === 200 && response.data.access_token) {
                dispatch(setUserToken(response.data.access_token));
            }
            else {
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    message: 'Erro ao inserir dados no servidor',
                }));
            }
        })
        .catch(errors => {
            dispatch(changeLoading({ open: false }));

            if (errors.response) {
                dispatch(error(errors.response.data.errors));
            } else {
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    message: 'Não foi possível estabelecer uma conexão com o servidor',
                }));
            }
        });
}