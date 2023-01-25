import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/service';

import './cadastroUsuario.css'

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
    
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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

        <Grid container direction='column' justifyContent='center' alignItems='center'>
            <img className="logo2" src="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1675641600&Signature=gQ2kMO-YwBLlwLoZOvChAlDw0ZWCH8PgPPPWYK4EzjcsMP35NHuEreAUKv8Oh58GH43Ub6deLITiIaCKFWnPS-OI6bJZDF-kvd3St3eBX9lxeJJQDRQqGRuX4mtQLxYUtdULEEXA7YzsmrM7fCVSHkRPUQCftc7d4XiVj3W3t-u3nRE9fXwJIrh8fF6h2sp0KIhjt641bbGXX50Ulr5qotzmToWZdeJEuFotnCb-4jeUSeuQ4pNSnCXnRT9-d5a6lr3JVglYOLCft2s9kZysFNMHXjm~yav8nOA4~dzFTO-4reG~iTFlWpoijYjQsC1wF-nLHpWtWmi5WAReT3vBWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="imagemcontato" />
            <Grid item xs={7} alignItems='center'>
                <Box padding={5}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto2'>Cadastre-se</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant="outlined" name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant="outlined" name='senha' type='password' margin='normal' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmar senha' label='Confirmar senha' variant="outlined" name='confirmarsenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='cdts'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;