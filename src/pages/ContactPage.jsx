import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Clock,
  Shield,
  Building2,
} from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactInfo = t("contact.contact_info", { returnObjects: true }).map(
    (info, index) => ({
      icon: [Mail, Phone, MapPin][index],
      title: info.title,
      content: info.content,
      description: info.description,
      color: "orange",
    })
  );

  const features = t("contact.features.items", { returnObjects: true }).map(
    (feature, index) => ({
      icon: [Clock, Shield, CheckCircle][index],
      title: feature.title,
      description: feature.description,
    })
  );

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = t("contact.form.errors.name_required");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.email_required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.email_invalid");
    }
    if (!formData.message.trim())
      newErrors.message = t("contact.form.errors.message_required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    // eslint-disable-next-line no-unused-vars
    } catch (_error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50 min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            {t("contact.header.tagline")}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <Trans
              i18nKey="contact.header.title"
              components={{
                span: <span className="text-orange-600" />,
                br: <br />,
              }}
            />
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.header.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`mb-8 p-4 rounded-2xl flex items-center gap-3 ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="font-medium">
                    {t(`contact.form.status.${submitStatus}`)}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-slate-700"
                      htmlFor="name"
                    >
                      {t("contact.form.labels.name")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full h-14 pl-12 pr-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 ${
                          errors.name
                            ? "border-red-300 focus:border-red-500"
                            : "border-slate-200 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300"
                        }`}
                        placeholder={t("contact.form.placeholders.name")}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-slate-700"
                      htmlFor="email"
                    >
                      {t("contact.form.labels.email")}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full h-14 pl-12 pr-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500"
                            : "border-slate-200 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300"
                        }`}
                        placeholder={t("contact.form.placeholders.email")}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-slate-700"
                      htmlFor="company"
                    >
                      {t("contact.form.labels.company")}
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full h-14 pl-12 pr-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
                        placeholder={t("contact.form.placeholders.company")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-slate-700"
                      htmlFor="phone"
                    >
                      {t("contact.form.labels.phone")}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-14 pl-12 pr-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
                        placeholder={t("contact.form.placeholders.phone")}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-slate-700"
                    htmlFor="subject"
                  >
                    {t("contact.form.labels.subject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300 placeholder-slate-400"
                    placeholder={t("contact.form.placeholders.subject")}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-slate-700"
                    htmlFor="message"
                  >
                    {t("contact.form.labels.message")}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full p-4 pl-12 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder-slate-400 resize-none ${
                        errors.message
                          ? "border-red-300 focus:border-red-500"
                          : "border-slate-200 focus:border-orange-400 focus:bg-white focus:shadow-lg hover:border-slate-300"
                      }`}
                      placeholder={t("contact.form.placeholders.message")}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {t("contact.form.submit_button.sending")}
                        </>
                      ) : (
                        <>
                          {t("contact.form.submit_button.send")}
                          <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-orange-600 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-slate-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <h3 className="font-semibold text-slate-800 mb-4">
                {t("contact.features.title")}
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <h3 className="font-semibold text-slate-800 mb-4">
                {t("contact.company.title")}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <Trans
                  i18nKey="contact.company.description"
                  components={{ strong: <strong />, br: <br /> }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
