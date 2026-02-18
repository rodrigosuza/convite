import invitationImg from './assets/iara.jpg'

function App() {
  const handleClick = () => {
    // Adicione aqui a função que desejar (ex: abrir link, mostrar alerta, etc)
    console.log("Botão invisível clicado!");
    alert("Convite clicado!");
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-start justify-center bg-[#f3e9e2] overflow-hidden touch-none">
      <div className="w-full max-w-md relative h-full">
        <img
          src={invitationImg}
          alt="Convite Ronald & Iara"
          className="w-full h-auto block shadow-2xl"
          loading="eager"
        />
        <button
          onClick={handleClick}
          className="absolute inset-0 w-full h-full bg-transparent border-none cursor-pointer outline-none focus:outline-none"
          aria-label="Ação do Convite"
        />
      </div>
    </div>
  )
}

export default App
