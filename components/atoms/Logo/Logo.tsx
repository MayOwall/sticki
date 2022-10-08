import Image from "next/image"
import { ILogoProps } from "types"
import * as S from "./Logo.styles"

export function Logo({ width }: ILogoProps) {
  return <S.Container width={width}></S.Container>
}

Logo.defaultProps = {
  width: 6.5,
}
