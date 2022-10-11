import { SignButton, SignInput } from "components"
import * as S from "./SignForm.styles"
import { ISignFormProps } from "types"

function SignInForm({ isAlertVisible }: { isAlertVisible: boolean }) {
  return (
    <>
      <SignInput
        labelContent="E-MAIL"
        alertContent="이메일을 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
      <SignInput
        labelContent="PASSWORD"
        alertContent="비밀번호를 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
    </>
  )
}

function SignUpForm({ isAlertVisible }: { isAlertVisible: boolean }) {
  return (
    <>
      <SignInput
        labelContent="USERNAME"
        alertContent="이름을 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
      <SignInput
        labelContent="E-MAIL"
        alertContent="이메일을 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
      <SignInput
        labelContent="PASSWORD"
        alertContent="비밀번호를 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
      <SignInput
        labelContent="PASSWORD CONFIRM"
        alertContent="비밀번호를 일치하게 입력 해 주세요"
        isAlertVisible={isAlertVisible}
      />
    </>
  )
}
export function SignForm({ formType }: ISignFormProps) {
  return (
    <S.Form>
      {formType === "signIn" ? (
        <SignInForm isAlertVisible={true} />
      ) : (
        <SignUpForm isAlertVisible={true} />
      )}
      <SignButton content={formType === "signIn" ? "로그인" : "회원 가입"} width={15} />
    </S.Form>
  )
}

SignForm.defaultValue = {
  formType: "signIn",
}
