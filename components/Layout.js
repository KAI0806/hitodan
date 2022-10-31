import { Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { NavData } from "./NavData";
import { IconContext } from 'react-icons'
import { MdRestaurantMenu } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import FooterSlider from "./FooterSlider";

export default function Layout({children}) {
    return (
        <>
            <Flex as='header'>
                <h1>
                    <Link href='/' passHref>
                        <a>
                            <Image src="/images/common/logo.webp" alt="人暖楽のロゴ" width='12.7rem' height='auto'/>
                        </a>
                    </Link>
                </h1>

                <nav className="pc_only">
                    <Flex as='ul'>
                        {NavData.map((value, key) => {
                            return(
                                <li key={key}>
                                    <Link href={value.url}>{value.title}</Link>
                                </li>
                            )
                        })}
                    </Flex>
                </nav>
            </Flex>

            <Center className="sideNav">
                <Center>
                    <Link href='/menu' passHref>
                        <a>
                            <IconContext.Provider value={{ size: '3.6rem' }}>
                                <p>お品書き</p>
                                <MdRestaurantMenu/>
                            </IconContext.Provider>
                        </a>
                    </Link>
                </Center>

                <Center>
                    <Link href='' passHref>
                        <a>
                            <p>ウーバーイーツ</p>
                            <Image src="/images/common/uber.webp" alt="ウーバーイーツ" width='4.2rem' height='4.2rem'/>
                        </a>
                    </Link>
                </Center>

                <Center>
                    <Link href='' passHref>
                        <a>
                            <p>出前館</p>
                            <Image src="/images/common/demaekan.webp" alt="出前館" width='4.5rem' height='3.6rem'/>
                        </a>
                    </Link>
                </Center>

                <Center>
                    <Link href='/menu' passHref>
                        <a>
                            <IconContext.Provider value={{ size: '3.6rem' }}>
                                <p>お品書き</p>
                                <FaPhoneAlt/>
                            </IconContext.Provider>
                        </a>
                    </Link>
                </Center>
            </Center>
            
            {children}

            <FooterSlider/>
            <footer>
                <Flex className="top">
                    <Center className="left">
                        <Image src="/images/common/insta.svg" alt="インスタグラム" width='8.567rem' height='auto'/>


                    </Center>

                    <div className="right">
                        <Center className="link">
                            <Center className="wrap">
                                <Link href='' passHref>
                                    <a><Image src="/images/common/logo.webp" alt="" width='32.2rem' height='auto'/></a>
                                </Link>

                                <Center>
                                    <Link href='' passHref>
                                        <a><Image src="/images/common/insta_logo.svg" alt="" width='5rem' height='5rem'/></a>
                                    </Link>

                                    <Link href='' passHref>
                                        <a><Image src="/images/common/twitter_logo.svg" alt="" width='5rem' height='5rem'/></a>
                                    </Link>

                                    <Link href='' passHref>
                                        <a><Image src="/images/common/facebook_logo.svg" alt="" width='5rem' height='5rem'/></a>
                                    </Link>
                                </Center>
                            </Center>
                            <p className="copy">©copyright hitodannraku co,.ltd</p>
                        </Center>

                        <Center className="category">
                            <p>page category</p>

                            <Center as="ul">
                                {NavData.map((value, key) => {
                                    return(
                                        <li key={key}>
                                            <Link href={value.url} passHref>
                                                <a>{value.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </Center>
                        </Center>
                    </div>
                </Flex>

                <Center className="bottom">
                    <iframe className="map pc_only" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.356072976828!2d139.80373649999999!3d35.8157385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189106007c33c9%3A0x5ec473252e54fd6b!2z44CSMzQwLTAwMjIg5Z-8546J55yM6I2J5Yqg5biC54Cs5bSO77yR5LiB55uu77yW4oiS77yV!5e0!3m2!1sja!2sjp!4v1666755614800!5m2!1sja!2sjp" style={{border: 'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                    <div>
                        <p>谷塚店（本店）</p>
                        <p>yatsukaten</p>
                        <p>〒340-0022 埼玉県草加市瀬崎1-6-5（Map）</p>
                    </div>

                    <iframe className="map sp_only" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.356072976828!2d139.80373649999999!3d35.8157385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189106007c33c9%3A0x5ec473252e54fd6b!2z44CSMzQwLTAwMjIg5Z-8546J55yM6I2J5Yqg5biC54Cs5bSO77yR5LiB55uu77yW4oiS77yV!5e0!3m2!1sja!2sjp!4v1666755614800!5m2!1sja!2sjp" style={{border: 'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div>
                        <p>TEL 048-951-5702</p>
                        <p>
                            ○営業時間<br/>
                            ［月～土］17:00〜5:00<br className="pc_only"/>
                            ［日］<span className="pc_inline">　　</span>17:00〜5:00　<br className="sp_only"/>※年中無休
                        </p>
                    </div>
                </Center>
            </footer>
        </>
    )
}