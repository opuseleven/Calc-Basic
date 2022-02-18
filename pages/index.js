import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { ViewScreen, ClearButton, NegativeButton, DivideButton, NumberButton } from '../components';
import { MultiplyButton, SubtractButton, AddButton, ZeroButton, DecimalButton, EqualsButton } from '../components';

export default function Home() {

  const [viewedNumber, setViewedNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [sign, setSign] = useState("");

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
            <ClearButton />
            <NegativeButton />
            <DivideButton />
            <NumberButton number={7} />
            <NumberButton number={8} />
            <NumberButton number={9} />
            <MultiplyButton />
            <NumberButton number={4} />
            <NumberButton number={5} />
            <NumberButton number={6} />
            <SubtractButton />
            <NumberButton number={1} />
            <NumberButton number={2} />
            <NumberButton number={3} />
            <AddButton />
            <ZeroButton />
            <DecimalButton />
            <EqualsButton />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
