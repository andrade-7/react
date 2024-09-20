

import "./App.css"
import { useState } from "react"
import { lista } from "./utils/itens"
import { Botao } from "./components/botao"
import { Card } from "./components/card"


function App() {
  const  [linguagem, setLinguagem] = useState({})
    return (
    <>
    <div className="container_botoes">
      <Botao funcaoDoClick={()=> setLinguagem(lista[0])} texto={"Javascript"}/>
      <Botao funcaoDoClick={()=> setLinguagem(lista[1])} texto={"Python"}/>
      <Botao funcaoDoClick={()=> setLinguagem(lista[2])} texto={"HTML"}/>
      <Botao funcaoDoClick={()=> setLinguagem(lista[3])} texto={"CSS"}/>
    </div>

    {linguagem && <Card linguagem_recebida={linguagem}/> }
    </>
  )
}
export default App
