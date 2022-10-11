import { BaseContainer, Logo, SignForm } from "components"
import Link from "next/link"
import * as S from "./SignInTemplate.styles"

export function SignInTemplate({ ...props }) {
  return (
    <S.Background>
      <S.Container>
        <BaseContainer width={14} padding="3rem 2rem 2rem 2rem" borderRadius={1}>
          <S.LogoContainer>
            <Logo width={5} />
          </S.LogoContainer>
          <SignForm formType="signIn"></SignForm>
          <S.LinkContainer>
            <Link href={"#"}>회원 가입 하기</Link>
          </S.LinkContainer>
        </BaseContainer>
      </S.Container>
    </S.Background>
  )
}
