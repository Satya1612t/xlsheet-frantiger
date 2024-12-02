import { RecoilRoot } from 'recoil'
import SheetContainer from './containers/SheetContainer'
import Header from './components/Header'
import './App.css'

type Props = {}

function App({ }: Props) {
  return (
    <RecoilRoot>
      <Header />
      <SheetContainer />
    </RecoilRoot>
  )
}

export default App