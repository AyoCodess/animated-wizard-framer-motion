// import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App() {
let [step, setStep] = useState(0);


  return (
    <div className="flex min-h-screen items-center bg-gradient-to-br from-slate-700 to-slate-900">
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white'>
      <Step step={1} currentStep={step}/>
      <Step step={2} currentStep={step}/>
      <Step step={3} currentStep={step}/>
      <Step step={4} currentStep={step}/> 
      </div>
    </div>
  );
}
