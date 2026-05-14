import React, { useState } from "react";

function PersonalDetails({ data, handleChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`form-section ${collapsed ? 'form-section--collapsed' : ''}`}>
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <span className="section-title">Personal Details</span>
        {collapsed && (
          <button className="btn-edit" type="button" onClick={() => setCollapsed(false)}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Edit
          </button>
        )}
      </div>

      <div className="section-fields">
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

        <div className="field-group">
          <label className="field-label">Professional Summary</label>
          <textarea className="field-textarea" name="summary"
            value={data.summary} onChange={handleChange}
            placeholder="A brief description of who you are and what you bring to the table…" />
        </div>

        <button className="btn-save" type="button" onClick={() => setCollapsed(true)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Save
        </button>
      </div>
    </div>
  )
}

export default PersonalDetails
