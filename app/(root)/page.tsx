'use client'

import Agent from '@/components/agent'
import React, { useEffect, useState } from 'react'

const doctors = [
  { id: 'doc1', name: 'Dr. Alice Johnson', expertise: 'Cardiologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc2', name: 'Dr. Brian Lee', expertise: 'Dermatologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc3', name: 'Dr. Clara Smith', expertise: 'Pediatrician', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc4', name: 'Dr. David Patel', expertise: 'Neurologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc5', name: 'Dr. Eva Martinez', expertise: 'Gynecologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc6', name: 'Dr. Frank Kim', expertise: 'Orthopedic Surgeon', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc7', name: 'Dr. Grace Chen', expertise: 'Psychiatrist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc8', name: 'Dr. Henry Gupta', expertise: 'Endocrinologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc9', name: 'Dr. Irene Ford', expertise: 'Oncologist', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
  { id: 'doc10', name: 'Dr. Jack Wilson', expertise: 'General Physician', workflowId: '59821f23-80af-438d-ab75-ea50ecac2031' },
]

const Page = () => {
  type Doctor = {
    id: string;
    name: string;
    expertise: string;
    workflowId: string;
  };
  
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  

  useEffect(() => {
    console.log("Active doctor updated:", activeDoctor);
  }, [activeDoctor]);


  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-2xl font-bold">Home Page</h1>

      <p className="text-center text-gray-700 max-w-xl">
        Welcome to our hospital portal. Here you can find expert doctors across various specialties. 
        Use the <span className="font-medium text-blue-600">Call Doctor</span> button to contact a doctor directly for information or consultation. 
        If the doctor is unavailable, you can connect with their <span className="font-medium text-green-600">AI Assistant</span> for instant support.
      </p>

      <div className="space-y-4 w-full max-w-2xl">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            <div>
              <div className="text-lg font-semibold">{doc.name}</div>
              <div className="text-sm text-gray-600">{doc.expertise}</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => alert(`Calling ${doc.name}...`)}
                className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Call Doctor
              </button>

              <button
                onClick={() => {
                  console.log(`Clicked AI Assistant for ${doc.name}`);
                  setActiveDoctor(doc);
                }}
                className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Call AI Assistant
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show agent when user selects a doctor */}
      {activeDoctor && (
        <div className="mt-10 w-full max-w-xl">
          <p>Rendering agent for: {activeDoctor.name}</p> {/* Debug line */}
          <Agent
            doctorName={activeDoctor.name}
            doctorId={activeDoctor.id}
            workflowId={activeDoctor.workflowId}
          />
        </div>
      )}
    </div>
  )
}

export default Page
