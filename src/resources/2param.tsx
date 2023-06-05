import {useState} from 'react';
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon, Button , } from '@chakra-ui/react';
type cota={
  site:string
  v:number
}
const Pariu2params =(props:{team_1: string,team_2: string, cotaw1:cota, cotaw2:cota})=>{
  const[value, setValue] = useState(""); 
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [display, setDisplay] = useState("none");
    const profit=Number(Math.round(props.cotaw1.v*(100/(1+props.cotaw1.v/props.cotaw2.v))-100).toFixed(2));
    function handle() {
      const val=Number(value)
      setSum1(Number((Math.round(val/(1+props.cotaw1.v/props.cotaw2.v)).toFixed(2))));
      setSum2(Number((Math.round(val/(1+props.cotaw2.v/props.cotaw1.v)).toFixed(2))));
      setDisplay("block");
    }
    const mystyle2 = {
      display: display
    };
      return(
        <>
        <ChakraProvider>
      <Accordion defaultIndex={[1]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <text>
              {props.team_1} x {props.team_2}: {props.cotaw1.v}-{props.cotaw2.v} profitabilitate de {profit}%
            </text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
          Introdu suma disponibila: <input value={value} onChange={(e) => {setValue(e.target.value)}} className="outline"/> 
      <button onClick={handle} className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-black transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-dark dark:hover:bg-brand-300 dark:active:bg-brand-200">
    Confirm
  </button>
  <div id="textField" style={mystyle2}>
  Sumele ce trebuie introduse sunt {sum1} - {sum2} pe siteurile: {props.cotaw1.site} si {props.cotaw2.site}
  </div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
        </ChakraProvider> 
      
      </>
      );
  };
  export default Pariu2params;