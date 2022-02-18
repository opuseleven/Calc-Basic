import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { ViewScreen, ClearButton, NegativeButton, DivideButton, NumberButton } from '../components';
import { MultiplyButton, SubtractButton, AddButton, ZeroButton, DecimalButton, EqualsButton } from '../components';
import { handleNumberClick, handleClearClick, handleSignClick, handleEqualsClick, handleNegativeClick } from '../services';

const Home: NextPage = () => {

  const [viewedNumber, setViewedNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [sign, setSign] = useState("");
  const [negative, setNegative] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Calc-Basic</title>
        <meta name="description" content="Basic calculator application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Calc-Basic
        </h1>

        <div className={styles.calculatorcontainer}>

          <ViewScreen number={viewedNumber}/>

          <div className={styles.buttonscontainer}>
            <ClearButton handleClick={() => handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative)} />
            <NegativeButton handleClick={() => handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber)} />
            <DivideButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "/", setViewedNumber, setStoredNumber, setSign, setNegative)} />
            <NumberButton number={7} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 7, negative, setNegative))} />
            <NumberButton number={8} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 8, negative, setNegative))} />
            <NumberButton number={9} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 9, negative, setNegative))} />
            <MultiplyButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "*", setViewedNumber, setStoredNumber, setSign, setNegative)} />
            <NumberButton number={4} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 4, negative, setNegative))} />
            <NumberButton number={5} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 5, negative, setNegative))} />
            <NumberButton number={6} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 6, negative, setNegative))} />
            <SubtractButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "-", setViewedNumber, setStoredNumber, setSign, setNegative)} />
            <NumberButton number={1} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 1, negative, setNegative))} />
            <NumberButton number={2} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 2, negative, setNegative))} />
            <NumberButton number={3} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 3, negative, setNegative))} />
            <AddButton handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative)} />
            <ZeroButton handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 0, negative, setNegative))} />
            <DecimalButton />
            <EqualsButton handleClick={() => handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative)} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
export default Home;
