import {useState} from 'react';
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon, Button , } from '@chakra-ui/react';
const Pariu2params =(props:{team_1: string,team_2: string, cotaw1: number, cotaw2: number})=>{
    const[value, setValue] = useState(""); 
    function handle() {
        alert(value)
        var val:number=+value
        var sum1:number=val*props.cotaw1/props.cotaw2;
        var sum2:number=val*props.cotaw2/props.cotaw1;
        return (
            <>
            <text>Here are you cotes: {sum1} - {sum2}</text>
            </>
        );
    }
    
      return(
        <>
        <ChakraProvider>
      <Accordion defaultIndex={[1]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <text>
              {props.team_1} x {props.team_2}: {props.cotaw1}-{props.cotaw2} verified
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
      
      </>
      );
  };
  export default Pariu2params;