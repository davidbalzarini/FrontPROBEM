import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { api, login } from '../../service/service';
import { addToken } from '../../store/tokens/actions';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const resposta = await api.post(`/auth/logar`, userLogin)
            setToken(resposta.data.token)

            await login(`/auth/logar`, userLogin, setToken )
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
                });
        } catch(error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
                });
        }
    }

    return (
     <>
        <Grid container justifyContent='center' >
                <img className="logo2" src="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1675641600&Signature=gQ2kMO-YwBLlwLoZOvChAlDw0ZWCH8PgPPPWYK4EzjcsMP35NHuEreAUKv8Oh58GH43Ub6deLITiIaCKFWnPS-OI6bJZDF-kvd3St3eBX9lxeJJQDRQqGRuX4mtQLxYUtdULEEXA7YzsmrM7fCVSHkRPUQCftc7d4XiVj3W3t-u3nRE9fXwJIrh8fF6h2sp0KIhjt641bbGXX50Ulr5qotzmToWZdeJEuFotnCb-4jeUSeuQ4pNSnCXnRT9-d5a6lr3JVglYOLCft2s9kZysFNMHXjm~yav8nOA4~dzFTO-4reG~iTFlWpoijYjQsC1wF-nLHpWtWmi5WAReT3vBWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="imagemcontato" />
        </Grid>
        <Grid className = "entrar" container direction='row' justifyContent='center' alignItems='center' xs={12}>
            <Grid alignItems='center' xs={12}>
                <Box padding={20} className="padding3">
                    <form onSubmit={onSubmit}>
                        <Typography className='tesxtos1' variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Entrar</Typography>
                        <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='btnlogin'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textdecoratornone'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
     </>
    );
}

export default Login;