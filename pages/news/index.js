import Head from "next/head";
import styles from '../../styles/news.module.css'
import { Center, Flex, Image } from "@chakra-ui/react";
import { NewsData } from "../../components/NewsData";

export default function News() {
    return (
        <>
            <Head>
                <title>お知らせ｜やきとり＆美味しいお酒｜人暖楽</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="お知らせ｜やきとり＆美味しいお酒｜人暖楽" />
                <meta property="og:site_name" content="お知らせ｜やきとり＆美味しいお酒｜人暖楽" />
                <meta name="twitter:title" content="お知らせ｜やきとり＆美味しいお酒｜人暖楽" />
            </Head>

            <main>
                <div className={styles.kv}></div>

                <Center as="section" id="content01" className={styles.content01}>
                    <Center className={styles.wrap}>
                        <Flex className={styles.left}>
                            <h2>お知らせー</h2>
                            <Image src="/images/menu/content01.webp" alt="本格炭火居酒屋" width='43.4rem' height='31.85rem'/>
                        </Flex>

                        <Center className={styles.right}>
                            <p>人暖楽での最新情報はこちらからご覧ください。テイクアウトも行っていますので、是非一度こだわりの焼き鳥をご賞味ください。</p>
                        </Center>
                    </Center>
                </Center>

                <Center as="section" className={styles.container}>
                    <Center className={styles.wrap}>
                        {NewsData.map((value, key) => {
                            return(
                                <div className={styles.content} key={key}>
                                    <Image src={`/images/news/${value.media}`} alt={value.title} width='100%' height='auto'/>
                                    <div>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Center>
                </Center>
            </main>
        </>
    );
}