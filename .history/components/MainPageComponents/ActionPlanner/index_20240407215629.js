import ButtonAndBack from "@/components/ButtonAndBack";
import Link from "next/link";

export default function ActionPlanner(){



    return(
        <>
            <Link href="/quiz">
                <ButtonAndBack
                    buttonText="START!"
                    buttonColorBg="var(--white)"
                    buttonColorPrimary="var(--green)"
                />
            </Link>
            <p>HELEOEOEOEOEEO</p>
        </>
    )
}