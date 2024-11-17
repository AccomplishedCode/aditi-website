'use client'
import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PhoneIcon, Mail, Clock, MessageSquare } from "lucide-react"

// Move formSchema outside of components
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  callbackTime: z.string().min(1, "Please specify your preferred callback time"),
  reason: z.string().min(1, "Please provide a reason for your inquiry"),
  details: z.string().optional(),
})

interface AppointmentSheetProps {
  triggerClassName?: string
  children: React.ReactNode
}

type Step = 'form' | 'confirmation'

export default function AppointmentSheet({ triggerClassName, children }: AppointmentSheetProps) {
  const [step, setStep] = useState<Step>('form')
  const [isOpen, setIsOpen] = useState(false)

  const steps = {
    form: {
      title: "Tell us about yourself 💬",
      component: <InitialForm onNext={() => setStep('confirmation')} />
    },
    confirmation: {
      title: "Request Submitted",
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
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      callbackTime: "",
      reason: "",
      details: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      toast({
        title: "Request submitted successfully",
        description: "We'll get back to you soon!",
      })
      onNext()
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Alert className="bg-red-50 border-red-200">
        <AlertDescription className="text-red-800">
          If you're experiencing thoughts of suicide or self-harm, please immediately contact the National Suicide Prevention Lifeline at <span className="font-bold">988</span> or <span className="font-bold">1-800-273-8255</span>
        </AlertDescription>
      </Alert>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input className="pl-10" placeholder="your@email.com" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input className="pl-10" placeholder="123-456-7890" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="callbackTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Callback Time</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input className="pl-10" placeholder="e.g., 3:00 PM" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Inquiry</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input className="pl-10" placeholder="e.g., Anxiety, Depression, etc." {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific concerns or questions..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
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