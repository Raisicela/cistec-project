import React, { FormEvent, useRef } from "react";
import APP_ASSETS from "../../../Config/assets";

function Home8() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    console.log("form", form);
    e.preventDefault();
    if (!form.current) return;

    // emailjs
    //   .sendForm(
    //     "service_taqqbpa",
    //     "template_p44qfwj",
    //     form.current,
    //     "xjSAOQb25O4fN31Ey"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("hkjhk", result.text);
    //     },
    //     (error: any) => {
    //       console.log("sdasd", error.text);
    //     }
    //   );
  };

  return (
    <>
      <main className=" min-h-screen w-screen flex-col items-center">
        <div
          className="h-full w-[100%] flex flex-col py-10"
          style={{
            backgroundImage: `url(${APP_ASSETS.HOME_BG8})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <div className="px-10 lg:px-24">
              <p className="poppins-semibold text-primary text-[36px] pt-5 text-center text-white">
                FORMULARIO
              </p>
            </div>
            <section className="bg-white mx-6 md:mx-40 rounded-lg p-5 md:p-10 mt-10">
              <form ref={form} onSubmit={sendEmail} className="w-[100%]">
                <div className="flex flex-col md:flex-row md:mb-3 md:gap-6">
                  <div className="w-full md:justify-around mb-2 md:mb-0">
                    <input
                      name="empresa"
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484] border-black border-2  rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      type="text"
                      placeholder="Empresa*"
                    />
                    <p className="text-xs italic"></p>
                  </div>
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484] border-black border-2  rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      id="grid-last-name"
                      type="text"
                      placeholder="Nombres y Apellidos*"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:mb-3 md:gap-6">
                  <div className="w-full justify-around mb-2 md:mb-00">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      type="text"
                      placeholder="Cargo"
                    />
                    <p className="text-xs italic"></p>
                  </div>
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      id="grid-last-name"
                      type="text"
                      placeholder="Teléfono*"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:mb-3 md:gap-6">
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      type="text"
                      placeholder="Correo Electrónico*"
                    />
                    <p className="text-xs italic"></p>
                  </div>
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      id="grid-last-name"
                      type="text"
                      placeholder="Dirección"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:mb-3 md:gap-6">
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      type="text"
                      placeholder="Ciudad"
                    />
                    <p className=" text-xs italic"></p>
                  </div>
                  <div className="w-full justify-around mb-2 md:mb-0">
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mt-3 leading-tight focus:outline-none focus:bg-white px-4"
                      id="grid-last-name"
                      type="text"
                      placeholder="País"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:mb-3 md:gap-6">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    ></label>
                    <input
                      className="poppins-light text-[16px] appearance-none block w-full bg-white text-[#848484]  border-black border-2 rounded-xl py-3 mb-3 leading-tight focus:outline-none focus:bg-white px-4"
                      id="grid-password"
                      type="text"
                      placeholder="Consulta*"
                    />
                  </div>
                </div>
                <button className="bg-[#B26028] self-center hover:bg-blue-700 text-white text-[18px] font-bold mb-4 mt-4 py-3  md:px-2 rounded-2xl w-[100%]">
                  Enviar mensaje
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home8;
