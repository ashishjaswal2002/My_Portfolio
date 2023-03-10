import Love from '../assets/Love.json';
import  Lottie from 'react-lottie-player';
import React from 'react';
import { margin } from '@mui/system';

const LoveLottie = ()=>{
    return(
        <Lottie
        loop
        animationData={Love}
        play
        style={{width:'64px',margin:0,padding:0}}>

        </Lottie>
    )
}
export default LoveLottie;