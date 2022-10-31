import { Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Reserve() {
    return (
        <Center className='reserve_sec'>
            <Link href='' passHref>
                <a className='green_btn'>予約する</a>
            </Link>

            <p>［月～土］17:00〜5:00［日］17:00〜5:00 ※年中無休</p>
        </Center>
    );
}