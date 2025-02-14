import Button from "../../component/button/button";
import Input from "../../component/input/input";
import { Container, ContainerForm, Subtitle, Title } from "../../component/styledComponents/style";

function NewUserPage({onShowNewUser}) {
	return (
		<Container>      
      <ContainerForm>
        <Title align="center">MyBus</Title>
        <Subtitle align="center">Novo Usuário</Subtitle>

        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Data de Nascimento" type="date" placeholder="Digite sua data de nascimento" />
				<Input label="E-mail" type="email" placeholder="Digite seu nome" />
				<Input label="Senha" placeholder="Digite sua senha" />
				<Input label="Confirmar Senha" placeholder="Digite sua senha novamente" />
				<Button name="Cadastrar" type="fill" onClick={onShowNewUser}/>
				     
      </ContainerForm>
    </Container>
	)
}

export default NewUserPage;