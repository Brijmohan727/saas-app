import React from 'react'
import {Button} from '@/components/ui/button';
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";
import NewCompanion from "@/app/companions/new/page";
import CompanionForm from "@/components/CompanionForm";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold">Popular Companions</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8">
        <CompanionCard 
        id="123"
        name="Neura the Brainy Explorer"
        topic ="Neural Network of the Brain"
        subject="Science"
        duration={45}
        color ="#ffda6e" />
        <CompanionCard 
        id="456"
        name="Countsy the Number Wizard"
        topic ="Derivatives & Integrals"
        subject="Maths"
        duration={30}
        color="#E5D0FF"
         />
        <CompanionCard 
        id="789"
        name="Verba the Vocabulary Builder"
        topic ="English Literature"
        subject="Language"
        duration={30}
        color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page