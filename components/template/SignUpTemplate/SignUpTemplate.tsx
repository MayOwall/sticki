import { BaseContainer, Logo, SignForm } from "components"
import Link from "next/link"
import * as S from "./SignUpTemplate.styles"

export function SignUpTemplate({ ...props }) {
  return (
    <S.Background>
      <S.Container>
        <BaseContainer width={14} padding="3rem 2rem 2rem 2rem" borderRadius={1}>
          <S.LogoContainer>
            <Logo width={5} />
          </S.LogoContainer>
          <SignForm formType="signUp"></SignForm>
          <S.LinkContainer>
            <Link href={"#"}>로그인 화면으로 돌아가기</Link>
          </S.LinkContainer>
        </BaseContainer>
      </S.Container>
    </S.Background>
  )
}
