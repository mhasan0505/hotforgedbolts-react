// import React, { useState } from 'react';
// import emailjs from 'emailjs';
// import { emailjsConfig } from '../config/emailjs';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   User,
//   MessageSquare,
//   Clock,
//   Shield
// } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
//     if (!formData.message.trim()) newErrors.message = 'Message is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const { serviceId, templateId, publicKey } = emailjsConfig;

//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         company: formData.company,
//         phone: formData.phone,
//         subject: formData.subject,
//         message: formData.message,
//         to_email: 'info@hotforgedbolts.com',
//         reply_to: formData.email,
//       };

//       await emailjs.send(serviceId, templateId, templateParams, publicKey);

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });

//       setTimeout(() => setSubmitStatus(null), 5000);
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setSubmitStatus('error');
//       setTimeout(() => setSubmitStatus(null), 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email Us',
//       content: 'info@hotforgedbolts.com',
//       description: 'Send us an email anytime',
//       color: 'violet'
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       content: '+905435533387',
//       description: 'Mon-Fri from 8am to 5pm',
//       color: 'violet'
//     },
//     {
//       icon: MapPin,
//       title: 'Visit Us',
//       content: '3. Kazan Sk. 7/A',
//       description: 'Altınova, 16250 Osmangazi/Bursa, Türkiye',
//       color: 'violet'
//     }
//   ];

//   const features = [
//     {
//       icon: Clock,
//       title: 'Quick Response',
//       description: 'We respond within 24 hours'
//     },
//     {
//       icon: Shield,
//       title: 'Secure & Private',
//       description: 'Your information is protected'
//     },
//     {
//       icon: CheckCircle,
//       title: 'Expert Support',
//       description: 'Professional technical assistance'
//     }
//   ];

//   return (
//     <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-violet-50 min-h-screen overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
//             <MessageSquare className="w-4 h-4" />
//             Get In Touch
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
//             <span className="bg-gradient-to-r from-slate-800 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
//               Let's Build
//             </span>
//             <br />
//             <span className="text-violet-600">Something Great</span>
//           </h1>

//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
//             Ready to discuss your project? We're here to help you create exceptional
//             hot forged solutions. Reach out and let's start the conversation.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12 items-start">
//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 animate-slide-up">
//               {/* Status Messages */}
//               {submitStatus && (
//                 <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 animate-fade-in ${
//                   submitStatus === 'success'
//                     ? 'bg-green-50 text-green-700 border border-green-200'
//                     : 'bg-red-50 text-red-700 border border-red-200'
//                 }`}>
//                   {submitStatus === 'success' ? (
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                   ) : (
//                     <AlertCircle className="w-5 h-5 flex-shrink-0" />
//                   )}
//                   <span className="font-medium">
//                     {submitStatus === 'success'
//                       ? 'Message sent successfully! We\'ll get back to you soon.'
//                       : 'Failed to send message. Please try again or contact us directly.'}
//                   </span>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* Name and Email Row */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-slate-700" htmlFor="name">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className={`w-full h-14 pl-12 pr-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 ${
//                           errors.name
//                             ? 'border-red-300 focus:border-red-500'
//                             : 'border-slate-200 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300'
//                         }`}
//                         placeholder="Enter your full name"
//                       />
//                     </div>
//                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={`w-full h-14 pl-12 pr-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 ${
//                           errors.email
//                             ? 'border-red-300 focus:border-red-500'
//                             : 'border-slate-200 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300'
//                         }`}
//                         placeholder="your.email@example.com"
//                       />
//                     </div>
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                 </div>

//                 {/* Company and Phone Row */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-slate-700" htmlFor="company">
//                       Company (Optional)
//                     </label>
//                     <input
//                       id="company"
//                       name="company"
//                       type="text"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
//                       placeholder="Your company name"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-slate-700" htmlFor="phone">
//                       Phone (Optional)
//                     </label>
//                     <div className="relative">
//                       <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full h-14 pl-12 pr-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
//                         placeholder="+1 (555) 123-4567"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Subject */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-slate-700" htmlFor="subject">
//                     Subject (Optional)
//                   </label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-slate-700" htmlFor="message">
//                     Your Message *
//                   </label>
//                   <div className="relative">
//                     <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       rows={6}
//                       className={`w-full p-4 pl-12 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 resize-none ${
//                         errors.message
//                           ? 'border-red-300 focus:border-red-500'
//                           : 'border-slate-200 focus:border-violet-400 focus:bg-white focus:shadow-lg hover:border-slate-300'
//                       }`}
//                       placeholder="Tell us about your project, requirements, or any questions you have..."
//                     />
//                   </div>
//                   {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full md:w-auto group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none min-w-[200px]"
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-2">
//                       {isSubmitting ? (
//                         <>
//                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           Send Message
//                           <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
//                         </>
//                       )}
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Contact Info Sidebar */}
//           <div className="space-y-8">
//             {/* Contact Cards */}
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => {
//                 const IconComponent = info.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 animate-slide-up"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center group-hover:bg-violet-200 transition-colors flex-shrink-0">
//                         <IconComponent className="w-6 h-6 text-violet-600" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
//                         <p className="text-violet-600 font-medium mb-1">{info.content}</p>
//                         <p className="text-sm text-slate-500">{info.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Features */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 animate-slide-up animation-delay-400">
//               <h3 className="font-semibold text-slate-800 mb-4">Why Choose Us?</h3>
//               <div className="space-y-4">
//                 {features.map((feature, index) => {
//                   const IconComponent = feature.icon;
//                   return (
//                     <div key={index} className="flex items-start gap-3">
//                       <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <IconComponent className="w-4 h-4 text-violet-600" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-slate-800 text-sm">{feature.title}</h4>
//                         <p className="text-xs text-slate-500">{feature.description}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out;
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }

//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }

//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;


import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact