import React from 'react';
import Button from './Buttons';

const Card5 = ({ type, photo, text, bordercolour1, bordercolour2, bordercolour3 }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${bordercolour1}, ${bordercolour2}, ${bordercolour3})`,
      }}
      className="w-[250px] h-[320px] p-1"
    >
      <div className="bg-[#212121cf] backdrop-blur-lg w-full h-full p-4 flex items-center justify-center relative">
        <img className='object-cover absolute z-0 w-full h-full blur-sm' src={photo} alt="" />
        <div className="h-full gap-16 grid place-content-center">
          <p className="text-center text-[#ff4d7d] text-[1.75em] font-bold -mt-[20px] z-10">{type}</p>
          <p className="text-center text-[#000000] -mt-8 z-10 font-extrabold">{text}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card5;
