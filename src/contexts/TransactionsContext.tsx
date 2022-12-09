import { createContext, ReactNode, useEffect, useState } from 'react';

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ITransactionContextType {
  transactions: ITransaction[];
}

interface ITransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType);

export function TrasactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTansactions] = useState<ITransaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTansactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
