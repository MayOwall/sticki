import Link from "next/link"
import { Icon } from "components"
import * as S from "./BottomNavBar.styles"

function NavIcon({ iconName, link }: { iconName: string; link: string }) {
  return (
    <div>
      <Link href={link}>
        <Icon name={iconName} width={2} alt={`${iconName} nav icon`} />
      </Link>
    </div>
  )
}

export function BottomNavBar({ ...props }) {
  return (
    <S.Container>
      <NavIcon iconName="fireIcon" link="#" />
      <NavIcon iconName="awardIcon" link="#" />
      <NavIcon iconName="bookMarkIcon" link="#" />
      <NavIcon iconName="logOutPurpleIcon" link="#" />
    </S.Container>
  )
}
