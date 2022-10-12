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

export interface ISignButtonProps {
  content?: string
  width?: number
  color?: string
  backgroundColor?: string
}

export interface ICurrentNumberProps {
  width?: number
  title?: string
  count: number
}

export interface IDashBoardButtonProps {
  title: string
  desc: string
  width?: number
  height: number
  image?: ImageData
}
