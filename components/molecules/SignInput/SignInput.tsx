import { Icon } from "components/atoms/Icon"
import * as S from "./SignInput.styles"
import { ISignInputProps } from "types"

export function SignInput({ labelContent, alertContent, isAlertVisible }: ISignInputProps) {
  return (
    <S.InputContainer>
      <S.Label>
        {labelContent} <S.Input />
      </S.Label>
      <S.IconContainer>
        <Icon name="inputDeleteButton" width={1} alt="inputDeleteButton"></Icon>
      </S.IconContainer>
      <S.Alert isAlertVisible={isAlertVisible}>{alertContent}</S.Alert>
    </S.InputContainer>
  )
}

SignInput.defaultProps = {
  labelContent: "test label",
  alertContent: "test alert, 테스트용 경고",
  isAlertVisible: false,
}
