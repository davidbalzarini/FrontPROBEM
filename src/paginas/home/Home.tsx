import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Home.css'

function Home() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    console.log(token)

    return (
        <>
            <Grid container  direction="row" className="mx768">
                <Grid item xs={12} sm={12} md={6} >
                    <div className="pro">
                        <h1>ProBem <br /> para o <br />bem</h1>
                    </div>
                    <p className="criando">Criando pontes entre quem pode ajudar, <br/> com quem mais precisa!</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img className="img1" src="https://s3-alpha-sig.figma.com/img/d4db/14e8/b7df6bde4bd1dda51d3efff430cf4f4f?Expires=1675641600&Signature=FcZmyj3xRlXi1XIsI1CmrueStpz7rCllaEZ6~429EoExazPvHxSN3FPDK2L0ARZKGGul7q1AzlSEBd8Kaktinx~JGxWITtVK-FMNm-yvw6a2OFimHdkQZ5If5i~FBorIFxV7hIfzstMqJ91iAQeSvb1FdUBiAhxMva4RCsF0QGYYfefddn4GhfH7vhgBUYD6QplzUr~DV~i~ZrwtwaDL~FEoMvRSPKj01WZbe-VjWTxzJCtItLYyjHiGZuo0Iw7gSeNB5U7UrYcVEttWdNnbcvzxBdITLy8pAIdOh2OEWv1Sum9gTpDsH4SCYoEDNHuTPA3CCu4b5VLv0vtrDZER6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""/>
                </Grid>
            </Grid>

            <div className="mx768">
                <Link to="/sobre"><button className="botao1">Saber mais</button></Link>
                <Link to="/doacoes"><button className="botao2">Doações</button></Link>

            </div>

        </>
    );
}

export default Home;