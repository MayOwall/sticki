import { ILogoProps } from "types"
import Image from "next/image"
import { logo } from "public/image"

export function Logo({ width }: ILogoProps) {
  return (
    <Image
      src={logo}
      width={width ? width * 16 : 6.5 * 16}
      height={width ? width * 0.31 * 16 : 32}
      alt="hello"
    />
  )
}

Logo.defaultProps = {
  width: 6.5,
}
