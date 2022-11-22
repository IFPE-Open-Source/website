import styled from 'styled-components';
import Link from 'next/link';

export const Button = styled(Link)`
  background: ${({ theme }) => theme.primary};
  color: #f5f5f5;
  text-decoration: none;

  width: 56px;
  height: 56px;

  display: block;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }
`;
