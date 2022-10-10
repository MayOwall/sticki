import { ILogoProps } from "types"
import * as S from "./Logo.styles"
import Image from "next/image"
import { logo } from "public/image"

export function Logo({ width }: ILogoProps) {
  return (
    <S.Container width={width}>
      <Image src={logo} width={100} height={30} alt="hello" />
    </S.Container>
  )
}

Logo.defaultProps = {
  width: 6.5,
}
