import { css } from 'styled-components';

type textStylesInterface = {
  size?: string;
  weight?: number;
  color?: string;
};

const textStyle = ({ size }: textStylesInterface) => css`
  font-size: ${({ theme }) => size || theme.fontSize.base};
`;

const mixins = { textStyle };

export default mixins;
