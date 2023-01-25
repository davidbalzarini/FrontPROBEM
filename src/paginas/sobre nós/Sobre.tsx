import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Sobre.css"


function Sobre(){
    return(
        <>
             <Grid container direction="row" className="afastar">
                <Grid item xs={12} sm={12} md={6}>
                    <div className="h1">
                    <h1>O ProBem</h1>
                    </div>
                    <div>
                        <p className="p">Enxergando a dificuldade ao acesso à itens hospitalares duráveis, criamos o ProBem; uma plataforma capaz viabilizar democraticamente esses itens, através do que consideramos algo muito importante: o afeto de pessoas!</p>
                    </div>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                <img className="img5" src="https://s3-alpha-sig.figma.com/img/d4db/14e8/b7df6bde4bd1dda51d3efff430cf4f4f?Expires=1675641600&Signature=FcZmyj3xRlXi1XIsI1CmrueStpz7rCllaEZ6~429EoExazPvHxSN3FPDK2L0ARZKGGul7q1AzlSEBd8Kaktinx~JGxWITtVK-FMNm-yvw6a2OFimHdkQZ5If5i~FBorIFxV7hIfzstMqJ91iAQeSvb1FdUBiAhxMva4RCsF0QGYYfefddn4GhfH7vhgBUYD6QplzUr~DV~i~ZrwtwaDL~FEoMvRSPKj01WZbe-VjWTxzJCtItLYyjHiGZuo0Iw7gSeNB5U7UrYcVEttWdNnbcvzxBdITLy8pAIdOh2OEWv1Sum9gTpDsH4SCYoEDNHuTPA3CCu4b5VLv0vtrDZER6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""/>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;