import { FC, useState, useEffect, useRef } from 'react';
import * as React from "react"
import styles from "../../styles/home.module.css"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign } from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const Home: FC<{ title?: string }> = ({ title }
) => {


  return (
    <>
      <div className={`${styles.home}`}>

      </div>
    </>
  )
}

export { Home };

