import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

function Projects() {
    return (
        <div className={styles.projects}>
            <Link href='/'><Image src="/image/wed-design.png" alt="" width={541} height={640} /></Link>
            <div class={styles.prSol}>
            <Link href='/'> <Image src="/image/app-design.png" alt="" width={541} height={308} /></Link>
            <Link href='/'> <Image src="/image/graphic-design.png" alt="" width={541} height={308} /></Link>
            </div>
        </div>
    )
}

export default Projects
