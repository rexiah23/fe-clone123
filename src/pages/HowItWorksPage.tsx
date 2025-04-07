import React, { useEffect } from 'react';
import { FileCheck, Truck, Mail, MessageCircle, Car, Plane, ClipboardCheck } from 'lucide-react';
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
          {/* <p className="text-xl text-gray-300">
            A detailed look at our step-by-step process for importing your dream car from South Korea.
          </p> */}
        </div>

        {/* Import Process Summary */}
       {/* Import Process Summary */}
      <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20 mb-12">
        {/* <h2 className="text-2xl font-bold text-white text-center mb-6">Import Process Summary</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1: Vehicle Selection */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
              1. Vehicle Selection
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Choose a desired car.
              A refundable deposit secures your choice.
            </p>
          </div>

          {/* Step 2: Inspection */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
             2: Inspection
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Our expert mechanic inspects the vehicle.
              If it meets our strict standards, it's "SG Supercars Approved" and eligible for our 3-day return policy; if not, we may refuse its import.
            </p>
          </div>

          {/*3: Documentation & Payment */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
             3: Documentation & Payment
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Review and sign documents,
              then complete the final payment.
            </p>
          </div>

          {/*4: Shipping & Customs Clearance */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
             4: Shipping & Customs Clearance
            </h3>
            <p className="text-gray-300 text-center text-sm">
              We manage de-registration, shipping, customs clearance,
              and successful import into the Port of Vancouver.
            </p>
          </div>

          {/*5: Delivery Options */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <Plane className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
             5: Get Your Car
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Choose between Vancouver pickup
              or home delivery.
            </p>
          </div>

          {/*6: Registration */}
          <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
             6: Registration
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
          {/* Step 1: Vehicle Selection */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">1. Vehicle Selection</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Begin by choosing the car you'd like to import. If you find one in our curated selection on 
                <strong> sgsupercars.ca</strong>, simply open its detail page and click <em>"RESERVE NOW".</em> 
                You'll be prompted to provide a refundable deposit through our secure Stripe payment link.
              </p>
              <p>
                If you've found a car elsewhere—such as on <strong>Encar.com</strong> or another Korean auto marketplace—
                email the link to <strong>admin@sgsupercars.ca</strong>.
              </p>
              <p className="bg-green-600/10 p-4 rounded-lg text-green-400 font-semibold">
                Note: Your deposit is fully refundable until we actually purchase the vehicle on your behalf. We'll always 
                obtain your final confirmation before proceeding with the purchase.
              </p>
            </div>
          </div>

          {/* Step 2: Professional Inspection */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">2. Professional Inspection</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                After receiving your deposit, we arrange a thorough pre-purchase inspection with our professional mechanic 
                in Korea. This includes reviewing the vehicle's mechanical systems (engine, transmission, suspension, 
                and brakes), checking the body and interior condition, and verifying the documentation. Any imperfections 
                we find—whether cosmetic or mechanical—will be disclosed to you in detail.
              </p>
              <p>
                If the vehicle meets our strict internal standards, we designate it as "SG Supercars Approved." This means it 
                is eligible for our <strong>3-day return policy</strong>, because we're confident you'll love the car 
                once you see it in person. 
              </p>
              <p className="text-red-400">
                <strong>Important:</strong> If a car fails to meet our standards, we may refuse to facilitate its import. 
                Any vehicle not approved by SG Supercars will not be covered by the 3-day return policy.
              </p>
            </div>
          </div>

          {/* Step 3: Documentation & Final Payment */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">3. Documentation & Final Payment</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Once you've reviewed our inspection reports, photos, and videos, if you would like to proceed with importing the 
                car, we will send the following two documents via DocuSign:
              </p>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Purchase Agreement</p>
                <p>
                  This contract outlines every aspect of your purchase: final pricing, the 3-day return policy, and 
                  all included services. We encourage you to review it carefully before signing.
                </p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Power of Attorney</p>
                <p>
                  By granting us this legal authorization, we can complete the necessary customs paperwork, import 
                  formalities, and provide registration assistance on your behalf. It's a standard procedure that ensures 
                  a smooth process.
                </p>
              </div>
              <p>
                We'll also share our wire transfer details so you can settle the remaining balance. This final payment 
                includes the cost of the vehicle, duty, GST, shipping, our service fee, and any additional services requested. Your 
                deposit is credited toward this total.
              </p>
            </div>
          </div>

          {/* Step 4: Purchase & Shipping */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">4. Purchase & Shipping</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                After final payment is received and all paperwork is in order, we purchase the car on your behalf. If any 
                modifications are needed to meet Canadian safety requirements, we'll handle those as well. 
              </p>
              <p>
                We then prepare the vehicle for export and oversee the entire shipping process from South Korea to Canada.
                Depending on your preference, the estimated shipping times are:
              </p>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">RORO Shipping</p>
                <p>2-3 months.</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Container Shipping</p>
                <p>1-2 months.</p>
              </div>
              <p>
                Our team will complete customs clearance upon arrival, ensuring all import duties and forms are handled 
                properly. We'll keep you informed throughout the entire journey.
              </p>
            </div>
          </div>

          {/* Step 5: Delivery Options */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">5. Delivery Options</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Once the car arrives in Vancouver, you can choose to pick it up in person or have it delivered directly 
                to your home.
              </p>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Vancouver Pickup</p>
                <p>
                  We'll cover the cost of a round-trip flight if you'd like to collect the car in person. You'll receive 
                  all paperwork, keys, and guidance on the remaining registration steps.
                </p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Home Delivery</p>
                <p>
                  For added convenience, we can arrange an insured, enclosed carrier to transport the vehicle 
                  directly to your door.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6: Registration & Final Steps */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">6. Registration & Final Steps</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                With your new import in hand, the final steps focus on meeting your province's registration requirements.
              </p>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Out-of-Province Safety Inspection</p>
                <p>
                  Visit a local mechanic to complete a provincial out-of-province inspection. This confirms that your 
                  vehicle meets the necessary safety standards.
                </p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Local Registration</p>
                <p>
                  Take the inspection documentation and any paperwork we've provided to your provincial registry. 
                  Once you've registered the car and received your license plates, you're officially ready to hit the road!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                We're here to guide you every step of the way, from your initial inquiry to handing over the keys.
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
