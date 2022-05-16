import { useState } from "react";

import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./style/global";

ReactModal.setAppElement('#root');

export function App() {
  // Modal Config
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModel() {
    setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModel() {
    setIsOpenNewTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModel={handleOpenNewTransactionModel}
      />
      <Dashboard />
      <NewTransactionModal isOpenStatus={isOpenNewTransactionModal} onCloseModal={handleCloseNewTransactionModel} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
