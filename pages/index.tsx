import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import {
  ViewScreen, ClearButton, NegativeButton, DivideButton,
  NumberButton, MultiplyButton, SubtractButton, AddButton,
  ZeroButton, DecimalButton, EqualsButton } from '../components';
import {
  handleNumberClick, handleSignClick, handleEqualsClick,
  handleDecimalClick } from '../services';

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
        <meta name="description" content="Calc-Basic calculator application" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.calculatorcontainer}>

          <span className={styles.calclogo}>Calc-Basic</span>

          <ViewScreen number={viewedNumber}/>

          <div className={styles.buttonscontainer}>

            <ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber}
              setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative}
              setDecimal={setDecimal} />

            <NegativeButton negative={negative} viewedNumber={viewedNumber}
              setNegative={setNegative} setViewedNumber={setViewedNumber} />

            <DivideButton viewedNumber={viewedNumber} storedNumber={storedNumber}
              sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
              setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />

            <NumberButton number={7} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <NumberButton number={8} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <NumberButton number={9} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <MultiplyButton viewedNumber={viewedNumber} storedNumber={storedNumber}
              sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
              setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />

            <NumberButton number={4} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <NumberButton number={5} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <NumberButton number={6} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
              negative={negative} decimal={decimal} />

            <SubtractButton viewedNumber={viewedNumber} storedNumber={storedNumber}
              sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
              setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />

            <NumberButton number={1} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber} negative={negative} decimal={decimal} />
            <NumberButton number={2} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber} negative={negative} decimal={decimal} />
            <NumberButton number={3} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber} negative={negative} decimal={decimal} />

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
