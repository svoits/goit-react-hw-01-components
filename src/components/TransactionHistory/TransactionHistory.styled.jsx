import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  min-width: 400px;
  margin: 0 auto 50px;
  border-collapse: collapse;

  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  overflow: hidden;
`;

export const TableHead = styled.thead`
  height: 25px;

  tr {
    background-color: #009879;
    color: #ffffff;
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-of-type(even) {
    background-color: #f5f5f5;
  }

  tr:hover {
    color: #00bf99;
  }
`;

export const TransactionRow = styled.tr`
  text-align: center;
`;

export const HeadTitles = styled.th`
  text-transform: capitalize;
  padding: 12px 15px;
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
  padding: 12px 15px;
`;

export const GeneralTableCells = styled.td`
  padding: 12px 15px;
`;
