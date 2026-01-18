import React from 'react';
import {
  FaHandshake,
  FaCreditCard,
  FaShieldAlt,
  FaFileContract,
  FaCalculator,
  FaPercentage,
  FaRupeeSign,
  FaMobileAlt,
  FaChartLine,
  FaBalanceScale,
  FaLock,
  FaSync,
  FaCheckCircle,
  FaUserCheck,
  FaFileInvoice,
  FaRegHandshake,
  FaGlobe,
  FaBuilding,
  FaUsers,
  FaCogs,
  FaDatabase
} from 'react-icons/fa';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { useNavigate} from 'react-router-dom';

const HowItWork = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            How TransChain Works
          </h1>
          <p className="text-xl text-center text-sky-100 max-w-3xl mx-auto">
            Connecting Service Providers with Businesses, Ensuring Legal Compliance & Transparent Transactions
          </p>
        </div>
      </div>

      {/* Platform Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <FaHandshake className="inline mr-3 text-sky-600" />
              Platform Overview
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              TransChain acts as a trusted intermediary between logistics service providers and businesses,
              ensuring smooth operations, legal compliance, and financial transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaRegHandshake className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Service Providers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Access to verified business customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Guaranteed payments within 7-15 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Reduced customer acquisition costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Professional invoicing and documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaBuilding className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Businesses</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Verified and compliant service providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Single point of contact for multiple services</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Legal compliance and contract management</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing and fee structure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaLock className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Guarantees</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Secure payment escrow system</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>GDPR and Indian DPDP Act compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt=0.5 flex-shrink-0" />
                  <span>Dispute resolution mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>GST and tax invoice compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <FaPercentage className="inline mr-3 text-sky-600" />
              Transparent Fee Structure
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              4% Platform Fee - Simple, Transparent, and Competitive
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-sky-100">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 text-center">
                    <div className="text-5xl font-bold text-sky-700 mb-2">4%</div>
                    <div className="text-lg font-semibold text-gray-700">Platform Fee</div>
                    <div className="text-sm text-gray-500 mt-2">per successful transaction</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sky-700">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Service Price: ₹100,000</h4>
                        <p className="text-gray-600">The agreed service amount between business and provider</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sky-700">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Platform Fee (4%): ₹4,000</h4>
                        <p className="text-gray-600">Covers payment processing, platform maintenance, and support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-700">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Service Provider Receives: ₹96,000</h4>
                        <p className="text-gray-600">96% of the total amount, transferred within 7-15 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaRupeeSign className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">What's Included in 4%</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    Payment processing fees
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    Platform maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    Dispute resolution services
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    Legal and contract management
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <FaCalculator className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">No Hidden Charges</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-amber-500" />
                    No registration fees
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-amber-500" />
                    No monthly subscriptions
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-amber-500" />
                    No listing charges
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-amber-500" />
                    Pay only when you earn
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-amber-500" />
                    GST extra as applicable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <FaCreditCard className="inline mr-3 text-sky-600" />
              Payment & Settlement Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Secure, Transparent, and Timely Payments - Complying with Indian Payment Regulations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Payment Flow Steps */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-300 to-blue-300 hidden lg:block"></div>

              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0 lg:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <FaFileInvoice className="w-6 h-6 text-sky-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Step 1: Service Completion & Invoice</h3>
                    </div>
                    <p className="text-gray-600">
                      Service provider completes the job and uploads proof of delivery/service completion.
                      System generates GST-compliant invoice automatically.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 flex justify-center">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 lg:order-2 lg:pl-12 mb-6 lg:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <GiPayMoney className="w-6 h-6 text-sky-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Step 2: Customer Payment</h3>
                    </div>
                    <p className="text-gray-600">
                      Customer makes payment through secured payment gateway (Razorpay/Stripe).
                      Amount held in escrow until service verification.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:order-1 lg:pr-12 flex justify-center">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0 lg:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <FaSync className="w-6 h-6 text-sky-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Step 3: Platform Fee Deduction</h3>
                    </div>
                    <p className="text-gray-600">
                      After customer approval, 4% platform fee is deducted. Remaining 96% is prepared for transfer.
                      Detailed fee breakdown provided to both parties.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 flex justify-center">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:order-2 lg:pl-12 mb-6 lg:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                        <GiTakeMyMoney className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Step 4: Service Provider Payout</h3>
                    </div>
                    <p className="text-gray-600">
                      96% amount transferred to service provider's bank account within 7-15 days.
                      NEFT/RTGS/IMPS transfers supported. Payment receipt generated automatically.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:order-1 lg:pr-12 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance - Indian Law */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <FaBalanceScale className="inline mr-3 text-sky-600" />
              Legal Compliance & Indian Regulations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Fully Compliant with Indian Laws and Regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-red-700">GST</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">GST Compliance</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Platform fees subject to 18% GST (₹720 on ₹4000)</li>
                <li>• Separate GST invoices for platform fees</li>
                <li>• Input tax credit available for registered businesses</li>
                <li>• GSTIN displayed on all invoices</li>
                <li>• Quarterly GST returns filed</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">DPDP Act 2023</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Data Protection Officer appointed</li>
                <li>• User consent management system</li>
                <li>• Data localization within India</li>
                <li>• Right to erasure implementation</li>
                <li>• Regular data protection audits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaFileContract className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Contract Law</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Indian Contract Act, 1872 compliant</li>
                <li>• Digital signatures under IT Act</li>
                <li>• Dispute resolution as per agreement</li>
                <li>• Jurisdiction clauses included</li>
                <li>• Terms updated as per legal changes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaCreditCard className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Payment Regulations</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• RBI payment aggregator guidelines</li>
                <li>• KYC compliance for all payouts</li>
                <li>• Escrow account with scheduled bank</li>
                <li>• Payment settlement system compliance</li>
                <li>• Anti-money laundering checks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Labor & Service Laws</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Service providers remain independent</li>
                <li>• No employer-employee relationship</li>
                <li>• Contractual service agreement</li>
                <li>• Professional service tax compliance</li>
                <li>• MSME registration support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FaGlobe className="w-5 h-5 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">IT Act & Cyber Laws</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• IT Act, 2000 compliance</li>
                <li>• Cyber security audit reports</li>
                <li>• Data breach notification system</li>
                <li>• Secure socket layer encryption</li>
                <li>• Regular vulnerability assessments</li>
              </ul>
            </div>
          </div>

          {/* Important Legal Notes */}
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-500 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaBalanceScale className="text-blue-600" />
              Important Legal Notes
            </h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="font-bold text-blue-700">•</span>
                <span>TransChain is a technology platform connecting service providers with businesses. We do not directly provide logistics services.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-blue-700">•</span>
                <span>Service providers are independent contractors responsible for their own GST registration, insurance, and legal compliance.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-blue-700">•</span>
                <span>All disputes are subject to arbitration in accordance with the Arbitration and Conciliation Act, 1996.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-blue-700">•</span>
                <span>Platform terms are governed by the laws of India, with jurisdiction in Mumbai courts.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <FaCogs className="inline mr-3 text-sky-600" />
              Service Provider Integration Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Simple 4-Step Process to Start Receiving Business Through TransChain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-sky-700">1</div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Registration & KYC</h4>
              <p className="text-gray-600 text-sm">
                Complete online registration with business details, PAN, GSTIN, and bank account information
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-sky-700">2</div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Verification</h4>
              <p className="text-gray-600 text-sm">
                24-48 hour verification process including business registration and bank account validation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-sky-700">3</div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Profile Setup</h4>
              <p className="text-gray-600 text-sm">
                Create service portfolio, upload certificates, set pricing, and define service areas
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-green-700">4</div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Start Receiving Orders</h4>
              <p className="text-gray-600 text-sm">
                Get matched with businesses, accept projects, and start earning with our platform
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-10 text-white max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Join TransChain?</h3>
              <p className="text-sky-100 mb-8">
                Join hundreds of service providers growing their business with our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-sky-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                onClick={()=>navigate('/service-provider')}>
                  Register as Service Provider
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Download Legal Documents
                </button>
              </div>
              <p className="text-sm text-sky-200 mt-6">
                By registering, you agree to our Terms of Service, Privacy Policy, and Service Provider Agreement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This document is for informational purposes only. Please consult with legal 
              and tax professionals for specific advice related to your business.
            </p>
            <p>
              TransChain Technologies Pvt Ltd • Registered Office: Mumbai, Maharashtra • CIN: U72900MH2023PTC412345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;