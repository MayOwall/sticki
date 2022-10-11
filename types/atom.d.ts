export interface IBaseCardContainerProps {
  width?: number
  height?: number
  padding?: string
  borderRadius?: number
  backgroundColor?: string
  children: JSX.Element[]
}

export interface ILogoProps {
  width?: number
}

export interface IIconProps {
  name: string
  width?: number
  alt: string
}

interface ISignButtonProps {
  content?: string
  width?: number
  color?: string
  backgroundColor?: string
}
