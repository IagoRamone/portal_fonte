import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[380px] bg-white rounded-xl shadow-xl overflow-hidden">
        {/* o banner do topo */}
        <img
          src="/images/image1.png"
          alt="AI Brain"
          className="w-full h-[200px] object-cover"
        />

        {/* coisas que vao escritas no card */}
        <div className="p-5">
          {/* Autor */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/images/image1.png"
              alt="Emma Wilson"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-800 font-medium">
              TESTE TESTE TESTE
            </span>
          </div>

          {/* Título */}
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            IA NOVA TESTE TESTE TESTE
          </h2>

          {/* Descrição */}
          <p className="text-sm text-gray-600 mb-6 leading-snug">
            teste teste teste teste teste teste
          </p>

          {/* Rodapé: data + seta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>May 10, 2025</span>
            <FaArrowRight className="text-blue-600 text-2xl hover:translate-x-2 transition-transform duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
