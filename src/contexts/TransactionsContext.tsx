import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ICreateTransactionInput {
  description: string;
  type: string;
  price: number;
  category: string;
}

interface ITransactionContextType {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: ICreateTransactionInput) => Promise<void>;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType);

export function TrasactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTansactions] = useState<ITransaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTansactions(response.data);
  }

  async function createTransaction(data: ICreateTransactionInput) {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date(),
    });

    setTansactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
