import React from "react";
import FeatureCard from "./FeatureCard";
import { AdjustIcon, InBoxIcon } from "../components/Icons";
import { BarChartIcon, FileTextIcon, MoonIcon, RocketIcon } from "@radix-ui/react-icons";

const benefits = [
    {
      title: "Customizable",
      description: "Easily tailor every aspect of your landing page to fit your unique needs and branding. Flexibility at your fingertips.",
      icon: <AdjustIcon/>
    },
    {
      title: "Use Predefined Themes",
      description: "Choose from a variety of stylish, ready-made themes to quickly get started and maintain a professional look with minimal effort.",
      icon: <MoonIcon className="size-8"/>
    },
    {
      title: "Add Forms",
      description: "Integrate forms seamlessly to capture leads and gather information directly from your landing page.",
      icon: <FileTextIcon className="size-8"/>
    },
    {
      title: "In-App Inbox",
      description: "Access and manage form submissions right within the app, making it easy to track and respond to your data.",
      icon: <InBoxIcon className="size-8"/>
    },
    {
      title: "Page Analytics",
      description: "Monitor your landing page’s performance with built-in analytics to understand visitor behavior and optimize your results.",
      icon: <BarChartIcon className="size-8"/>
    },
    {
      title: "Deploy to Subdomain",
      description: "Publish your landing pages effortlessly with direct deployment to a LandingEase subdomain, in just one click.",
      icon: <RocketIcon className="size-8"/>
    }
  ];
  

const LandingFeature = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Discover the Advantages of LandingEase
            </h2>
            <p className="text-xl text-gray-700">
            Create and launch landing pages with ease—LandingEase simplifies the process for a hassle-free experience
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
          {
            benefits.map((benefit, index) => (
              <FeatureCard key={index} title={benefit.title} description={benefit.description} icon={benefit.icon}/>
            ))
          }
      </div>
      </div>
      </div>
    </section>
  );
};

export default LandingFeature;
