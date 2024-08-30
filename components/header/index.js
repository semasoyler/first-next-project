import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image  
        src="/image/logo.png" 
          alt="Company Logo"      
          width={196}            
          height={24}   />

           
            <ul>
                <Link href="/"><li>OUR COMPANY</li></Link>
                <Link href="/"><li>LOCATIONS</li></Link>
                <Link href="/contact"><li>CONTACT</li></Link>
               
            </ul>
        </div>
    </div>
  )
}

export default Header
