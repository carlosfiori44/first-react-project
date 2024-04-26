import { Button } from '@chakra-ui/react'

interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function CustomButton({type, label}: Props){
    return (
        <Button type={type} colorScheme='blue' variant='outline' size='lg'>
            {label}
        </Button>
    )
}

export default CustomButton 