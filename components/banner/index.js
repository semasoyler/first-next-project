"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'


function Banner() {
    const router=useRouter();
  
    return (
        <div className={styles.banner}>
            <Image src="/image/banner.png" alt="banner" width={1111} height={640} />
            <div className={styles.bannerSol}>
                <p className={styles.title}>Award-winning custom designs and digital branding solutions</p>
                <p className={styles.text}>With over 10 years in the industry, we are experienced in creating fully responsive
                    websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button onClick={()=>router.push('/about')}>LEARN MORE</button>
            </div>

        </div>
    )
} 

export default Banner
