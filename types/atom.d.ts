export interface IBaseCardContainerProps {
  width: number | null
  height: number | null
  padding: number | null
  borderRadius: number
  backgroundColor: string
  children: JSX.Element
}

export interface ILogoProps {
  width?: number
}

export interface IIconProps {
  name: string
  width?: number
  alt: string
}
