import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModel: () => void;
}

export function Header({onOpenNewTransactionModel}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModel}>
          Nova transação
        </button>
      </Content>
    </Container>
  ); 
}