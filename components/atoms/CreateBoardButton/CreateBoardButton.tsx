import { Icon } from "components"
import * as S from "./CreateBoardButton.styles"

export function CreateBoardButton({ ...props }) {
  return (
    <S.Button style={{ ...props }}>
      <Icon name="createBoardIcon" width={1.5} />
    </S.Button>
  )
}
