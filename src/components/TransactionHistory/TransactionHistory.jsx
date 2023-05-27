import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import {
  TransactionsTable,
  TableHead,
  TransactionRow,
  HeadTitles,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TransactionRow>
          <HeadTitles>Type</HeadTitles>
          <HeadTitles>Amount</HeadTitles>
          <HeadTitles>Currency</HeadTitles>
        </TransactionRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
