import './App.css'
import ButtonFatec from './components/button-fatec'
import InputFatec from './components/input-fatec'

function App() {
  return (
    <form>
      <p>Formulário</p>
      <InputFatec type='text' value='' placeholder='Digite seu nome' />
      <br />
      <InputFatec type='text' value='' placeholder='Digite seu e-mail' />
      <br />
      <InputFatec type='number' value='' placeholder='Digite seu telefone' />
      <br /><br />
      <ButtonFatec type='submit' label='Enviar' />
    </form>
  )
}

export default App
