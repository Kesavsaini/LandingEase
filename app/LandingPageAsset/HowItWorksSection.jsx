import Image from 'next/image'
import dashboardSs from '../../public/dashboardSs.png'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import WorkingStep from './WorkingStep'
import AdvanceCust1 from "../../public/AdvancedCust1.svg"
import AdvanceCust2 from "../../public/AdvancedCust2.svg"
import UploadBro from "../../public/UploadBro.svg"
import InboxSee from "../../public/InboxSee.svg"
import Stats from "../../public/Stats.svg"

const stepsArray = [
    {
      title: "Customize Your Page",
      description: "Design your landing page effortlessly.",
      steps: [
        "Add sections like Hero, Features, Forms, Cards, and Footer.",
        "Use toggles and sliders to adjust content.",
        "Select a theme to match your brand."
      ],
      tag: "Design Your Way",
      image:AdvanceCust1
    },
    {
      title: "Publish Instantly",
      description: "Deploy your page with a single click.",
      steps: [
        "Review your customized page.",
        "Click 'Publish.'",
        "Your page is deployed on a unique custom path"
      ],
      tag: "One-Click Deploy",
      image:UploadBro
    },
    {
      title: "Manage Form Responses",
      description: "Keep track of all your submissions.",
      steps: [
        "Receive all form submissions in your inbox.",
        "Organize and manage responses easily.",
        "Review submissions at your convenience."
      ],
      tag: "Inbox Integration",
      image:InboxSee
    },
    {
      title: "Monitor Performance",
      description: "Gain insights into how your page is performing.",
      steps: [
        "Access detailed analytics in the dashboard.",
        "Track visitor behavior and engagement.",
        "Use the data to optimize your page."
      ],
      tag: "Track & Optimize",
      image:Stats
    }
  ];
  


export default function HowitWorksSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4 justify-center items-center">
                Click 
                <ArrowRightIcon/>
                Customize 
                <ArrowRightIcon/>
                Publish
                </div>
            <h1 className="h2 mb-4 text-2xl sm:text-4xl font-bold">How it Works?</h1>
            <p className="text-xl text-gray-500">Landing Ease lets you create a landing page in just a few clicks. Pick a layout, customize it, and publish—no coding needed.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
          {
            stepsArray.map((step,index)=>{
                  const istilt=index%2;
                  return(
                    <WorkingStep 
                      key={index} 
                      title={step.title} 
                      description={step.description} 
                      steps={step.steps} 
                      tag={step.tag} 
                      image={step.image}
                      tilt={!istilt}
                    />
                  )
                })
            }       
                </div>
              </div>
            </div>

    </section>
  )
}