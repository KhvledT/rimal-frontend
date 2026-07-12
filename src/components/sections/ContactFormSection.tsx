import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { MapPin, Mail, Phone } from "lucide-react";
import { useContactInfo } from "@/hooks/useContactInfo";
import { fadeUpVariant } from "@/lib/animations";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { submitContact } from "@/services/contactService";

const ContactFormSection = () => {
  const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContactInfo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast.success("Message sent! We'll be in touch shortly.");
      reset();
    },
    onError: (error: unknown) => {
      const axiosError = error as { response?: { status?: number }; message?: string };
      if (axiosError?.response?.status === 429) {
        toast.error("Too many attempts. Please try again later.");
      } else {
        toast.error(`Something went wrong: ${axiosError?.message || "Failed to submit message"}`);
      }
    },
  });

  const onSubmit = (data: ContactFormData) => mutation.mutate(data);

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: isContactLoading
        ? "Loading address..."
        : isContactError || !contactData?.address
        ? "Address unavailable"
        : contactData.address,
    },
    {
      icon: Mail,
      label: "Email",
      value: isContactLoading
        ? "Loading email..."
        : isContactError || !contactData?.emails || contactData.emails.length === 0
        ? "Email unavailable"
        : contactData.emails[0],
    },
    {
      icon: Phone,
      label: "Phone",
      value: isContactLoading
        ? "Loading phone numbers..."
        : isContactError || !contactData?.phones || contactData.phones.length === 0
        ? "Phone unavailable"
        : contactData.phones.join(", "),
    },
  ];

  return (
    <section className="bg-sand mt-20">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="space-y-6"
            noValidate
          >
            <h2 className="font-serif text-2xl text-navy mb-8">
              Send Us a Message
            </h2>

            {/* Name */}
            <div>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                aria-label="Your name"
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                {...register("name")}
                className={`w-full px-4 py-3.5 border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors ${
                  errors.name ? "border-red-400" : "border-border focus:border-gold"
                }`}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Phone Number"
                aria-label="Your phone number"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-invalid={!!errors.phone}
                {...register("phone")}
                className={`w-full px-4 py-3.5 border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors ${
                  errors.phone ? "border-red-400" : "border-border focus:border-gold"
                }`}
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                aria-label="Your email address"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                {...register("email")}
                className={`w-full px-4 py-3.5 border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors ${
                  errors.email ? "border-red-400" : "border-border focus:border-gold"
                }`}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                id="contact-message"
                placeholder="Your message"
                aria-label="Your message"
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                rows={6}
                {...register("message")}
                className={`w-full px-4 py-3.5 border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-400" : "border-border focus:border-gold"
                }`}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              id="contact-submit"
              type="submit"
              disabled={isSubmitting || mutation.isPending}
              className="px-12 py-3.5 bg-gold text-secondary-foreground font-body text-sm tracking-wide hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Sending…" : "Send Message"}
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeUpVariant}
              custom={0}
              className="font-serif text-2xl text-navy mb-8"
            >
              Contact Information
            </motion.h2>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUpVariant}
                custom={i + 1}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-beige rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-1">
                    {item.label}
                  </h3>
                  <p className="font-body text-sm text-foreground/70 whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUpVariant}
              custom={5}
              className="pt-8 border-t border-border"
            >
              <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
                Social
              </h3>
              <div className="flex gap-6">
                <span className="font-body text-sm text-foreground/50">
                  {isContactLoading ? (
                    <span className="opacity-40 animate-pulse">Loading social link...</span>
                  ) : isContactError || !contactData?.linkedIn ? (
                    <span className="text-red-400/60 text-xs">LinkedIn unavailable</span>
                  ) : (
                    <a
                      href={contactData.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors duration-200"
                    >
                      <span className="font-bold">LinkedIn:</span> Rimal Trading Group
                    </a>
                  )}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
