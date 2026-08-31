import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EnquiryForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        mobile: "",
        whatsapp: "",
        email: "",
        city: "",
        state: "",
        country: "",
        projectType: "",
        projectLocation: "",
        availableArea: "",
        propertyStatus: "",
        investment: "",
        timeline: "",
        experience: "",
        services: [],
        referral: "",
        additional: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((s) => s !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if at least one field has data
        const hasData = Object.values(formData).some((val) => {
            if (Array.isArray(val)) return val.length > 0;
            return val && val.trim() !== "";
        });

        if (!hasData) {
            alert("Please fill in at least one field before submitting.");
            return;
        }

        // Build WhatsApp message
        const message = `
🌱 TrueLeaves Enquiry Form 🌱

👤 Name: ${formData.fullName}
🏢 Company: ${formData.company}
📱 Mobile: ${formData.mobile}
💬 WhatsApp: ${formData.whatsapp}
📧 Email: ${formData.email}
📍 City: ${formData.city}, State: ${formData.state}, Country: ${formData.country}

📂 Project Type: ${formData.projectType}
📍 Project Location: ${formData.projectLocation}
📐 Available Area: ${formData.availableArea}
🏠 Property Status: ${formData.propertyStatus}

💰 Investment: ${formData.investment}
⏳ Timeline: ${formData.timeline}
🎓 Experience: ${formData.experience}

🛠 Services Required: ${formData.services.join(", ")}
📢 Referral: ${formData.referral}

📝 Additional Notes:
${formData.additional}
  `;

        const encodedMessage = encodeURIComponent(message);
        const businessNumber = "918870309890"; // replace with your WhatsApp number

        // Open WhatsApp
        window.open(`https://wa.me/${businessNumber}?text=${encodedMessage}`, "_blank");

        // Clear form after submission
        setFormData({
            fullName: "",
            company: "",
            mobile: "",
            whatsapp: "",
            email: "",
            city: "",
            state: "",
            country: "",
            projectType: "",
            projectLocation: "",
            availableArea: "",
            propertyStatus: "",
            investment: "",
            timeline: "",
            experience: "",
            services: [],
            referral: "",
            additional: "",
        });
    };

    return (
        <>
            <Navbar />
            <form className="enquiry-form" onSubmit={handleSubmit}>
                <h2>TrueLeaves System – Hydroponic Project Enquiry Form</h2>

                {/* 1. Contact Details */}
                <section>
                    <h3>1. Contact Details</h3>
                    <input name="fullName" placeholder="Full Name *" onChange={handleChange} />
                    <input name="company" placeholder="Company / Organization" onChange={handleChange} />
                    <input name="mobile" placeholder="Mobile Number *" onChange={handleChange} />
                    <input name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} />
                    <input name="email" placeholder="Email ID *" onChange={handleChange} />
                    <input name="city" placeholder="City" onChange={handleChange} />
                    <input name="state" placeholder="State" onChange={handleChange} />
                    <input name="country" placeholder="Country" onChange={handleChange} />
                </section>

                {/* 2. Project Type */}
                <section>
                    <h3>2. Project Type *</h3>
                    {[
                        "Commercial Hydroponic Farm",
                        "Indoor Vertical Farming",
                        "Home Hydroponic Garden",
                        "Terrace Hydroponic Garden",
                        "Greenhouse / Polyhouse",
                        "Hydroponic Automation",
                        "Nutrient Dosing System",
                        "Existing Farm Upgrade / Consultation",
                    ].map((type) => (
                        <label key={type}>
                            <input
                                type="radio"
                                name="projectType"
                                value={type}
                                onChange={handleChange}
                            />
                            {type}
                        </label>
                    ))}
                </section>

                {/* 3. Project Details */}
                <section>
                    <h3>3. Project Details</h3>
                    <input name="projectLocation" placeholder="Project Location" onChange={handleChange} />
                    <input name="availableArea" placeholder="Available Area" onChange={handleChange} />
                    <select name="propertyStatus" onChange={handleChange}>
                        <option value="">Property Status</option>
                        <option>Own Property</option>
                        <option>Leased Property</option>
                        <option>Planning to Buy</option>
                        <option>Planning to Rent</option>
                    </select>
                </section>

                {/* 4. Investment Capacity */}
                <section>
                    <h3>4. Investment Capacity</h3>
                    {[
                        "Below ₹5 Lakhs",
                        "₹5–10 Lakhs",
                        "₹10–25 Lakhs",
                        "₹25–50 Lakhs",
                        "₹50 Lakhs–₹1 Crore",
                        "Above ₹1 Crore",
                        "Need Cost Estimation",
                    ].map((inv) => (
                        <label key={inv}>
                            <input type="radio" name="investment" value={inv} onChange={handleChange} />
                            {inv}
                        </label>
                    ))}
                </section>

                {/* 5. Project Timeline */}
                <section>
                    <h3>5. Project Timeline</h3>
                    {["Immediately", "Within 1 Month", "Within 3 Months", "Within 6 Months", "Just Exploring"].map((t) => (
                        <label key={t}>
                            <input type="radio" name="timeline" value={t} onChange={handleChange} />
                            {t}
                        </label>
                    ))}
                </section>
                <section>
                    <h3>6. Experience</h3>
                    <div className="option-group">
                        {["No Experience", "Beginner", "Experienced", "Existing Hydroponic Farmer"].map((exp) => (
                            <label key={exp}>
                                <input type="radio" name="experience" value={exp} onChange={handleChange} />
                                {exp}
                            </label>
                        ))}
                    </div>
                </section>

                <section>
                    <h3>7. Services Required</h3>
                    <div className="option-group">
                        {["Turnkey Project", "Design & Engineering", "Fabrication & Installation", "Automation", "Training", "Annual Maintenance"].map((srv) => (
                            <label key={srv}>
                                <input type="checkbox" name="services" value={srv} onChange={handleChange} />
                                {srv}
                            </label>
                        ))}
                    </div>
                </section>

                {/* 8. Referral */}
                <section>
                    <h3>8. How Did You Know About Us?</h3>
                    <select name="referral" onChange={handleChange}>
                        <option value="">Select</option>
                        <option>Google</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>YouTube</option>
                        <option>Referral</option>
                        <option>Existing Client</option>
                        <option>Exhibition</option>
                        <option>Other</option>
                    </select>
                </section>

                {/* 9. Additional Requirements */}
                <section>
                    <h3>9. Additional Requirements</h3>
                    <textarea
                        name="additional"
                        placeholder="Describe your project goals or requirements"
                        onChange={handleChange}
                    />
                </section>

                {/* 10. File Upload */}
                <section>
                    <h3>10. Upload Documents (Optional)</h3>
                    <input type="file" multiple />
                </section>

                <button type="submit">Request a Free Consultation</button>
            </form>
            <Footer />
        </>
    );
}

export default EnquiryForm;
