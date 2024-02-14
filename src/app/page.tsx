'use client'
import Image from "next/image";
import { AnimatedGif } from "./AnimatedGif";
import { useState } from "react";
// 
export default function Home() {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false)
  return (
    <main>
      {/* <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlwNTFuemQ1ZzdjeWhyNXV6eHVkc3ZiaHI2czNzamJuZWlnYWZxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wsl3kGqA9KqyZnVlDo/giphy.gif'} alt={"bunny"} /> */}
      {/* <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZuODR5d3EwcndhMXZjY2pibXMyZDZqaGRuODZxbnA3cDM3bDl6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Z4VgRScq1oDfw5qNh3/giphy.gif'} alt={"bunny couple "}/>
      <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnl2YWJrejBwZm9jZnphcXVyZTNtNDVzdnJyNnI0bDI3c3F6eDFnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/e7QRl35RCUyhg0FT2I/giphy.gif'} alt={"happy bunny"}/>
      <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHoxZzFkNWtrcXQ5NXQ5Ymx6YXA0N2ZsemI1ZDBkcXlsMGR3eWtpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wMlcT3exSxYAcbkby6/giphy.gif'} alt={"upset bunny "}/> */}
      {yes ?
        <>
          <h5 className="header"> Yay!</h5>
          <div className="gif">
          <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZuODR5d3EwcndhMXZjY2pibXMyZDZqaGRuODZxbnA3cDM3bDl6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Z4VgRScq1oDfw5qNh3/giphy.gif'} alt={"bunny couple "} />
          </div>
          <h5 className="header"> Now close your eyes & DO NOT PEAK!!</h5>
         
        </> :
        <>
          <div className="gif">
            <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlwNTFuemQ1ZzdjeWhyNXV6eHVkc3ZiaHI2czNzamJuZWlnYWZxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wsl3kGqA9KqyZnVlDo/giphy.gif'} alt={"bunny"} />
          </div>
          <h5 className="header"> Will you be my Valentine?</h5>
          <div className='buttons'>
            <button className="btn" onClick={() => { setYes(true) }}>Yes </button>
            {no ? <img
              width={50}
              height={50}
              src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHoxZzFkNWtrcXQ5NXQ5Ymx6YXA0N2ZsemI1ZDBkcXlsMGR3eWtpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wMlcT3exSxYAcbkby6/giphy.gif' /> :
              <button className="btn" onClick={() => { setNo(true) }} >No</button>}

          </div>
        </>}

    </main>
  );
}

// {yes ?
//   <>
//    <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZuODR5d3EwcndhMXZjY2pibXMyZDZqaGRuODZxbnA3cDM3bDl6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Z4VgRScq1oDfw5qNh3/giphy.gif'} alt={"bunny couple "}/>
//   </> :
//   <>
//     <div className="gif">
//       <AnimatedGif src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlwNTFuemQ1ZzdjeWhyNXV6eHVkc3ZiaHI2czNzamJuZWlnYWZxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wsl3kGqA9KqyZnVlDo/giphy.gif'} alt={"bunny"} />
//     </div>
//     <h5 className="header"> Would you be my Valentine?</h5>
//     <div className='buttons'>
//       <button className="btn" onClick={() => { setYes(true) }}>Yes </button>
//       <button className="btn">No</button>
//     </div>
//   </>}