import Image from "next/image"
import IconList from "public/IconList"
import { IIconProps } from "types"

export function Icon({ name, width, alt }: IIconProps) {
  return (
    <Image
      src={IconList[name]}
      width={width ? width * 16 : 100}
      height={width ? width * 16 : 100}
      alt={alt}
    />
  )
}

Icon.defaultProps = {
  name: "inputDeleteButton",
  alt: "inputDeleteButton",
}
