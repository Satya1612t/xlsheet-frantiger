import { RecoilRoot } from 'recoil'
import SheetContainer from './containers/SheetContainer'

type Props = {}

function App({ }: Props) {
  return (
    <RecoilRoot>
      <SheetContainer>Jell</SheetContainer>
    </RecoilRoot>
  )
}

export default App