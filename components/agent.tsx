'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { vapi } from "@/lib/actions/vapi.sdk";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface Props {
  doctorName: string;
  doctorId: string;
  workflowId: string;
  avatarUrl?: string;
}

export default function DoctorAgent({ doctorName, doctorId, workflowId, avatarUrl }: Props) {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);

  useEffect(() => {
    const handleCallStart = () => setCallStatus(CallStatus.ACTIVE);
    const handleCallEnd = () => setCallStatus(CallStatus.FINISHED);
    const handleError = (err: Error) => console.error("Vapi error:", err);

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("error", handleError);
    };
  }, []);

  const startCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    await vapi.start(workflowId, {
      variableValues: {
        doctorName,
        doctorId,
      },
    });
  };

  const endCall = () => {
    vapi.stop();
    setCallStatus(CallStatus.FINISHED);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        {/* <Image
          src={avatarUrl || "/ai-avatar.png"}
          alt={`${doctorName} avatar`}
          width={70}
          height={70}
          className="mx-auto rounded-full object-cover"
        /> */}
        <h3 className="text-lg font-semibold mt-2">{doctorName}'s AI Assistant</h3>
      </div>

      <div className="flex justify-center">
        {callStatus !== CallStatus.ACTIVE ? (
          <button
            onClick={startCall}
            className="relative bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {callStatus === CallStatus.CONNECTING ? "Connecting..." : "Start Call"}
          </button>
        ) : (
          <button
            onClick={endCall}
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            End Call
          </button>
        )}
      </div>
    </div>
  );
}
