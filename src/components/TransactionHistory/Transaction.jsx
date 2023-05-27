import PropTypes from 'prop-types';
import {
  TransactionRow,
  TransactionType,
  GeneralTableCells,
} from './TransactionHistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionRow>
      <TransactionType>{type}</TransactionType>
      <GeneralTableCells>{amount}</GeneralTableCells>
      <GeneralTableCells>{currency}</GeneralTableCells>
    </TransactionRow>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
