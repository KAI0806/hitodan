import { Center, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/about.module.css'

export default function about(){
    return(
        <>
            <Head>
                <title>人暖楽について｜やきとり＆美味しいお酒｜人暖楽</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="人暖楽について｜やきとり＆美味しいお酒｜人暖楽" />
                <meta property="og:site_name" content="人暖楽について｜やきとり＆美味しいお酒｜人暖楽" />
                <meta name="twitter:title" content="人暖楽について｜やきとり＆美味しいお酒｜人暖楽" />
            </Head>
        
            <main>
                <div className={styles.kv}>
                    
                </div>

                <Center as="section" id="content01" className={styles.content01}>
                    <Center className={styles.wrap}>
                        <Flex className={styles.left}>
                            <h2>人暖楽について</h2>
                            <Image src="/images/about/content01.webp" alt="本格炭火居酒屋" width='43.4rem' height='31.85rem'/>
                        </Flex>

                        <Center className={styles.right}>
                            <p>人と暖とを結び粋な楽しさを提供する日常の中に溶け込み、ちょっと特別な一つの団欒の形を本格焼き鳥と美味しいお酒にて提供しております。</p>
                            <h3>自慢の本格焼き鳥</h3>
                            <p>人暖楽では鮮度にこだわった鶏肉を使用店長が一品ずつ丁寧に串にし絶妙な火加減にて焼き鳥にしております。1本2本とついつい食べたくなる一品です。</p>
                        </Center>
                    </Center>
                </Center>

                <Center as="section" id="content02" className={styles.content02}>
                    <Center className={styles.wrap}>
                        <Center className={styles.left}>
                            <div>
                                <Image src="/images/about/content02_img01.webp" alt="炭火" width='15rem' height='15rem'/>
                                <Image src="/images/about/content02_img02.webp" alt="炭火焼き鳥" width='24.2rem' height='auto'/>
                            </div>

                            <h2>鳥本来の良さ引き出す</h2>
                        </Center>

                        <div className={styles.right}>
                            <h3>本格炭火で締める</h3>
                            <p>人暖楽では本格的な炭火を使用して鶏料理の良さを引き出す居酒屋です。お酒は炭火料理の香ばしさに合う各種取り揃えているので、是非ご賞味ください。</p>
                        </div>
                    </Center>
                </Center>

                <Center as="section" id="content03" className={styles.content03}>
                    <Flex>
                        <h3>
                            誰からも<span>愛</span>される<br/>
                            　　　旬を詰め込んだ
                        </h3>

                        <Link href='' passHref>
                            <a className='green_btn pc_only'>予約する</a>
                        </Link>
                    </Flex>
                    <Link href='' passHref>
                            <a className='green_btn sp_only'>予約する</a>
                        </Link>
                </Center>
            </main>
        </>
    )
}