import { useState } from "react"
import { IGreetingProps } from "types"
import * as S from "./Greeting.styles"

const greetingMents = [
  "오늘도 오늘의 스티커를 향해 달려 볼까요? ♪( 'ω' و)و",
  "지금까지 너무 잘 해 오고 있어요! 오늘도 화이팅 :3",
  "오늘의 목표는 무엇인가요?? 남은 하루도 화이팅 :)",
]

export function Greeting({ userName, ...props }: IGreetingProps) {
  const greetingMent = greetingMents[Math.floor(Math.random() * 3)]

  return (
    <S.Container style={{ ...props }}>
      <div>
        <S.UserName>{userName}</S.UserName>
        <span>님,</span>
      </div>
      <S.GreetingMent>{greetingMent}</S.GreetingMent>
    </S.Container>
  )
}
