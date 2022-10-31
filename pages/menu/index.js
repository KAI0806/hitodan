import { Center, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/menu.module.css'
import { IconContext } from 'react-icons'
import { MdOutlinePictureAsPdf } from 'react-icons/md'
import { FoodsData } from "../../components/FoodsData";
import Reserve from "../../components/Reserve";

export default function Menu(){
    return(
        <>
            <Head>
                <title>お品書き｜やきとり＆美味しいお酒｜人暖楽</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="お品書き｜やきとり＆美味しいお酒｜人暖楽" />
                <meta property="og:site_name" content="お品書き｜やきとり＆美味しいお酒｜人暖楽" />
                <meta name="twitter:title" content="お品書き｜やきとり＆美味しいお酒｜人暖楽" />
            </Head>

            <main>
                <div className={styles.kv}></div>

                <Center as="section" id="content01" className={styles.content01}>
                    <Center className={styles.wrap}>
                        <Flex className={styles.left}>
                            <h2>お品書きー</h2>
                            <Image src="/images/menu/content01.webp" alt="本格炭火居酒屋" width='43.4rem' height='31.85rem'/>
                        </Flex>

                        <Center className={styles.right}>
                            <p>人と暖とを結び粋な楽しさを提供する日常の中に溶け込み、ちょっと特別な一つの団欒の形を本格焼き鳥と美味しいお酒にて提供しております。</p>
                        </Center>
                    </Center>
                </Center>

                <section id="container" className={styles.container}>
                    <div className={styles.title}>
                        <Center className={styles.wrap}>
                            <Center className={styles.left}>
                                <h3>鳥本来の良さ引き出す</h3>
                            </Center>

                            <Center className={styles.right}>
                                <Image src="/images/menu/food01.webp" alt="炭火" width='21.3rem' height='auto'/>
                                <Image src="/images/menu/food02.webp" alt="炭火焼き鳥" width='34.62rem' height='auto'/>
                            </Center>
                        </Center>
                    </div>

                    <Center className={styles.contain}>
                        <Center className={styles.category}>
                            <h2>焼き物</h2>
                            <p>
                                あべどり、べにぶじどり<br/>
                                だいせんどり、やさい
                            </p>
                        </Center>
                        
                        <Flex className={styles.wrap}>
                            {FoodsData.map((value, key) => {
                                return(
                                    <div className={styles.content} key={key}>
                                        <Image src={`/images/menu/${value.media}`} alt={value.name} width='100%' height='auto'/>

                                        <div className={styles.txt}>
                                            <Flex>
                                                <h4>{value.name}</h4>
                                                <p>{value.price}円 (税込)</p>
                                            </Flex>

                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Flex>

                        <Link href='' passHref>
                            <a>
                                メニューを見る
                                <IconContext.Provider value={{ size: '2.7rem', color: "white" }}>
                                    <MdOutlinePictureAsPdf/>
                                </IconContext.Provider>
                            </a>
                        </Link>
                    </Center>

                    <Reserve/>
                </section>

                {/* その他 */}
                <section id="container" className={styles.container}>
                    <div className={styles.title}>
                        <Center className={styles.wrap}>
                            <Center className={styles.left}>
                                <h3>素材にこだわった各種</h3>
                            </Center>

                            <Center className={styles.right}>
                                <Image src="/images/menu/food03.webp" alt="炭火" width='21.3rem' height='auto'/>
                                <Image src="/images/menu/food04.webp" alt="炭火焼き鳥" width='34.62rem' height='auto'/>
                            </Center>
                        </Center>
                    </div>

                    <Center className={styles.contain}>
                        <Center className={styles.category}>
                            <h2>その他</h2>
                            <p>
                                唐揚げ、親子丼、鳥刺し<br/>
                                アラカルト各種
                            </p>
                        </Center>
                        
                        <Flex className={styles.wrap}>
                            {FoodsData.map((value, key) => {
                                return(
                                    <div className={styles.content} key={key}>
                                        <Image src={`/images/menu/${value.media}`} alt={value.name} width='100%' height='auto'/>

                                        <div className={styles.txt}>
                                            <Flex>
                                                <h4>{value.name}</h4>
                                                <p>{value.price}円 (税込)</p>
                                            </Flex>

                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Flex>

                        <Link href='' passHref>
                            <a>
                                メニューを見る
                                <IconContext.Provider value={{ size: '2.7rem', color: "white" }}>
                                    <MdOutlinePictureAsPdf/>
                                </IconContext.Provider>
                            </a>
                        </Link>
                    </Center>

                    <Reserve/>
                </section>
            </main>
        </>
    )
}