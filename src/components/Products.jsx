import React,{useState} from "react";
import Product from "./Product";
import { motion} from "framer-motion"
function Products() {
  var product = [
    {
      title: "arquitel",
      description:
        "Arque Exectuive and ites ekjaksldjfaidjgdasja asdkfjasdj asdfj",
      live: true,
      case: false,
    },
    {
      title: "ttr ",
      description:
        "Arque Exectuive and ites ekjaksldjfaidjgdasja asdkfjasdj asdfj",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arque Exectuive and ites ekjaksldjfaidjgdasja asdkfjasdj asdfj",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Arque Exectuive and ites ekjaksldjfaidjgdasja asdkfjasdj asdfj",
      live: true,
      case: true,
    },
  ];
  const[pos,setpos]=useState(23)
  const mover=(val)=>{
    setpos(val*23)
  }
  return (
    <div className="mt-32 relative">
      {product.map((elem, index) => ( 
        <Product key={index} elem={elem}  mover={mover} count={index}/>
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div initial={{y:pos,x:"-50%"}} 
        animate={{y:pos+"rem"}}
        transition={{ease:[0.76,0,0.24,1],duration:0.6}}
        className="window absolute w-[25rem]  h-[20rem] left-[45%] bg-white  overflow-hidden">
          <motion.div animate={{y:-pos+"rem"}} 
           transition={{ease:[0.76,0,0.24,1],duration:0.5}} className="w-full  h-full bg-white object-cover">
            <img src="" alt="" />
           </motion.div>
          
          <motion.div animate={{y:-pos+"rem"}} 
           transition={{ease:[0.76,0,0.24,1],duration:0.5}} className="w-full  h-full bg-white ">
            <img src="" alt="" />
           </motion.div>
          <motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76,0,0.24,1],duration:0.5}} className="w-full  h-full bg-white ">
             
          </motion.div>
           
          <motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76,0,0.24,1],duration:0.5}}  className="w-full  h-full bg-white ">
       
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
