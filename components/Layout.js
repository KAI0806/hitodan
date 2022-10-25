import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { NavData } from "./NavData";

export default function Layout({children}) {
    return (
        <>
            <header>
                <Flex>
                    <h1>
                        <Link href='/' passHref>
                            <a>
                                <Image src="" alt="" width='12.7rem' height='auto'/>
                            </a>
                        </Link>
                    </h1>
                </Flex>
                
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
            </header>
            {children}
            <footer></footer>
        </>
    )
}