import { Helmet } from 'react-helmet';
import { DFBullet, GFBullet, VeganBullet } from '../Components/FlavorCards';
import {
  cateringAddOns,
  cateringFlavors,
  CateringTier,
  cateringTiers,
} from '../data';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Catering() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [desiredPackage, setDesiredPackage] = useState('');

  const form = useRef<HTMLFormElement>(null);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!form.current) {
        throw new Error('Error');
      }
      const emailParams = {
        name,
        email,
        phone,
        eventType,
        eventDate: new Date(eventDate).toLocaleString(),
        eventLocation,
        guestCount,
        desiredPackage,
      };
      emailjs
        .send('service_vyn7d25', 'template_uyudw3e', emailParams, {
          publicKey: 'xWvR0d6huBxCsxOxl',
        })
        .then(
          () => {
            alert('Email successfully sent');
          },
          (error) => {
            throw new Error(error);
          }
        );
      setName('');
      setEmail('');
      setPhone('');
      setEventType('');
      setEventDate('');
      setEventLocation('');
      setGuestCount('');
      setDesiredPackage('');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.sweetcuteicecream.com/catering"
        />
      </Helmet>
      <div className="flex  relative flex-wrap bg-[#FAE498] w-full min-h-svh">
        <div className="text-center py-1 md:pb-4 lg:pb-20 w-full">
          <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-10 mb-4 underline">
            Artisanal Ice Cream Catering
          </h2>
          <div className="flex flex-wrap justify-center mx-3 md:mx-16">
            <div className="basis-[90%] sm:basis-[40%] my-2 md:my-4 rounded-2xl">
              <div className="relative w-full h-full rounded-2xl bg-[#94cbf8] p-2 md:p-5 drop-shadow-xl">
                <div className="w-full text-center flex justify-center mt-5">
                  <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl p-2  bg-white rounded-xl w-fit h-fit drop-shadow-xl">
                    All Packages Include
                  </h3>
                </div>
                <div className="relative ">
                  <ul className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl pl-4 md:pl-0 p-2 pt-3 lg:p-6 text-left list-disc">
                    <li>Hand Scooped Premium Ice Cream</li>
                    <li>1 Scooper</li>
                    <li>2 Hours of service (plus 30 minute set up)</li>
                    <li>Sweet Cute Ice Cream cart w/ umbrella</li>
                    <li>Cups, spoons, and napkins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
            Hand Scooped Package
          </h2>
          <div className="flex flex-wrap justify-between mx-3 md:mx-16">
            {cateringTiers.map((tier, index) => (
              <PackageCard key={index} tier={tier} />
            ))}
          </div>

          <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
            Ice Cream Sammie Package
          </h2>
          <div className="flex flex-wrap justify-center ">
            <div className="basis-[60%] lg:basis-[40%] rounded-2xl">
              <div className="relative w-full h-full rounded-2xl justify-center bg-[#94cbf8] p-2 md:p-5 drop-shadow-xl">
                <div className="w-full text-center flex justify-center p-3">
                  <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl  bg-white rounded-xl w-fit h-fit p-3">
                    $12 per person
                  </h3>
                </div>
                <div className="relative p-3">
                  <ul className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl text-center">
                    <li>
                      Your choice of 2 flavors of Ice Cream on scratch made
                      Chocolate Chip Cookies.
                    </li>
                    <li>
                      Pre-packaged, ready to hand out to your guests from our
                      ice cream cart!
                    </li>
                  </ul>
                </div>
                <div className="w-full text-center flex justify-center p-3">
                  <h3 className="text-black font-FaroVariable text-sm md:text-lg xl:text-xl bg-white rounded-xl w-fit h-fit p-3">
                    $8 per sandwich for pickup
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
            Pre-Scooped Package
          </h2>
          <h2 className="font-PoppinsLight text-black text-xl md:text-2xl my-5">
            <em>*recommended for quicker service with large parties*</em>
          </h2>
          <div className="flex flex-wrap justify-center ">
            <div className="basis-[60%] lg:basis-[40%] =rounded-2xl">
              <div className="relative w-full h-full rounded-2xl bg-[#94cbf8] p-2 md:p-5 drop-shadow-xl">
                <div className="w-full text-center flex justify-center p-3">
                  <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl  bg-white rounded-xl w-fit h-fit p-3">
                    $10 per person
                  </h3>
                </div>
                <div className="relative p-3">
                  <ul className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl text-center">
                    <li>Your choice of 3 flavors of Ice Cream.</li>
                    <li>
                      Pre-scooped into sealed cups, ready to hand out to your
                      guests from our ice cream cart!
                    </li>
                  </ul>
                </div>
                <div className="w-full text-center flex justify-center p-3">
                  <h3 className="text-black font-FaroVariable text-sm md:text-lg xl:text-xl  bg-white rounded-xl w-fit h-fit p-3">
                    $6 per scoop for pickup
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center w-full flex flex-col items-center">
            <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
              Add Ons
            </h2>
            <div className="w-[80%] lg:w-[40%] my-2 md:my-4 ">
              {cateringAddOns.map((addOn, index) => {
                return (
                  <div
                    className="flex justify-between w-full items-start"
                    key={index}
                  >
                    <h3 className="text-black font-PoppinsLight  text-lg md:text-2xl text-left">
                      {addOn.desc}
                    </h3>
                    <h3 className="font-FaroVariable text-[#FF0000] text-lg md:text-2xl text-right">
                      {addOn.price}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center w-full flex flex-col items-center">
            <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
              Flavors
            </h2>
            <div className="relative w-[80%] md:w-[60%]">
              <ul className="text-black font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6 text-left list-disc flex flex-wrap">
                {cateringFlavors.map((flavor, index) => {
                  return (
                    <li key={index} className="my-2 w-1/2 px-4 list-inside">
                      <div className="inline-flex justify-between w-10/12">
                        <h4 className="text-base md:text-lg">{flavor.title}</h4>
                        <div className="flex justify-center sm:justify-left items-center w-1/4 flex-col sm:flex-row">
                          {flavor.isVegan ? (
                            <div className="inline mx-2">
                              <VeganBullet />
                            </div>
                          ) : (
                            ''
                          )}
                          {flavor.isDairyFree ? (
                            <div className="inline mx-2">
                              <DFBullet />
                            </div>
                          ) : (
                            ''
                          )}
                          {flavor.isGF ? (
                            <div className="inline mx-2">
                              <GFBullet />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className="my-2 w-1/2 px-4 list-inside">
                  <div className="inline-flex justify-between w-10/12">
                    <h4 className="text-base md:text-lg">Seasonal Sorbet</h4>
                    <div className="flex justify-center sm:justify-left items-center w-1/4 flex-col sm:flex-row">
                      <div className="inline mx-2">
                        <DFBullet />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-2xl mb-4">
              <em>Contact Us for Seasonal Flavors</em>
            </h2>
            <div className="flex w-1/2 justify-center items-start m-auto text-center">
              <div className="px-4 flex flex-col justify-center items-center">
                <GFBullet />
                <h2 className="text-black font-MyriadPro">Gluten Free</h2>
              </div>
              <div className="px-4 flex flex-col justify-center items-center">
                <VeganBullet />
                <h2 className="text-black font-MyriadPro">Vegan</h2>
              </div>
              <div className="px-4 flex flex-col justify-center items-center">
                <DFBullet />
                <h2 className="text-black font-MyriadPro">Dairy Free</h2>
              </div>
            </div>
          </div>
          <div className="text-center pb-4 md:pb-16 w-11/12 md:w-5/12 m-auto">
            <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
              Booking Inquiry Form
            </h2>
            <form
              className="flex flex-col justify-center items-center font-PoppinsLight text-[#FF0000]"
              ref={form}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="bg-white rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Contact Number"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
              />

              <input
                type="number"
                name="guestCount"
                required
                placeholder="Number of Guests"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={guestCount}
                inputMode="numeric"
                onChange={(e) => setGuestCount(e.currentTarget.value)}
              />

              <input
                type="datetime-local"
                name="eventDate"
                required
                placeholder="Event Date"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={eventDate}
                onChange={(e) => setEventDate(e.currentTarget.value)}
              />

              <input
                type="text"
                name="eventLocation"
                required
                placeholder="Event Location"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.currentTarget.value)}
              />

              <input
                type="text"
                name="eventType"
                required
                placeholder="Event Type"
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                value={eventType}
                onChange={(e) => setEventType(e.currentTarget.value)}
              />

              <select
                className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
                onChange={(e) => setDesiredPackage(e.currentTarget.value)}
              >
                <option defaultChecked value="">
                  What package are you interested in?
                </option>
                <option value="handScooped">Hand Scooped</option>
                <option value="sammie_full">Ice Cream Sammie - Cart</option>
                <option value="sammie_pickup">Ice Cream Sammie - Pickup</option>
                <option value="preScooped_full">Scoops - Cart</option>
                <option value="preScooped_pickup">Scoops - Pickup</option>
              </select>

              <button className="bg-[#FC4700] hover:bg-[#85D3A5] text-white rounded-xl mt-2 p-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function PackageCard({ tier }: { tier: CateringTier }) {
  return (
    <div className="basis-[48%] sm:basis-[24%] rounded-2xl my-2 sm:my-0">
      <div className="relative w-full h-full rounded-2xl bg-[#94cbf8] drop-shadow-xl p-5">
        <div className=" w-full text-center flex justify-center">
          <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl bg-white rounded-xl w-fit h-fit p-2">
            {tier.guestRange} GUESTS
          </h3>
        </div>
        <div className="relative text-center p-2">
          <h2 className="text-[#FF0000] font-FaroVariable text-2xl md:text-3xl overflow-visible leading-none relative">
            ${tier.price}
          </h2>
        </div>
        <div className="text-center relative text-black font-PoppinsLight text-sm md:text-lg xl:text-xl">
          <h3>{tier.flavorCount} Flavors</h3>
          <h3>${tier.addFlavorPrice} for additional flavor</h3>
        </div>
      </div>
    </div>
  );
}
