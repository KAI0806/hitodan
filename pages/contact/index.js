import { Center, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import styles from '../../styles/contact.module.css'
import Reserve from "../../components/Reserve";
import Script from "next/script";

export default function Contact(){
    return (
        <>
            <Head>
                <title>お問合せ｜やきとり＆美味しいお酒｜人暖楽</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="お問合せ｜やきとり＆美味しいお酒｜人暖楽" />
                <meta property="og:site_name" content="お問合せ｜やきとり＆美味しいお酒｜人暖楽" />
                <meta name="twitter:title" content="お問合せ｜やきとり＆美味しいお酒｜人暖楽" />

                <Script id="formrun" src="https://sdk.form.run/js/v2/formrun.js"></Script>
            </Head>

            <main>
                <div className={styles.kv}></div>

                <Center as="section" id="content01" className={styles.content01}>
                    <Center className={styles.wrap}>
                        <Flex className={styles.left}>
                            <h2>お問合せ</h2>
                            <p>
                                ご質問<br/>
                                ご連絡はこちらで
                            </p>
                        </Flex>

                        <Center className={styles.right}>
                            <p>ご質問、ご不明点のご連絡は下記フォームに必要事項を記入後、送信ボタンを押してください。</p>
                        </Center>
                    </Center>
                </Center>

                <Center as="section" className={styles.container}>
                    <form className="formrun" action="https://form.run/api/v1/r/owdlps7j7p99qtsgv3mcv04c" method="post">
                        {/* <!-- ↓自由に要素を追加・編集することができます --> */}
                        <Flex>
                            <label>お名前</label>
                            <input name="お名前" type="text" data-formrun-required placeholder="例）田中 太郎"/>
                        </Flex>

                        <Flex>
                            <label>電話番号</label>
                            <input name="電話番号" type='text' data-formrun-type="tel" data-formrun-required placeholder="例）00-0000-0000"/>
                        </Flex>

                        <Flex>
                            <label>メールアドレス</label>
                            <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required placeholder="例）info@sample.com"/>
                        </Flex>

                        <Flex>
                            <label>お問い合わせ</label>
                            <textarea name="お問い合わせ" data-formrun-required placeholder="例）商品について"></textarea>
                        </Flex>

                        {/* <!-- ボット投稿をブロックするためのタグ --> */}
                        <div id={styles.gotcha} className="_formrun_gotcha" style={{position:'absolute!important', height: '1px', width: '1px', overFliw: 'hidden', marginBottom: '0'}}>
                            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex="-1"/>
                        </div>

                        <Center className="btn_wrap">
                            <button type="submit" data-formrun-error-text="未入力の項目があります">送信する</button>
                        </Center>
                    </form>
                </Center>

                <Reserve/>
            </main>
        </>
    );
}