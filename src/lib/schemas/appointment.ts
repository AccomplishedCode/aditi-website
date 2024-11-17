import { z } from "zod"

export const appointmentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  reason: z.string().min(10, "Please tell us a bit more about why you're seeking therapy"),
  preferredContact: z.enum(["email", "phone"]),
})

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema> 