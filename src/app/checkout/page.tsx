'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCounter } from '../contexts/CartCounter'
import { useState } from 'react'

const features = [
  {
    icon: '/images/trophy.png',
    title: 'High Quality',
    description: 'crafted from top materials'
  },
  {
    icon: '/images/tick.png',
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: '/images/gift.png',
    title: 'Free Shipping',
    description: 'Order over 150 $'
  },
  {
    icon: '/images/support.png',
    title: '24 / 7 Support',
    description: 'Dedicated support'
  }
]

export default function Checkout() {
  const { cartItems } = useCounter()
  const [paymentMethod, setPaymentMethod] = useState('PayPal/Stripe')

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div className="relative h-[300px] w-full mb-10">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold text-purple-700 mb-4">Checkout</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline hover:text-purple-700">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Checkout</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium mb-8">Billing details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg border-purple-600 "
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg border-purple-600 "
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Email address</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg border-purple-600 "
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Phone</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg border-purple-600 "
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Street address</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg border-purple-600 "
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Town / City</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg border-purple-600 "
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">ZIP code</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg border-purple-600 "
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Country / Region</label>
              <div className="relative">
                <select className="w-full p-3 border rounded-lg border-purple-600  appearance-none bg-white">
                  <option>Pakistan</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Brazil</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Cabo Verde</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Congo (Congo-Brazzaville)</option>
                  <option>Costa Rica</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czechia (Czech Republic)</option>
                  <option>Denmark</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Gabon</option>
                  <option>Gambia</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Holy See</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Korea (North)</option>
                  <option>Korea (South)</option>
                  <option>Kosovo</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mexico</option>
                  <option>Micronesia</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Morocco</option>
                  <option>Mozambique</option>
                  <option>Myanmar (formerly Burma)</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>North Macedonia</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Palau</option>
                  <option>Palestine State</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>South Sudan</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Suriname</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Timor-Leste</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States of America</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Vatican City</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>

                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>




            <div className="space-y-2">
              <label className="text-sm">Additional information</label>
              <textarea
                placeholder="Additional Information"
                className="w-full p-3 border rounded-lg border-purple-600  resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between text-sm md:text-base">
                <span className='text-base lg:text-2xl font-poppinsSemiBold'>Product</span>
                <span className='text-base lg:text-2xl font-poppinsSemiBold'>Subtotal</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4 text-sm md:text-base">
                  <div className="space-y-1">
                    <p className=''><span className='text-lightGray'>{item.name} </span> x {item.quantity}</p>
                  </div>
                  <span>$. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}

              <div className="flex justify-between text-sm md:text-base">
                <span>Subtotal</span>
                <span>$. {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-purple-700 lg:text-xl font-poppinsSemiBold">$. {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center  space-x-2">
                  <input
                    type="radio"
                    id="PayPal/Stripe"
                    name="payment"
                    checked={paymentMethod === 'PayPal/Stripe'}
                    onChange={() => setPaymentMethod('PayPal/Stripe')}
                  />
                  <label htmlFor="PayPal/Stripe" className="text-sm cursor-pointer ">PayPal/Stripe </label>
                </div>
                <p className="text-sm text-gray-500 ml-6">
                  Make secure payments using PayPal or Stripe. Please use your Order ID as the payment reference if required. Your order will be processed once the payment has been successfully completed.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="Crypto-Payment"
                    name="payment"
                    checked={paymentMethod === 'Crypto-Payment'}
                    onChange={() => setPaymentMethod('Crypto-Payment')}
                  />
                  <label htmlFor="Crypto-Payment" className="text-sm cursor-pointer">Crypto Payment</label>
                </div>
                <p className="text-sm text-gray-500 ml-6">
                  Make your payment using cryptocurrency. Please use your Order ID as the payment reference when making the transaction. Your order will not be shipped until the funds have been confirmed on the blockchain.
                </p>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="bank-transfer"
                    name="payment"
                    checked={paymentMethod === 'bank-transfer'}
                    onChange={() => setPaymentMethod('bank-transfer')}
                  />
                  <label htmlFor="bank-transfer" className="text-sm cursor-pointer">Direct Bank Transfer</label>
                </div>
                <p className="text-sm text-gray-500 ml-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <label htmlFor="cash" className="text-sm cursor-pointer">Cash On Delivery</label>
                </div>
              </div>

              <p className="text-sm text-gray-500 ml-6">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account { }
                <Link href="/privacy-policy" className="text-black underline">
                  privacy policy
                </Link>
                .
              </p>
              <button className="w-3/4  bg-black text-white py-3 px-4 rounded-lg border-purple-600  hover:bg-purple-500  hover:w-full">
                Place order -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 mt-6 pl-6 lg:pl-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 pl-8 md:pl-0"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className='flex flex-col'>
                <h3 className="text-[#333333] text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

