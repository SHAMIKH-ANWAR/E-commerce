import React from 'react'

const Card = () => {
  return (
    <div className="relative w-[190px] h-[254px] bg-black flex flex-col justify-end p-3 gap-3 rounded-lg cursor-pointer overflow-hidden group">
      <div className="absolute inset-0 -left-[5px] m-auto w-[200px] h-[264px] rounded-[10px] bg-gradient-to-tr from-[#e81cff] to-[#40c9ff] z-[-1] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fc00ff] to-[#00dbde] translate-z-0 scale-[0.95] blur-[20px] z-[-1] group-hover:blur-[30px]"></div>
      <p className="text-xl font-bold capitalize">Popular this month</p>
      <p className="text-sm">Powered By</p>
      <p className="text-sm font-semibold text-[#e81cff]">Uiverse</p>
    </div>
  )
}

export default Card