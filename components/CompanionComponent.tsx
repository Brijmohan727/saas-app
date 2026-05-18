// "use client";
// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image';
// import { cn,getSubjectColor } from '@/lib/utils';
// import {vapi} from "@/lib/vapi.sdk";
// import Lottie, {LottieRefCurrentProps} from "lottie-react";
// import soundwaves from '@/constants/soundwaves.json'
// enum CallStatus {
//     INACTIVE = 'INACTIVE',
//     CONNECTING = 'CONNECTING',
//     ACTIVE = 'ACTIVE',
//     FINISHED = 'FINISHED',
// }


// const CompanionComponent = ({ companionId,subject,topic,name,userName,
//     userImage,style,voice}: CompanionComponentProps) => {
//          const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
//          const [isSpeaking, setIsSpeaking] = useState(false);

//            const lottieRef = useRef<LottieRefCurrentProps>(null);

//             useEffect(() => {
//                 if(lottieRef) {
//                     if(isSpeaking) {
//                         lottieRef.current?.play()
//                     } else {
//                         lottieRef.current?.stop()
//                     }
//                 }
//            }, [isSpeaking, lottieRef])

//          useEffect(() => {
//             const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
//             const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
//             const onMessage=() => {}
//             const onSpeechStart = () => setIsSpeaking(true);
//             const onSpeechEnd = () => setIsSpeaking(false); 
//             const onError = (error: Error) => console.log('Error',error);

//             vapi.on('call-start',onCallStart);
//             vapi.on('call-end', onCallEnd);
//             vapi.on('message', onMessage);
//             vapi.on('error', onError);
//             vapi.on('speech-start', onSpeechStart);
//             vapi.on('speech-end', onSpeechEnd);
//             return () => {
//                 vapi.off('call-start', onCallStart);
//                 vapi.off('call-end', onCallEnd);
//                 vapi.off('message', onMessage);
//                 vapi.off('error', onError);
//                 vapi.off('speech-start', onSpeechStart);
//                 vapi.off('speech-end', onSpeechEnd);
//         }
//          },[]);
         
//   return (
//     <section className="flex flex-col h-[70vh]">
//         <section className="flex gap-8 max-sm:flex-col">
//             <div className="companion-avatar">
//                 <div className="companion-avatar" style={{backgroundColor: getSubjectColor(subject)}}>
//                     <div className={cn('absolute transition-opacity duration-1000',
//                         callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-1001' : 'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse')}>
//                             <Image src={`/icons/${subject}.svg`} alt={subject}
//                             width={150} height={150} className="max-sm:w-fit" />
//                     </div>
//                     <div className={cn('absolute transition-opacity duration-1000',callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0')}>
//                         <Lottie lottieRef={lottieRef}
//                         animationData={soundwaves}
//                         autoplay={false}
//                         className="companion-lottie" />
//                     </div>
//                 </div>
//                 <p className="font-bold text-2xl">{name}</p>
//             </div>
//         </section>
      
//     </section>
    
//   )
// }

// export default CompanionComponent
// "use client";
// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image';
// import { cn, getSubjectColor } from '@/lib/utils';
// import { vapi } from "@/lib/vapi.sdk";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import soundwaves from '@/constants/soundwaves.json'

// enum CallStatus {
//   INACTIVE = 'INACTIVE',
//   CONNECTING = 'CONNECTING',
//   ACTIVE = 'ACTIVE',
//   FINISHED = 'FINISHED',
// }

// const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {
//   const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const lottieRef = useRef<LottieRefCurrentProps>(null);

//   useEffect(() => {
//     if (lottieRef) {
//       if (isSpeaking) {
//         lottieRef.current?.play()
//       } else {
//         lottieRef.current?.stop()
//       }
//     }
//   }, [isSpeaking, lottieRef])

//   useEffect(() => {
//     const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
//     const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
//     const onMessage = () => {}
//     const onSpeechStart = () => setIsSpeaking(true);
//     const onSpeechEnd = () => setIsSpeaking(false);
//     const onError = (error: Error) => console.log('Error', error);

//     vapi.on('call-start', onCallStart);
//     vapi.on('call-end', onCallEnd);
//     vapi.on('message', onMessage);
//     vapi.on('error', onError);
//     vapi.on('speech-start', onSpeechStart);
//     vapi.on('speech-end', onSpeechEnd);

//     return () => {
//       vapi.off('call-start', onCallStart);
//       vapi.off('call-end', onCallEnd);
//       vapi.off('message', onMessage);
//       vapi.off('error', onError);
//       vapi.off('speech-start', onSpeechStart);
//       vapi.off('speech-end', onSpeechEnd);
//     }
//   }, []);

//   return (
//     <section className="flex flex-col h-[70vh]">
//       {/* Top section - companion avatar + user avatar */}
//       <section className="flex gap-8 max-sm:flex-col flex-1">

//         {/* Companion Avatar */}
//         <div className="flex flex-col items-center gap-4 flex-1 justify-center">
//           <div
//             className="relative size-[150px] flex items-center justify-center rounded-2xl"
//             style={{ backgroundColor: getSubjectColor(subject) }}
//           >
//             {/* Icon - shown when inactive/connecting/finished */}
//             <div className={cn(
//               'absolute transition-opacity duration-1000',
//               callStatus === CallStatus.ACTIVE ? 'opacity-0' : 'opacity-100',
//               callStatus === CallStatus.CONNECTING && 'animate-pulse'
//             )}>
//               <Image
//                 src={`/icons/${subject}.svg`}
//                 alt={subject}
//                 width={80}
//                 height={80}
//               />
//             </div>

//             {/* Lottie - shown when active/speaking */}
//             <div className={cn(
//               'absolute transition-opacity duration-1000',
//               callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0'
//             )}>
//               <Lottie
//                 lottieRef={lottieRef}
//                 animationData={soundwaves}
//                 autoplay={false}
//                 className="w-[80px] h-[80px]"
//               />
//             </div>
//           </div>
//           <p className="font-bold text-2xl text-center">{name}</p>
//         </div>

//         {/* User Avatar */}
//         <div className="flex flex-col items-center gap-4 flex-1 justify-center">
//           <div className="relative size-[150px] flex items-center justify-center rounded-2xl bg-muted overflow-hidden">
//             <Image
//               src={userImage}
//               alt={userName}
//               width={150}
//               height={150}
//               className="object-cover"
//             />
//             {isSpeaking && (
//               <div className="absolute inset-0 border-4 border-primary rounded-2xl animate-pulse" />
//             )}
//           </div>
//           <p className="font-bold text-2xl text-center">{userName}</p>
//         </div>

//       </section>

//       {/* Call button */}
//       <div className="w-full flex justify-center mt-6">
//         {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED ? (
//           <button
//             className="btn-call rounded-full px-8 py-4 bg-primary text-white font-bold text-lg"
//             onClick={() => {/* start call */}}
//           >
//             {callStatus === CallStatus.FINISHED ? 'Call Again' : 'Start Session'}
//           </button>
//         ) : (
//           <button
//             className="btn-disconnect rounded-full px-8 py-4 bg-destructive text-white font-bold text-lg"
//             onClick={() => vapi.stop()}
//           >
//             End Session
//           </button>
//         )}
//       </div>

//     </section>
//   )
// }

// export default CompanionComponent
// "use client";
// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image';
// import { cn, getSubjectColor } from '@/lib/utils';
// import { vapi } from "@/lib/vapi.sdk";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import soundwaves from '@/constants/soundwaves.json'

// enum CallStatus {
//     INACTIVE = 'INACTIVE',
//     CONNECTING = 'CONNECTING',
//     ACTIVE = 'ACTIVE',
//     FINISHED = 'FINISHED',
// }

// const CompanionComponent = ({ companionId, subject, topic, name, userName,
//     userImage, style, voice }: CompanionComponentProps) => {

//     const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
//     const [isSpeaking, setIsSpeaking] = useState(false);
//     const lottieRef = useRef<LottieRefCurrentProps>(null);

//     useEffect(() => {
//         if (lottieRef) {
//             if (isSpeaking) {
//                 lottieRef.current?.play()
//             } else {
//                 lottieRef.current?.stop()
//             }
//         }
//     }, [isSpeaking, lottieRef])

//     useEffect(() => {
//         const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
//         const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
//         const onMessage = () => {}
//         const onSpeechStart = () => setIsSpeaking(true);
//         const onSpeechEnd = () => setIsSpeaking(false);
//         const onError = (error: Error) => console.log('Error', error);

//         vapi.on('call-start', onCallStart);
//         vapi.on('call-end', onCallEnd);
//         vapi.on('message', onMessage);
//         vapi.on('error', onError);
//         vapi.on('speech-start', onSpeechStart);
//         vapi.on('speech-end', onSpeechEnd);

//         return () => {
//             vapi.off('call-start', onCallStart);
//             vapi.off('call-end', onCallEnd);
//             vapi.off('message', onMessage);
//             vapi.off('error', onError);
//             vapi.off('speech-start', onSpeechStart);
//             vapi.off('speech-end', onSpeechEnd);
//         }
//     }, []);

//     return (
//         <section className="flex flex-col h-[70vh]">
//             <section className="flex gap-8 max-sm:flex-col">
//                 <div className="companion-avatar"
//                     style={{ backgroundColor: getSubjectColor(subject) }}>

//                     {/* Icon — shown when INACTIVE, FINISHED, or CONNECTING */}
//                     <div className={cn(
//                         'absolute transition-opacity duration-1000',
//                         callStatus === CallStatus.ACTIVE ? 'opacity-0' : 'opacity-100',
//                         callStatus === CallStatus.CONNECTING && 'animate-pulse'
//                     )}>
//                         <Image
//                             src={`/icons/${subject}.svg`}
//                             alt={subject}
//                             width={150}
//                             height={150}
//                             className="max-sm:w-fit"
//                         />
//                     </div>

//                     {/* Lottie — shown only when ACTIVE */}
//                     <div className={cn(
//                         'absolute transition-opacity duration-1000',
//                         callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0'
//                     )}>
//                         <Lottie
//                             lottieRef={lottieRef}
//                             animationData={soundwaves}
//                             autoplay={false}
//                             className="companion-lottie"
//                         />
//                     </div>
//                 </div>

//                 <p className="font-bold text-2xl">{name}</p>
//             </section>
//         </section>
//     )
// }

// export default CompanionComponent
'use client';

import {useEffect, useRef, useState} from 'react'
import {cn, configureAssistant, getSubjectColor} from "@/lib/utils";
import {vapi} from "@/lib/vapi.sdk";
import Image from "next/image";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import soundwaves from '@/constants/soundwaves.json'
import {addToSessionHistory} from "@/lib/actions/companion.actions";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if(lottieRef) {
            if(isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);

        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
            addToSessionHistory(companionId)
        }

        const onMessage = (message: Message) => {
            if(message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript }
                setMessages((prev) => [newMessage, ...prev])
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        }
    }, [companionId]);

    const toggleMicrophone = () => {
        const muted = vapi.isMuted();
        vapi.setMuted(!muted);
        setIsMuted(!muted)
    }

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING)

        const assistantOverrides = {
            variableValues: { subject, topic, style },
            clientMessages: ["transcript"],
            serverMessages: [],
        }

        // @ts-expect-error
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }

    return (
        <section className="flex flex-col h-[70vh]">
            <section className="flex gap-8 max-sm:flex-col">
                <div className="companion-section">
                    <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <div className={cn(
                            'absolute transition-opacity duration-1000',
                            callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE
                                ? 'opacity-100'
                                : 'opacity-0',
                            callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                        )}>
                            <Image
                                src={`/icons/${subject}.svg`}
                                alt={subject}
                                width={150}
                                height={150}
                                className="max-sm:w-fit"
                            />
                        </div>

                        <div className={cn(
                            'absolute transition-opacity duration-1000',
                            callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0'
                        )}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={soundwaves}
                                autoplay={false}
                                className="companion-lottie"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-2xl">{name}</p>
                </div>

                <div className="user-section">
                    <div className="user-avatar">
                        <Image
                            src={userImage}
                            alt={userName}
                            width={130}
                            height={130}
                            className="rounded-lg"
                        />
                        <p className="font-bold text-2xl">{userName}</p>
                    </div>

                    <button
                        className="btn-mic"
                        onClick={toggleMicrophone}
                        disabled={callStatus !== CallStatus.ACTIVE}
                    >
                        <Image
                            src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'}
                            alt="mic"
                            width={36}
                            height={36}
                        />
                        <p className="max-sm:hidden">
                            {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                        </p>
                    </button>

                    <button
                        className={cn(
                            'rounded-lg py-2 cursor-pointer transition-colors w-full text-white',
                            callStatus === CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary',
                            callStatus === CallStatus.CONNECTING && 'animate-pulse'
                        )}
                        onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                    >
                        {callStatus === CallStatus.ACTIVE
                            ? 'End Session'
                            : callStatus === CallStatus.CONNECTING
                                ? 'Connecting'
                                : 'Start Session'
                        }
                    </button>
                </div>
            </section>

            <section className="transcript">
                <div className="transcript-message no-scrollbar">
                    {messages.map((message, index) => {
                        if (message.role === 'assistant') {
                            return (
                                <p key={index} className="max-sm:text-sm">
                                    {name.split(' ')[0].replace(/[.,]/g, '')}: {message.content}
                                </p>
                            )
                        } else {
                            return (
                                <p key={index} className="text-primary max-sm:text-sm">
                                    {userName}: {message.content}
                                </p>
                            )
                        }
                    })}
                </div>

                <div className="transcript-fade" />
            </section>
        </section>
    )
}

export default CompanionComponent