import Button from "../../component/button/button";
import Input from "../../component/input/input";
import { Container, ContainerForm, Subtitle, Title } from "../../component/styledComponents/style";


function LoginPage({onShowNewUser, onShowHome}) {
  return (
    <Container>      
      <ContainerForm>
        <Title align="center">MyBus</Title>
        <Subtitle align="center">Seu ônibus no ponto!</Subtitle>

        <Input label="E-mail" placeholder="email@example.com" />
        <Input label="Senha" type="password" placeholder="Sua senha" />
				<Button name="Entrar" type="fill" onClick={onShowHome}/>
				<Button name="Novo Cadastro" type="outline" onClick={onShowNewUser}/>        
      </ContainerForm>
    </Container>
  );
}

export default LoginPage;
