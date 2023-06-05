import {useState} from 'react';
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon, Button, border, AlertTitle , } from '@chakra-ui/react';
type cota={
  site:string
  v:number
}
const Pariu3params =(props:{team_1: string,team_2: string, cotaw1:cota, cotad:cota, cotaw2:cota})=>{
    const[value, setValue] = useState(""); 
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [sum3, setSum3] = useState(0);
    const [display, setDisplay] = useState("none");
    const profitabilitate=1/props.cotaw1.v+1/props.cotad.v+1/props.cotaw2.v
    const profit=Number(Math.round((props.cotaw1.v*(100/(1+props.cotaw1.v/props.cotad.v+props.cotaw1.v/props.cotaw2.v)))-100).toFixed(2));
    function handle() {
      const val=Number(value)
      setSum1(Number((Math.round(val/(1+props.cotaw1.v/props.cotad.v+props.cotaw1.v/props.cotaw2.v))).toFixed(2)));
      setSum2(Number((Math.round(val/(1+props.cotad.v/props.cotaw1.v+props.cotad.v/props.cotaw2.v))).toFixed(2)));
      setSum3(Number((Math.round(val/(1+props.cotaw2.v/props.cotaw1.v+props.cotaw2.v/props.cotad.v))).toFixed(2)));
      if(val!=0)
      setDisplay("block");
    }
    const mystyle2 = {
      display: display
    };
      return(
        <>
        <div className='mt-10 rounded w-2/4 border border-gray-500 rounded-full'>
          <ChakraProvider>
      <Accordion defaultIndex={[1]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='center'>
            <text>
              {props.team_1} x {props.team_2}: {props.cotaw1.v}-{props.cotad.v}-{props.cotaw2.v} {profitabilitate<1?"profitabil":"neprofitabil"}
            </text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <center>
           <div className="flex items-center justify-center">
          <text className='ml-10 mt-1'>Introdu suma disponibila:</text> <input value={value} onChange={(e) => {setValue(e.target.value)}} className="h-8 ml-5 outline text-center outline-1 rounded-full outline-gray-200"/> 
      <button onClick={handle} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full ml-6 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
    Confirm
  </button>
  <div id="textField" style={mystyle2} className='inline'>
    <text className='ml-5'>
      Sumele ce trebuie introduse sunt {sum1} - {sum2} - {sum3} pe siteurile: {props.cotaw1.site}, {props.cotad.site} si {props.cotaw2.site}
    </text>
  
  </div>
        </div>
        </center>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
        </ChakraProvider> 
        </div>    
      </>
      );
  };
  export default Pariu3params;