import { Container, Form, Titulo, Input, Button } from './register';

export function Register() {
    return (
        <Container>
            <Form>
                <Titulo>Cadastre-se </Titulo>
                <Input placeholder='Nome' />
                <Input placeholder='Email' />
                <Input placeholder='senha' />
                <Input placeholder='confirmar senha' />
                <Button>Cadastrar</Button>
                <Button>Voltar</Button>
            </Form>
        </Container>
    )
}