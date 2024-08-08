import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import CodeCallout from '../CodeCallout'

export default function CardElementsCallout() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute -right-2 -top-2 shadow-md shadow-slate-500 rounded-full text-white bg-slate-900"
      >
        <QuestionMarkCircleIcon className="w-5 h-5" />
      </button>
      <CodeCallout
        title="Render Credova credit/debit card form snippet"
        description="The following code will give you the card form you see on the checkout page:"
        code={`import React, { useRef, useState } from 'react';
import {
  CredovaProvider,
  CardElement,
  useCredova,
} from '@credova/elements-react';

function Component() {
  const { credova } = useCredova();
  // Refs to get access to the Elements instance
  const cardholderNameRef = useRef(null);
  const cardElementRef = useRef(null);

  return (
    <>
      <input
        type="text"
        id="cardholderName"
        placeholder="Name on card"
        ref={cardholderNameRef}
        style={{ display: 'flex', width: '100%' }}
      />

      <CardElement
        id="cardElement"
        ref={cardElementRef}
      />
    </>
  );
}

export default function App() {
  return (
    <CredovaProvider apiKey={apiKey}>
      <Component />
    </CredovaProvider>
  );
}
`}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}