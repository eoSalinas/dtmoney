import { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal";

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from "../../hooks/useTransactions";

import { BoxRadio, Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpenStatus: boolean,
  onCloseModal: () => void,
}

export function NewTransactionModal ({isOpenStatus, onCloseModal}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    onCloseModal();
  }

  return (
    <ReactModal 
        isOpen={isOpenStatus}
        onRequestClose={onCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onCloseModal} 
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar nova transação</h2>

          <input 
            type="text"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
           />

          <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <BoxRadio
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor='green'
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </BoxRadio>

            <BoxRadio
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor='red'
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </BoxRadio>
          </TransactionTypeContainer>

          <input 
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
    </ReactModal>
  );
}