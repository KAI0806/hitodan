import Head from 'next/head'
import { Flex, Image } from '@chakra-ui/react'
import MvSlider from '../components/MvSlider'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { TfiArrowCircleRight } from 'react-icons/tfi'

export default function Home() {
  return (
    <>
      <Head>
        <title>やきとり＆美味しいお酒｜人暖楽</title>
        <meta name="description" content="やきとり＆美味しいお酒｜人暖楽" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="index.html" />
        <meta property="og:site_name" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:title" content="" />
      </Head>

      <main>
        <section id='mv' className={styles.mv}>
          <motion.div
          initial={{ scale:1.2 }}
          animate={{ scale:1 }}
          transition={{
            duration: 5.15,
            ease: 'linear',
            repeat: Infinity,
          }}
          >
            <MvSlider/>
          </motion.div>

          <h2>
            人と暖を結ぶ<br/>
            本格焼き鳥で楽しむ
          </h2>

          <div>
            <Link href='' passHref>
              <a>こだわり</a>
            </Link>
          </div>
        </section>

        <Flex>
            <h3>重要なお知らせ</h3>
            <p></p>
            <h4></h4>
            <IconContext.Provider value={{ size: '2.7rem' }}>
                <TfiArrowCircleRight/>
            </IconContext.Provider>
          </Flex>
      </main>
    </>
  )
}
