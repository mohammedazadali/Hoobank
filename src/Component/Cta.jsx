import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <section className="py-10 sm:px-40 px-5 lg:px-30">
      <div className="flex sm:flex-row flex-col gap-10 justify-between items-center  background-gradient  sm:p-20 p-10 rounded-lg">
        <div className='flex flex-col gap-[20px] sm:basis-[50%] basis-[100%] sm:text-left text-center'>
            <h1 className='font-poppins font-semibold xl:text-[38px] text-[40px] text-white'>Let's try our services now
            </h1>
            <p className='text-dimwhite text-[16px] leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum et libero, nemo asperiores modi.
            </p>
        </div>
        <Button title="Get Started" />
      </div>
    </section>
  );
};

export default Cta;
