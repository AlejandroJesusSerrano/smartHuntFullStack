import NavBar from "../NavBar/NavBar";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";


export const Container = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Hola Mundo"/>
    </div>
  )
}

export default Container
