import Header from '../../components/Header';
import Summary from '../../components/Summary';
import SearchForm from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width='40%'>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='40%'>Hamburguer</td>
              <td>
                <PriceHighlight variant='outcome'>- R$ 590,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td width='40%'>Computador</td>
              <td>
                <PriceHighlight variant='income'>R$ 5,400,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};

export default Transactions;
