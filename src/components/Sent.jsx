

const Sent = ({ handleBack }) => {
    return (
        <div className="w-full pt-12 flex flex-col justify-center items-center">
            <div>
                Su consulta fue enviada, nos comunicaremos a la brevedad. Muchas gracias.
            </div>
            <button className="mt-[30px] uppercase border border-red-600 py-5 px-10 tracking-[5px]" onClick={handleBack} >Volver</button>
        </div>
    )
}

export default Sent