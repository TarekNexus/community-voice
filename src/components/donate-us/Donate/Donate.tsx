"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CustomIcon7 } from "@/components/ui/CustomIcon";

export default function DonationPage() {
  const [step, setStep] = useState(1);

  // Step 1
  const [donationType, setDonationType] = useState("One time");
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const [donationMessage, setDonationMessage] = useState("");

  // Step 2
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [updates, setUpdates] = useState(false);

  // Step 3
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // helper: show toast-style error using SweetAlert2
  const showToastError = (message: string) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  // helper: basic email validation
  const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

  // helper: expiry validation (accepts MM / YYYY or MM/YYYY or MM / YY)
  const isValidExpiry = (value: string) => {
    if (!value) return false;
    const m = value.trim().match(/^(\d{1,2})\s*\/\s*(\d{2,4})$/);
    if (!m) return false;
    const month = parseInt(m[1], 10);
    let year = parseInt(m[2], 10);
    if (isNaN(month) || isNaN(year)) return false;
    if (year < 100) year += 2000; 
    if (month < 1 || month > 12) return false;
    const now = new Date();

   
    if (year < now.getFullYear()) return false;
    if (year === now.getFullYear() && month < now.getMonth() + 1) return false;
    return true;
  };

  const handleNext = () => {
 
    if (step === 1) {
      const amountNum = parseFloat(String(donationAmount));
      if (isNaN(amountNum) || amountNum <= 0) {
        showToastError("Please enter a valid donation amount (> 0).");
        return;
      }
    }

    
    if (step === 2) {
      if (!name.trim()) {
        showToastError("Please enter your full name.");
        return;
      }
      if (!email.trim() || !isValidEmail(email)) {
        showToastError("Please enter a valid email address.");
        return;
      }
    }

    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    // Validate Step 1 again just in case (defensive)
    const amountNum = parseFloat(String(donationAmount));
    if (isNaN(amountNum) || amountNum <= 0) {
      showToastError("Please enter a valid donation amount (> 0).");
      setStep(1);
      return;
    }

    // Validate Step 2
    if (!name.trim()) {
      showToastError("Please enter your full name.");
      setStep(2);
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      showToastError("Please enter a valid email address.");
      setStep(2);
      return;
    }

    // Validate Step 3 (payment fields)
    const cleanedCard = cardNumber.replace(/\D/g, "");
    if (!cleanedCard || !/^\d{12,19}$/.test(cleanedCard)) {
      showToastError("Please enter a valid card number (12-19 digits).");
      setStep(3);
      return;
    }
    if (!isValidExpiry(expiry)) {
      showToastError("Please enter a valid expiry date (MM / YYYY) in the future.");
      setStep(3);
      return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      showToastError("Please enter a valid CVV (3 or 4 digits).");
      setStep(3);
      return;
    }

   
    console.log("Final Submission:", {
      donationType,
      donationAmount,
      donationMessage,
      name,
      email,
      phone,
      updates,
      cardNumber,
      expiry,
      cvv,
    });

   
    Swal.fire({
      title: "Thank You!",
      text: `Your donation of $${donationAmount} has been completed successfully.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffb703",
    });

    // Reset form or go back to step 1
    setStep(1);
    setDonationAmount(50);
    setDonationType("One time");
    setDonationMessage("");
    setName("");
    setEmail("");
    setPhone("");
    setUpdates(false);
    setCardNumber("");
    setExpiry("");
    setCvv("");
  };

  return (
    <div className="flex justify-center items-center md:mt-5 mt-1 md:mb-10 mb-5 px-2 md:px-4">
      <Card className="max-w-7xl lg:px-50 md:px-10 rounded-2xl border-none shadow-xl bg-[#0077a3]">
        <CardContent className="p-8 space-y-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="text-center space-y-6">
              <h2 className="text-[25px] font-bold text-white">
                Select donation type
              </h2>

              <div className="flex justify-center md:gap-3 gap-1 flex-wrap">
                {["One time", "Weekly", "Monthly"].map((type) => (
                  <Button
                    key={type}
                    variant="outline"
                    onClick={() => setDonationType(type)}
                    className={cn(
                      "rounded-full px-5 py-1 text-sm",
                      donationType === type
                        ? "bg-gradient-to-t from-[rgba(200,228,88,1)] to-[rgba(255,254,170,1)] text-black"
                        : "bg-white text-black font-semibold"
                    )}
                  >
                    {type}
                  </Button>
                ))}
              </div>

              <h3 className="text-[25px] font-bold text-white">
                Choose Your Donation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-3 gap-1 ">
                {[10, 20, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setDonationAmount(amt)}
                    className={cn(
                      "rounded-[17px] md:max-w-[90px] w-full h-[71px] text-[22px] font-semibold py-3 border ",
                      donationAmount === amt
                        ? "bg-gradient-to-t from-[rgba(200,228,88,1)] to-[rgba(255,254,170,1)] text-black"
                        : "bg-white border-white text-black"
                    )}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div className=" flex md:gap-3 gap-1 justify-center">
                {[200].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setDonationAmount(amt)}
                    className={cn(
                      "rounded-[17px] md:max-w-[90px] h-[71px] text-[22px] font-semibold border w-full",
                      donationAmount === amt
                        ? "bg-gradient-to-t from-[rgba(200,228,88,1)] to-[rgba(255,254,170,1)] text-black"
                        : "bg-white border-white text-black"
                    )}
                  >
                    ${amt}
                  </button>
                ))}
                <Input
                  placeholder="Custom"
                  type="number"
                  value={typeof donationAmount === "string" ? donationAmount : ""}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="text-center bg-white text-[22px] font-semibold rounded-[17px] md:w-[90px] h-[71px]"
                />
              </div>

              <label className="text-[22px] font-semibold text-white">
                Tell us about your donation{" "}
                <span className="text-[16px] font-medium">(optional)</span>
              </label>
              <div className="flex justify-center max-w-[463px] mx-auto">
                <Input
                  value={donationMessage}
                  onChange={(e) => setDonationMessage(e.target.value)}
                  className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
                />
              </div>

              <Button
                onClick={handleNext}
                className="bg-[#ffb703] rounded-none w-[100px] h-[46px] text-[15px] hover:bg-[#ffa500] text-white font-bold"
              >
                Proceed
              </Button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 md:max-w-[463px] mx-auto">
              <h2 className="text-[25px] font-bold text-center text-white">
                Your Information
              </h2>
              <label className="mb-3 text-lg text-white">Full name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />
              <label className="mb-3 text-lg text-white">Email address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />
              <label className="mb-3 text-lg text-white">
                Phone number <span className="text-sm">(optional)</span>
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />

              <label className="flex items-center gap-2 text-[12px] text-white">
                <input
                  type="checkbox"
                  checked={updates}
                  onChange={(e) => setUpdates(e.target.checked)}
                />
                Send me updates about how my donation is making a difference
              </label>

              <div className="flex pt-6 gap-4 justify-center flex-wrap">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="w-full sm:w-[74px] h-[47px] bg-[#007BA5] text-white border-2 rounded-[5px]"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="w-full sm:w-[100px] h-[46px] bg-[#ffb703] hover:bg-[#ffa500] text-white font-semibold rounded-[5px]"
                >
                  Proceed
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4 md:max-w-[400px] mx-auto">
              <div className="flex flex-col items-center">
                <CustomIcon7 />
                <h2 className="text-[25px] font-bold text-center text-white">
                  Secure Payment
                </h2>
              </div>

              <label className="mb-3 text-lg text-white">Card number</label>
              <Input
                placeholder="1234 3222 2525 25"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />
              <label className="mb-3 text-lg text-white">Expiry</label>
              <Input
                placeholder="MM / YYYY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />
              <label className="mb-3 text-lg text-white">CVV</label>
              <Input
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="bg-white py-3 h-[46px] text-2xl rounded-[8px] w-full"
              />

              <div className="flex pt-6 gap-4 justify-center flex-wrap">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="w-full sm:w-[74px] h-[47px] bg-[#007BA5] text-white border-2 rounded-[5px]"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="w-full sm:max-w-[162px] h-[46px] bg-[#ffb703] hover:bg-[#ffa500] text-white font-semibold rounded-[5px]"
                >
                  Complete Donation
                </Button>
              </div>
            </div>
          )}

          {/* Step Indicators */}
          <div className="flex justify-center mt-2 space-x-2">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-1 w-10 rounded-full",
                  step === i ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
