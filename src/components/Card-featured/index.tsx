import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";


export default function Card() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[394.66px] h-[388px] bg-[#FFFFFF] rounded-[8px] border-solid-[1px] flex flex-col gap-4 p-4 shadow-2xl">
          <div className="flex justify-center">
            <div className="w-[366.66px] h-[192px] object-cover rounded bg-[#DBEAFE]">
              <div className="flex items-center justify-center w-full h-full">
                <LuTriangle
                  className="w-[36px] h-[36px] "
                  color="#4F46E5"
                /> {/* Icone exemple */}
              </div>
            </div>
          </div>
          <div className="">
            <h3
              style={{ color: "#111827", fontFamily: "Roboto 700" }}
            >
              Layout Components
            </h3>
          </div>
          <div>
            <p style={{ color: "#4B5563" }}>
              Flexible grid systems, containers,
            </p>
            <p style={{ color: "#4B5563" }}>
              and layout components to build responsive
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: "#4F46E5" }}>
              Learn more
            </span>
            <FaArrowRight style={{ color: "#4F46E5" }}/>
          </div>
        </div>
      </div>
    </>
  );
}
