import { css } from 'styled-components';

const utility = css`
  .select-assets-digital {
    display: flex;
    gap: 5px;
  }

  .modal-connect-wallet {
    .wrap-modal {
      text-align: center;
      padding: 30px 40px;
    }

    .wrap-modal h5 {
      margin: 16px 0px;
      margin-bottom: 25px;
    }

    .wrap-card-wallet {
      background: #ffffff;
      border: 0.5px solid #000000;
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-bottom: 30px;

      height: 50px;
      position: relative;
      cursor: pointer;
    }
  }
`;

export default utility;
