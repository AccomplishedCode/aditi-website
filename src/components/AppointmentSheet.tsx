'use client'
import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckIcon } from "lucide-react"

interface AppointmentSheetProps {
  triggerClassName?: string
  children: React.ReactNode
}

type Step = 'form' | 'calendar' | 'confirmation'

export default function AppointmentSheet({ triggerClassName, children }: AppointmentSheetProps) {
  const [step, setStep] = useState<Step>('form')
  const [isOpen, setIsOpen] = useState(false)

  const steps = {
    form: {
      title: "Tell us about yourself",
      component: <InitialForm onNext={() => setStep('calendar')} />
    },
    calendar: {
      title: "Choose your appointment time",
      component: <CalendlyIntegration onNext={() => setStep('confirmation')} onBack={() => setStep('form')} />
    },
    confirmation: {
      title: "Appointment Confirmed",
      component: <Confirmation onClose={() => setIsOpen(false)} />
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className={triggerClassName}>
          {children}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-light text-[#4A8C7D]">
            {steps[step].title}
          </SheetTitle>
        </SheetHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {steps[step].component}
          </motion.div>
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}

// Initial Form Component
function InitialForm({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      {/* Add your form fields here using shadcn form components */}
      <Button 
        onClick={onNext}
        className="w-full"
      >
        Continue to Schedule <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// Calendly Integration Component
function CalendlyIntegration({ 
  onNext, 
  onBack 
}: { 
  onNext: () => void
  onBack: () => void 
}) {
  return (
    <div className="space-y-6">
      <div className="h-[400px]">
        {/* Add Calendly Inline Widget here */}
        <iframe
          src="YOUR_CALENDLY_URL"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>
    </div>
  )
}

// Confirmation Component
function Confirmation({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
      >
        <CheckIcon className="w-8 h-8 text-green-600" />
      </motion.div>
      <h3 className="text-xl font-medium">Your appointment is scheduled!</h3>
      <p className="text-[#847C77]">
        You'll receive a confirmation email shortly with all the details.
      </p>
      <Button onClick={onClose} className="w-full">
        Done
      </Button>
    </div>
  )
} 