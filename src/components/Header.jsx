export default function Header() {
  const myFunction = () => {
    document.body.classList.toggle('dark')
  }
  return (
    <>
      <header>
        <p>Wi-Fi Monitoring App</p>
      </header>
      {/* <button onClick={myFunction}>Dark</button> */}
    </>
  )
}