export const TailwindConfigTS = `
import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  fontSize: {
    xs: "11px",
    sm: "13px",
    base: "1rem",
    lg: "1.2rem",
    xl: " 1.425rem",
    "2xl": " 1.71rem",
    "3xl": " 2.052rem",
    "4xl": "2.463rem",
    "5xl": "2.955rem",
    "6xl": "3.546rem",
    "7xl": "4.25rem",
    "8xl": "5.1rem",
    "9xl": "8rem",
    "10xl": "10rem",
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        input: \`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)\`,
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [\`--$\{key}\`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config
`


export const AccertinityUiInput = `
// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate\`
        radial-gradient(
          $\{visible ? radius + "px" : "0px"} circle at $\{mouseX}px $\{mouseY}px,
          #FBBDD0,
          transparent 80%
        )
      \`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            \`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-accent dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           \`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };

`

export const TemplateFormComponent = `
"use client"
import { Input } from '@/components/acer/input'
import { MotionDiv } from '@/components/acer/motionDiv'
import { TextArea } from '@/components/acer/textarea'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { AppointmentSchema } from '@/lib/schema/Appointment'
import { sendEmail } from '@/lib/sendmail'
import { cn } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { z } from "zod"

export const AppointmentSchema = z.object({
    firstName: z.string({
      required_error: "Please enter your first name.",
    }).min(2).max(50),
    lastName: z.string({
      required_error: "Please enter your last name.",
    }).min(2).max(50),
    email: z.string().min(2).max(20).optional(),
    phonenumber: z.string({
      required_error: "Please enter your contact number.",
    }).min(2).max(10),
    message: z.string().min(2).max(200).optional(),
    appointmentDate: z.date({
      required_error: "A date of appointment is required.",
    }),
})
  
const BookingForm = () => {
    const form = useForm<z.infer<typeof AppointmentSchema>>({
        resolver: zodResolver(AppointmentSchema),
    })
    const [submitting, setSubmitting] = useState(false);
    async function onSubmit(values: z.infer<typeof AppointmentSchema>) {
        setSubmitting(true);
        const bodyText = \`
        <div>
            <h1
                style="margin: 0px; padding: 0px; color: #0f0f0f; font-size: 1.2rem"
            >
                Appointment Date: $\{values.appointmentDate.toLocaleString().substring(0, 15)} 🧑‍🚀 🗓️
            </h1><br>
            <section
                style="margin: 7px 0px; color: #1f1f1f; font-size: 16px; margin: 0px; border: 2px solid black; padding: 10px; border-radius: 10px;"
            >
            <p>Name: <span style="color: #0f0f0f; font-weight: 700">$\{values.firstName} $\{values.lastName}</span></p>
            <p>Contact Number: <span style="color: #0f0f0f; font-weight: 700">$\{values.phonenumber\}</span></p>
            $\{values.email
            && \`<p>Email: <span style="color: #0f0f0f; font-weight: 700">$\{values.email} 📨</span></p>\`
            }
            $\{values.message
            && \` <p>Their message: <span style="color: #0f0f0f; font-weight: 700">$\{values.message}</p>\`
            }
            </section>
            <div style="width: 100%; text-align: center; margin: 10px 0px; color: #10101f">
            <p>Powered by: <a href="https://themisfitofnightraid.com" style="color: #10101f; text-decoration: none;"> TheMisFitOfNightRaid </a></p>
            </div>
        </div>
        \`
        console.log(values)
        const response = await sendEmail({
            subject: "New Appointment Booked🚀",
            body: bodyText,
        })
        if (response.success) {
            toast.success('Appointment Booked. 🥳')
        }
        setSubmitting(false);
    }
    return (
        <div className='py-10 flex flex-col items-center gap-14'>
            <div className='flex flex-col w-full items-center gap-7'>
                <span className='text-light text-3xl text-primary'>APPOINTMENT</span>
                <div className='text-5xl text-center'>
                    <h2>Make An Appointment</h2>
                </div>
            </div>
            <div className="max-w-md w-full flex justify-center mx-auto rounded-none md:rounded-2xl p-4 md:px-8 shadow-input bg-white dark:bg-black">
                <Form {...form}>
                    <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <LabelInputContainer>
                                        <FormItem>
                                            <FormLabel>
                                                First name
                                            </FormLabel>
                                            <FormControl>
                                                <Input id="firstName" placeholder="First Name" type="text"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </LabelInputContainer>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <LabelInputContainer>
                                        <FormItem>
                                            <FormLabel>
                                                Last name
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Last Name" type="text"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </LabelInputContainer>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="phonenumber"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Contact Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input id="phonenumber" placeholder='98XXXXXXXX' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input  placeholder='youremail@mail.com' {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="appointmentDate"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem className="flex flex-col w-full">
                                        <FormLabel>
                                            Please Pick a date for our Appointment
                                        </FormLabel>
                                        <Popover >
                                            <FormControl>
                                                <MotionDiv>
                                                    <PopoverTrigger className='hover:bg-background' asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                \`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                                                               placeholder:text-muted dark:placeholder-text-neutral-600
                                                              focus-visible:outline-none focus-visible:ring-[2px] text-left pl-3 font-normal focus-visible:ring-accent dark:focus-visible:ring-neutral-600
                                                               disabled:cursor-not-allowed disabled:opacity-50
                                                               dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                                                               group-hover/input:shadow-none transition duration-400 hover:bg-background hover:text-foreground
                                                               \`,
                                                                !field.value && "text-muted-foreground"
                                                            )}

                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                </MotionDiv>
                                            </FormControl>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Your message:
                                        </FormLabel>
                                        <FormControl>
                                            <TextArea
                                                {...field}
                                                placeholder="I want to have a hair treatment..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <Button
                            className="relative group/btn w-full font-medium "
                            type="submit"
                        >
                            {
                                submitting
                                ? "Submitting..."
                                : "Book An Appointment"
                            }
                            <BottomGradient />
                        </Button>
                        <span className='text-muted text-xs'>We will never share your information with anyone.</span>
                    </form>
                </Form>
            </div>
        </div>
    )
}
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </>
    );
};
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default BookingForm

`