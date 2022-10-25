import { Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { NavData } from "./NavData";
import { IconContext } from 'react-icons'
import { MdRestaurantMenu } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

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

                <nav>
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
            <footer></footer>
        </>
    )
}