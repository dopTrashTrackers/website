import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div id="faq" className='w-11/12 md:w-3/4 p-4'>
      <h2 className="py-1 text-2xl sm:text-3xl md:text-4xl font-bold font-sans bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4 " style={{backgroundColor:'#BBDED6'}}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors` }
        >
          Is there a way to track the response after garbage is detected?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-white-400">
        Yes, once the system detects garbage and an alert is raised, you can track the status of the cleaning response via the website&apos;s notification or alert system.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4" style={{backgroundColor:'#BBDED6'}}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors `}
        >
          Can I schedule a manual inspection if the system fails to detect garbage?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-white-400">
        Yes, you can request a manual inspection by contacting the post office's cleaning department via the website&apos;s support section.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4" style={{backgroundColor:'#BBDED6'}}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors`}
        >
          How can I report a malfunction in the garbage detection system?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-white-400">
        If you notice any issues or malfunctions in the detection system, you can contact the divisional office through the support section on the website or call the provided helpline.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4 mt-2.5" style={{backgroundColor:'#BBDED6'}}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors`}
        >
           What should I do if I receive false garbage alerts?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-white-400">
        In the event of a false alert (when no garbage is present), you can report it by submitting an incident report in the website's support section. This helps improve the system&apos;s accuracy.
        </AccordionBody>
      </Accordion>
    </div>
  );
}