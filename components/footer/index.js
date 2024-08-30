import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerAll}>
                <div className={styles.footerContainer}>
                    <Image
                        src="/image/footer-logo.png"
                        alt="Company Logo"
                        width={202}
                        height={27} />
                    <ul>
                        <Link href="/"><li>OUR COMPANY</li></Link>
                        <Link href="/"><li>LOCATIONS</li></Link>
                        <Link href="/contact"><li>CONTACT</li></Link>

                    </ul>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerContainer2}>

                    <div className={styles.contactInfo}>
                        <div className={styles.ciLeft}>
                            <h3>Designo Central Office</h3>
                            <p> 3886 Wellington Street Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className={styles.ciRight}>


                            <ul>
                                <li>Contact Us (Central Office)</li>
                                <li>P : +1 253-863-8967</li>
                                <li>M : contact@designo.co</li>
                            </ul>

                        </div>
                    </div>

                    <div className={styles.socialIcons}>
                        <Image
                            src="/image/Path-1.svg"
                            alt="sm1"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/image/Path-2.svg"
                            alt="sm1"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/image/Path.svg"
                            alt="sm1"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/image/Shape.svg"
                            alt="sm1"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/image/Shape-1.svg"
                            alt="sm1"
                            width={24}
                            height={24}
                        />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
