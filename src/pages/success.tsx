import Link from "next/link"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"

export default function Success() {
return (
    <SuccessContainer>
        <h1> Compra efetuada!</h1>
        <ImageContainer> 

        </ImageContainer>

        <p>
            Uhuul <strong>Junio Batista</strong>, sua camiseta já está à caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>

    </SuccessContainer>
)
}