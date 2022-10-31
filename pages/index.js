import Head from 'next/head'
import { Center, Flex, Image } from '@chakra-ui/react'
import MvSlider from '../components/MvSlider'
import { NewsData } from '../components/NewsData'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { TfiArrowCircleRight } from 'react-icons/tfi'

export default function Home() {
  return (
    <>
      <Head>
        <title>やきとり＆美味しいお酒｜人暖楽</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="やきとり＆美味しいお酒｜人暖楽" />
        <meta property="og:site_name" content="やきとり＆美味しいお酒｜人暖楽" />
        <meta name="twitter:title" content="やきとり＆美味しいお酒｜人暖楽" />
      </Head>

      <main>
        <section id='mv' className={styles.mv}>
          <MvSlider/>

          <h2>
            人と暖を結ぶ<br/>
            　　　本格焼き鳥で楽しむ
          </h2>

          <div className={styles.btn}>
            <Link href='/about' passHref>
              <a className='green_btn'>こだわり</a>
            </Link>
          </div>
        </section>

        <Flex className={styles.mv_info}>
          <h3>重要なお知らせ</h3>
          <Flex>
            <p>2022.11.01</p>
            <h4>宅配・テイクアウトはじめました。</h4>
            <IconContext.Provider value={{ size: '2.7rem', color: "white" }}>
                <TfiArrowCircleRight/>
            </IconContext.Provider>
          </Flex>
        </Flex>

        <Center as='section' id='about' className={styles.about}>
          <Center className={styles.wrap}>
            <div className={styles.left}>
              <h2>人暖楽について</h2>
              <Image src='/images/top/about.webp' alt='人暖楽について' width='90%' height='auto'/>
            </div>

            <div className={styles.right}>
              <p>
                人と暖とを結び粋な楽しさを提供する日常の中に溶け込み、ちょっと特別な一つの団欒の形を本格焼き鳥と美味しいお酒にて提供しております。
              </p>

              <Link href='/about' passHref>
                <a className={styles.white_btn}>
                  詳しく見る
                </a>
              </Link>
            </div>
          </Center>
        </Center>

        <Center as='section' id='menu' className={styles.menu}>
          <Center className={styles.title}>
            <h3>Menu Table</h3>
            <h2>お品書き</h2>
          </Center>

          <Center className={styles.wrap}>
            <Center>
              <p>焼</p>
            </Center>

            <Center>
              <p>刺</p>
            </Center>

            <Center>
              <p>飯</p>
            </Center>

            <Center>
              <p>揚</p>
            </Center>
          </Center>
          
          <Link href='' passHref>
            <a className='green_btn'>お品書き</a>
          </Link>

          <Center className={styles.reserve}>
            <Flex>
              <h3>
                誰からも<span>愛</span>される<br/>
                　　　旬を詰め込んだ
              </h3>

              <Link href='' passHref>
                <a className='black_btn'>予約する</a>
              </Link>
            </Flex>
          </Center>
        </Center>

        <Center as='section' id='concept' className={styles.concept}>
          <Center className={styles.wrap}>
            <div className={styles.left}>
              <h2>香ばしい</h2>
              <Image src='/images/top/concept01.webp' alt='コンセプト' width='29.7rem' height='29.7rem'/>
              <Image src='/images/top/concept02.webp' alt='本格的な炭火焼' width='47.7rem' height='40rem'/>
            </div>

            <Center className={styles.right}>
              <p>
                人暖楽では本格的な炭火を使用して鶏料理の良さを引き出す居酒屋です。お酒は炭火料理の香ばしさに合うものを各種取り揃えています、是非ご賞味ください。
              </p>
            </Center>
          </Center>
        </Center>

        <Center as='section' id='takeOut' className={styles.takeOut}>
          <Center className={styles.wrap}>
            <Flex className={styles.left}>
              <Center className={styles.title}>
                <h2>お持ち帰り</h2>
                <h3>TAKE OUT</h3>
              </Center>

              <p>テイクアウトは各種お取り扱いしております。詳しくは予約ページから選択ください。</p>
            </Flex>

            <Center className={styles.right}>
              <Image className='pc_only' src='/images/top/takeout.webp' alt='テイクアウト対応' width='48rem' height='auto'/>
              <Link href=''>
                <a className='black_btn'>予約する</a>
              </Link>
            </Center>
          </Center>
        </Center>

        <Center as='section' id='news' className={styles.news}>
          <Center className={styles.wrap}>
            <Flex className={styles.title}>
              <h2>お知らせ</h2>
              <h3>NEWS</h3>
            </Flex>

            <Center className={styles.content}>
              {NewsData.map((value, key) => {
                return(
                  <Center className={styles.outer} key={key}>
                    <Flex>
                      <Image src={`/images/news/${value.media}`} alt={value.title} width='100%' height='auto'/>
                      <p>{value.date}</p>
                      <h3>{value.title}</h3>
                    </Flex>
                  </Center>
                )
              })}
            </Center>

            <Link href='' passHref>
              <a className={styles.white_btn}>一覧へ</a>
            </Link>
          </Center>
        </Center>
      </main>
    </>
  )
}