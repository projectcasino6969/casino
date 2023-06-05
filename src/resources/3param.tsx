import {useState} from 'react';
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon, Button, border , } from '@chakra-ui/react';
const Pariu3params =(props:{team_1: string,team_2: string, cotaw1: number, cotad: number, cotaw2: number})=>{
    const[value, setValue] = useState(""); 
    function handle() {
      let val:number=+value
      let sum1:number=val/(1+props.cotaw1/props.cotad+props.cotaw1/props.cotaw2)
      let sum2:number=val/(1+props.cotad/props.cotaw1+props.cotad/props.cotaw2)
      let sum3:number=val/(1+props.cotaw2/props.cotaw1+props.cotaw2/props.cotad)
      alert(sum1)
    }
    const mystyle = {
      width: "400px",
      color: "black",
      fontFamily: "Arial",
      borderradius: "25px"
    };
      return(
        <>
        <div style={mystyle}>
          <ChakraProvider>
      <Accordion defaultIndex={[1]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <text>
              {props.team_1} x {props.team_2}: {props.cotaw1}-{props.cotad}-{props.cotaw2} verified
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
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
        </ChakraProvider> 
        </div>    
      </>
      );
  };
  export default Pariu3params;