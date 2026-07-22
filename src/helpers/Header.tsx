const Header = () => {
  return (
    <header className="fixed top-8 left-8 z-20 select-none flex flex-col  items-end  gap-1 ">
      <h1 className="text-[22px]  font-black uppercase leading-none text-mina tracking-[5px]">
        Imran
      </h1>

      <h1 className=" text-[22px]  font-black uppercase leading-none text-mest tracking-[5px]" >
        Khan
      </h1>
    </header>
  );
};

export default Header;
// const name = ["Imran", "Khan"];

// <header className="fixed top-10 left-10 z-20">
//   {name.map((word) => (
//     <h1
//       key={word}
//       className="text-[90px] font-black uppercase leading-[0.82] tracking-[-0.06em]"
//     >
//       {word.split("").map((letter, i) => (
//         <span
//           key={i}
//           className="inline-block"
//         >
//           {letter}
//         </span>
//       ))}
//     </h1>
//   ))}
// </header>