import ButtonFatec from "../button-fatec"
import InputFatec from "../input-fatec"

function Formulario(){
    return(
    <form>
      <h1>Formulário</h1>
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

export default Formulario