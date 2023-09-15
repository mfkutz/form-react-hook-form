import { useForm } from "react-hook-form"
import Sent from "./components/Sent"
import { useState } from "react"

const App = () => {

  const [formSent, setFormSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    console.log("formulario enviado");
    reset()
    setFormSent(true)
  })

  console.log(errors);

  function handleBack() {
    setFormSent(false)
  }

  return (
    <div className=" h-screen flex flex-col items-center ">
      <header className="bg-gray-800 min-h-[220px] flex justify-center items-center w-full flex-col" >
        <h1 className="pb-4 text-5xl uppercase tracking-[.7rem] text-[white] font-light">Contacto</h1>
        <p className="uppercase text-[white] tracking-[4px] border-b-[2px] border-red-500 p-2 font-bold ">mfkdigital.com</p>
      </header>

      <form onSubmit={onSubmit} className={`flex flex-col justify-center items-center w-[700px] ${formSent ? 'hidden' : ''}`}>
        <h2 className="text-[40px] uppercase p-10 tracking-[.8rem] text-center font-light">Realiza tu consulta</h2>
        {/* MENSAJES DE ERROR */}
        <div className="w-full flex flex-col ">
          {errors.nombre || errors.email || errors.mensaje ? (<span>Por favor, rellene los siguientes campos:</span>) : null}
          {
            errors.nombre && <span>{errors.nombre.message}</span>
          }
          {
            errors.email && <span>{errors.email.message}</span>
          }
          {
            errors.mensaje && <span>{errors.mensaje.message}</span>
          }
        </div>



        {/* nombre */}
        <input
          placeholder="NOMBRE"
          className="tracking-[3px] text-[.9rem] w-full p-3 pt-12 border-b border-gray-400 uppercase"
          type="text"

          {...register("nombre", {
            required: {
              value: true,
              message: "- Nombre"
            },
            minLength: {
              value: 3,
              message: "- Minimo 3 caracteres"
            },
            maxLength: {
              value: 25,
              message: "- Máximo 25 caracteres"
            }
          })}

        />

        {/* correo */}
        <input
          placeholder="CORREO ELECTRONICO"
          className="tracking-[3px] text-[.9rem] w-full p-3 pt-12 border-b border-gray-400 uppercase"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "- Correo electrónico"
            },
            pattern: {
              value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              message: "Formate de correo no válido"
            }
          })}
        />

        {/* mensaje */}
        <textarea
          name="comentario"
          cols="30"
          rows="5"
          placeholder="MENSAJE"
          className="pstyles tracking-[3px] text-[.9rem] w-full p-3 pt-12 border-b border-gray-400 uppercase"
          {...register("mensaje", {
            required: {
              value: true,
              message: "- Mensaje"
            },
            minLength: {
              value: 20,
              message: "El mensaje debe tener al menos 20 caracteres."
            }
          })}

        />

        <div className="flex w-full justify-end pt-5">
          <button className="uppercase border border-red-600 py-5 px-10 tracking-[5px]">Enviar</button>
        </div>

      </form>

      {/* CONSULTA ENVIADA */}
      <div className={`${formSent ? 'block' : 'hidden'} `}>
        <Sent handleBack={handleBack} />
      </div>

    </div>
  )
}

export default App