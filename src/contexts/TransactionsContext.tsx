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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType);

export function TrasactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTansactions] = useState<ITransaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions');

    if (query) url.searchParams.append('q', query);

    const response = await fetch(url);
    const data = await response.json();

    setTansactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
