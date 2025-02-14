import styled from "styled-components";

const Container = styled.div`
	display: block;
	margin: 5px 0;
`
const LabelInput = styled.label`
	font-size: .8em;
	text-align: left !important;
`
const ContentInput = styled.input`
	width: calc(100% - 10px);
	background: transparent;	
	padding: 5px 0 5px 10px;
	border-radius: 10px;
	border: none;	
	font-size: 1em;
	margin-bottom: 10px;
	box-shadow: 0px 0px 10px #ddd;
	margin: 0;
	&::placeholder {
		font-size: 1em;
	}
`

function Input({label, type, placeholder}) {
	return (
		<Container>
			<div>
				<LabelInput>{label}</LabelInput>
			</div>
			<div>
				<ContentInput type={type || 'text'} placeholder={placeholder}/> 
			</div>				
		</Container>
	)
}

export default Input;