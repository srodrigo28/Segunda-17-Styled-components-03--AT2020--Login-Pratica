import {
    Container,
    Form,
    Titulo,
    Input,
    Button
} from './login';

export function Login() {
    return (
        <Container>
            <Form>
                <Titulo>Login App</Titulo>
                <Input placeholder='email@email.com' />
                <Input placeholder='senha' type='password' />
                <Button>Entrar</Button>
                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}