import invitationImg from './assets/iara.jpg'

function App() {
  const whatsappLink = "https://wa.me/5594991016930?text=Ol%C3%A1%20noivos%2C%20eu%20estou%20confirmando%20minha%20presen%C3%A7a!!";

  const handleConfirmation = () => {
    window.location.href = whatsappLink;
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-start justify-center bg-[#f3e9e2] overflow-hidden touch-none">
      <div className="w-full max-w-md relative">
        <img
          src={invitationImg}
          alt="Convite Ronald & Iara"
          className="w-full h-auto block select-none pointer-events-none"
          loading="eager"
        />

        {/* Botão Invisível apenas sobre 'Confirmação de Presença' */}
        <button
          onClick={handleConfirmation}
          className="absolute bg-transparent border-none cursor-pointer outline-none focus:outline-none"
          style={{
            top: '57%',
            left: '10%',
            width: '26%',
            height: '14%',
            zIndex: 10
          }}
          aria-label="Confirmar Presença"
        />
      </div>
    </div>
  )
}

export default App
