import React from "react";

function PersonalDetails({ data, handleChange }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <span className="section-title">Personal Details</span>
      </div>

      <div className="field-group">
        <label className="field-label">Full Name</label>
        <input className="field-input" type="text" name="name"
          value={data.name} onChange={handleChange} placeholder="e.g. Alex Sterling" />
      </div>

      <div className="field-row">
        <div className="field-group">
          <label className="field-label">Email</label>
          <input className="field-input" type="email" name="email"
            value={data.email} onChange={handleChange} placeholder="you@email.com" />
        </div>
        <div className="field-group">
          <label className="field-label">Phone</label>
          <input className="field-input" type="tel" name="phone"
            value={data.phone} onChange={handleChange} placeholder="+1 555 000 000" />
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">Address / Location</label>
        <input className="field-input" type="text" name="address"
          value={data.address} onChange={handleChange} placeholder="City, Country" />
      </div>

      <button className="btn-save" type="button">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Save
      </button>
    </div>
  )
}

export default PersonalDetails
