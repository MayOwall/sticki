export interface IBaseCardContainerProps {
  width?: number | string
  height?: number | string
  padding?: string
  borderRadius?: number
  backgroundColor?: string
  children: JSX.Element[] | JSX.Element
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
  backgroundColor: string
  image?: string
}

export interface IGreetingProps {
  userName: string
}

export interface IPageTitleProps {
  title: string
  desc: string
}

export interface IProgressBarProps {
  percentage: number
}
