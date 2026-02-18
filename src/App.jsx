import invitationImg from './assets/iara.jpg'

function App() {
  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-[#f3e9e2] overflow-x-hidden">
      <div className="w-full max-w-md relative">
        <img
          src={invitationImg}
          alt="Convite Ronald & Iara"
          className="w-full h-auto block shadow-2xl"
          loading="eager"
        />
        {/* Futuras funções e códigos poderão ser adicionados aqui como overlays ou seções extras */}
      </div>
    </div>
  )
}

export default App
