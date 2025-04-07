import React, { useEffect } from 'react';
import { FileCheck, Truck, Mail, MessageCircle, Car, Plane, ClipboardCheck, Shield, DollarSign } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/getUrls';

export function HowItWorksPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = `Hi, I'd like to learn about importing a supercar from S. Korea`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-gray-300">
            As a licensed VSABC broker, we help you import your dream car from South Korea to Canada.
          </p>
        </div>

        {/* Import Process Summary */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Reserve Your Car */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                1. Reserve Your Car
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Secure your vehicle with a fully refundable deposit.
              </p>
            </div>

            {/* Step 2: Vehicle Search */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                2. We Inspect the Car
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Our professional mechanic in Korea examines all mechanical and cosmetic details.
              </p>
            </div>

            {/* Step 3: Documentation & Payment */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                3. Documentation & Payment
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Complete paperwork and process payment through our secure trust account.
              </p>
            </div>

            {/* Step 4: Shipping & Customs Clearance */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                4. Shipping & Customs Clearance
              </h3>
              <p className="text-gray-300 text-center text-sm">
                We manage de-registration, shipping, customs clearance, and delivery to your home or Vancouver pickup.
              </p>
            </div>

            {/* Step 5: Get Your Car */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                5. Get Your Car
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Choose between Vancouver pickup or home delivery.
              </p>
            </div>

            {/* Step 6: Registration */}
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                6. Registration
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Complete local safety inspections
                and register your vehicle for road use.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-8">
          {/* Step 1: Initial Consultation */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">1. Initial Consultation & Agreement</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                We begin by understanding your vehicle requirements and formalizing our relationship through a written brokerage service agreement. This agreement includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detailed vehicle specifications and requirements</li>
                <li>Maximum purchase price and payment terms</li>
                <li>Our broker fee structure and trust account details</li>
                <li>Timeline for vehicle procurement</li>
              </ul>
              <p className="bg-green-600/10 p-4 rounded-lg text-green-400">
                A refundable deposit is required to begin the search, which is held in our secure trust account at a BC financial institution.
              </p>
            </div>
          </div>

          {/* Step 2: Vehicle Search */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">2. Vehicle Search & Verification</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Once we have your requirements, we search the Korean market for vehicles that match your criteria. For each potential match, we:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify the vehicle's availability and specifications</li>
                <li>Review available history reports and documentation</li>
                <li>Obtain detailed photos and condition reports</li>
                <li>Present you with comprehensive information for decision-making</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Documentation */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">3. Documentation & Purchase</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Upon your approval, we facilitate the purchase process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prepare purchase agreement between you and the seller</li>
                <li>Process payment through our trust account</li>
                <li>Handle all necessary export documentation</li>
                <li>Maintain transparent records of all transactions</li>
              </ul>
            </div>
          </div>

          {/* Step 4: Import Process */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">4. Import Process</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                We manage the entire import process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Arrange international shipping and insurance</li>
                <li>Handle customs clearance at the Port of Vancouver</li>
                <li>Coordinate required safety modifications</li>
                <li>Keep you updated throughout the process</li>
              </ul>
            </div>
          </div>

          {/* Step 5: Delivery */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">5. Delivery Options</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Choose your preferred delivery method:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Vancouver Pickup</h3>
                  <p>Collect your vehicle in person at our Vancouver location.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Home Delivery</h3>
                  <p>We can arrange enclosed transport to your location.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Registration */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">6. Safety Inspection & Registration</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                The final steps to get your vehicle road-ready:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete required safety modifications</li>
                <li>Provide documentation for safety inspection</li>
                <li>Guide you through the registration process</li>
              </ul>
              <p className="bg-yellow-600/10 p-4 rounded-lg text-yellow-400">
                Note: Safety inspection and registration must be completed at your chosen licensed facility.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Import Your Dream Car?</h2>
              <p className="text-gray-300 mb-8">
                Contact us to start your import journey with a licensed VSABC broker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a 
                  href="mailto:admin@sgsupercars.ca"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}