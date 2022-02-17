

function NumberButton({ number, handleClick }) {

  return (
    <div>
      <button onClick={handleClick}>{number}</button>
    </div>
  )
}
export { NumberButton };
