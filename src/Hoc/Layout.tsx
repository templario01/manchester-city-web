import { Footer } from '../components/molecules/Footer'
import Header from '../components/molecules/Header'

export const Layout: React.FC<any> = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
