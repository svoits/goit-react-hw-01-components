import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 270px;
  height: 100%;
  margin: 50px auto;
  padding: 30px 0 0;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0px 3px 10px 1px rgba(189, 189, 189, 1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  display: block;
  width: 125px;
  margin-bottom: 30px;

  background-color: cyan;
  border-radius: 50%;
`;

export const Username = styled.p`
  margin-bottom: 10px;

  font-size: 22px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;

  /* padding: 20px; */

  border-top: 1px solid #e8e8e8;
  background-color: #f0f0f0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 6px;

  padding: 16px 5px;

  :not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
`;

export const Label = styled.span`
  display: block;

  font-size: 12px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Quantity = styled.span`
  display: block;

  font-weight: 600;
`;
