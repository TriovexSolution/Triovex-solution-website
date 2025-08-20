"use client";
import React from "react";
import { X } from "lucide-react";

function cloudModel({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-sm overflow-x-hidden">
      {/* ✅ Fixed Close Button (Top Center) */}
      <button
        onClick={onClose}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/85 hover:bg-black/90 text-white p-5 rounded-full backdrop-blur-md transition"
      >
        <X size={24} />
      </button>

      {/* ✅ Scrollable Content Section */}
      <div
        className="relative max-w-6xl mx-auto w-full text-white px-6 py-16"
        style={{
          height: "90vh",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {/* ✅ Hide Scrollbar (WebKit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-16 text-center">
          Cloud Computing Services
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Scalable, Secure & Smart Cloud Solutions for Every Business
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We design, deploy, and optimize powerful cloud solutions across
              AWS, Microsoft Azure, and Google Cloud—helping businesses scale
              faster, reduce costs, and boost operational efficiency. From
              migration to automation, our cloud expertise delivers high
              performance and seamless collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a trusted cloud computing service provider
              specializing in building, managing, and optimizing cloud
              infrastructure for startups, enterprises, and global brands.
              Whether it’s hosting, storage, DevOps pipelines, or AI-powered
              cloud applications—we deliver solutions that keep your business
              agile, secure, and future-ready.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "End-to-End Cloud Solutions",
              text: "From strategy and architecture design to deployment and ongoing optimization—we manage the entire cloud lifecycle. Every configuration is tailored to your workloads for maximum speed, security, and cost efficiency.",
            },
            {
              title: "Technologies & Platforms We Use",
              text: "We leverage AWS (EC2, S3, Lambda, RDS), Microsoft Azure (Virtual Machines, Blob Storage, Kubernetes), and Google Cloud Platform (Compute Engine, Cloud Storage, BigQuery) to deliver flexible, reliable, and scalable cloud environments.",
            },
            {
              title: "Cloud Migration & Optimization",
              text: "We seamlessly migrate your applications, databases, and workloads to the cloud—ensuring zero downtime and optimized performance while reducing costs.",
            },
            {
              title: "DevOps & Automation",
              text: "Our cloud solutions include automated deployments, CI/CD pipelines, and monitoring—empowering your team to innovate faster without worrying about infrastructure.",
            },
            {
              title: "Multi-Cloud & Hybrid Cloud",
              text: "We design hybrid and multi-cloud strategies so you can combine the best of each platform—avoiding vendor lock-in while maximizing flexibility and performance.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-1">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Why Triovex / Custom Strategy Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Why Triovex?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400">
            {[
              {
                title: "Tailored Cloud Architecture",
                text: "Every deployment is designed around your unique business needs and compliance requirements.",
              },
              {
                title: "High Security Standards",
                text: "Built with best-in-class security practices, encryption, and access controls to protect your data.",
              },
              {
                title: "Performance & Cost Efficiency",
                text: "Optimized workloads ensure you get the best speed and ROI from your cloud investment.",
              },
              {
                title: "Proactive Support & Scaling",
                text: "Ongoing monitoring, updates, and scaling as your business grows—keeping your cloud future-ready.",
              },
            ].map(({ title, text }, i) => (
              <div key={i}>
                <h4 className="text-white font-medium mb-1">{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 export default cloudModel;