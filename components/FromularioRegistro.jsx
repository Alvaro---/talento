"use client"
import React, { useState } from "react"
import { useForm } from '@formspree/react';

const FromularioRegistro = () => {

    const [state, handleSubmit] = useForm("xdornewp");
    if (state.succeeded) {
        return <p>Gracias por registrarte!</p>;
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 md:flex">
                    <div className="md:w-1/2 md:mr-2 mb-4">
                        <label htmlFor="nombre" className="block font-medium mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="w-full border-gray-300 rounded-md p-2 text-blue"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label htmlFor="apellido" className="block font-medium mb-1">
                            Apellido
                        </label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            className="w-full border-gray-300 rounded-md p-2 text-blue"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block font-medium mb-1">
                        Correo
                    </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="w-full border-gray-300 rounded-md p-2 text-blue"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block font-medium mb-1">
                        Celular
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border-gray-300 rounded-md p-2 text-blue"
                    />
                </div>
                <div>
                    <label>
                        Mensaje:
                        <textarea
                            name="mensaje"
                            className="w-full border-gray-300 rounded-md p-2 text-blue"
                        ></textarea>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-yellow text-blue py-2 px-4 rounded-md w-full"
                >
                    Enviar
                </button>
            </form>
        </>
    )
}

export default FromularioRegistro
