import React, { useEffect, useRef } from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import Boeun from './Boeun'
import Castle from './Castle'
import Howl from './Howl'
import Ponyo from './Ponyo'
import Spirited from './Spirited'
import Totoro from './Totoro'
import styles from "@/styles/main/All.module.scss";

const All = () => {
    const outerDivRef = useRef();
    useEffect(()=>{
        const wheelHandler = (e) => {
            e.preventDefault();
        }
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return()=>{
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        }
    },[])
  return (
    <div>
        <Castle/>
        <Spirited/>
        <Howl/>
        <Ponyo/>
        <Totoro/>
        <Boeun/>
    </div>
  )
}

export default All