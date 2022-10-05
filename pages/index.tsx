import { useRecoilState } from "recoil"
import { pageNameState } from "states"
import Link from "next/link"

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return <div>hello this is test</div>
}

export default IndexPage
