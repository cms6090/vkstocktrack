import styled from 'styled-components';

const Container = styled.div`
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 500px;
  /* background-color: #fcfff6; */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 22%;
  }

  .wait-moment {
    position: absolute;
    top: 62%;

    color: #616e85;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.48px;
  }

  p {
    position: absolute;
    top: 56%;

    color: #19171a;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.48px;
    text-transform: capitalize;
  }

  .loader {
    display: block;
    position: relative;
    height: 25px;
    width: 45%;
    background: #dcdcdc;
    border-radius: 100px;
    overflow: hidden;

    text-align: center;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.48px;
    text-transform: capitalize;
  }
  .loader::after {
    content: '';
    width: 40%;
    height: 100%;
    background: ${({ theme }) => theme?.colors?.primaryColor};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-radius: 100px;
    animation: animloader 2s linear infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;

const LoadingProgressScreen = () => {
  return (
    <Container>
      <span className="loader"></span>
      <p>Predicting with VKStockTrack AI ...</p>
      <p className="wait-moment">
        This process may take a few minutes, thanks for your time.
      </p>
    </Container>
  );
};

export default LoadingProgressScreen;
