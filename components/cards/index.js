import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Cards() {
    return (
        <div>
            <div className={styles.cards}>
                <div class={styles.card}>
                    
                    <Image src="/image/us1.svg" alt="" width={202} height={202} />
                    <h3>PASSIONATE</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a
                        purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
                <div class={styles.card}>
                    <Image src="/image/us2.svg" alt="" width={202} height={202} />
                    <h3>RESOURCEFULL</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a
                        purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
                <div class={styles.card}>
                    <Image src="/image/us3.svg" alt="" width={202} height={202} />
                    <h3>FRIENDLY</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a
                        purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>

        </div>
    )
}

export default Cards
