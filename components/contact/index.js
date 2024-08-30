"use client";
import React from 'react'
import styles from './style.module.css'
import { useRouter } from 'next/navigation';

function Contact() {
    const router=useRouter()
    return (

        <div className={styles.contact}>
            <div className={styles.contactLeft}>
                <h3>Let’s talk about your project</h3>
                <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your
                    business grow.</p>
            </div>
            <button onClick={()=>router.push('/contact')}>GET IN TOUCH</button>
        </div>

    )
}

export default Contact
