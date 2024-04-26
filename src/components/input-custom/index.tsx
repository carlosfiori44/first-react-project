import { Input } from '@chakra-ui/react'

interface Props{
    type: string
    value: string
    placeholder: string
}

function InputCustom({type, value, placeholder}: Props){
    return(
        <Input type={type} defaultValue={value} placeholder={placeholder} width={'250px'} />
    )

}

export default InputCustom