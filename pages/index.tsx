import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import {
  ViewScreen, ClearButton, NegativeButton, DivideButton,
  NumberButton, MultiplyButton, SubtractButton, AddButton,
  ZeroButton, DecimalButton, EqualsButton } from '../components';
import {
  handleNumberClick, handleClearClick, handleSignClick, handleEqualsClick,
  handleNegativeClick, handleDecimalClick } from '../services';

const Home: NextPage = () => {

  const [viewedNumber, setViewedNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [sign, setSign] = useState("");
  const [negative, setNegative] = useState(false);
  const [decimal, setDecimal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Calc-Basic</title>
        <meta name="description" content="Basic calculator application" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.calculatorcontainer}>

          <span className={styles.calclogo}>Calc-Basic</span>
          <ViewScreen number={viewedNumber}/>

          <div className={styles.buttonscontainer}>
            <ClearButton handleClick={() => handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)} />
            <NegativeButton handleClick={() => handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber)} />
            <DivideButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "/", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
              sign={sign} />
            <NumberButton number={7} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 7, negative, decimal))} />
            <NumberButton number={8} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 8, negative, decimal))} />
            <NumberButton number={9} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 9, negative, decimal))} />
            <MultiplyButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "*", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
              sign={sign} />
            <NumberButton number={4} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 4, negative, decimal))} />
            <NumberButton number={5} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 5, negative, decimal))} />
            <NumberButton number={6} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 6, negative, decimal))} />
            <SubtractButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "-", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
              sign={sign} />
            <NumberButton number={1} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 1, negative, decimal))} />
            <NumberButton number={2} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 2, negative, decimal))} />
            <NumberButton number={3} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 3, negative, decimal))} />
            <AddButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
              sign={sign} />
            <ZeroButton handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 0, negative, decimal))} />
            <DecimalButton handleClick={() => handleDecimalClick(viewedNumber, decimal, setDecimal)} />
            <EqualsButton handleClick={() => handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal)} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
export default Home;
