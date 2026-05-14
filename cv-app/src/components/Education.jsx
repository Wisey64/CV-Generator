import React, { useState } from "react";

function Education({ data, handleChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`form-section ${collapsed ? 'form-section--collapsed' : ''}`}>
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <span className="section-title">Education</span>
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
          <label className="field-label">School / University</label>
          <input className="field-input" type="text" name="schoolname"
            value={data.schoolname} onChange={handleChange} placeholder="e.g. Stanford University" />
        </div>

        <div className="field-group">
          <label className="field-label">Degree</label>
          <input className="field-input" type="text" name="degree"
            value={data.degree} onChange={handleChange} placeholder="e.g. B.Sc. Computer Science" />
        </div>

        <div className="field-row">
          <div className="field-group">
            <label className="field-label">Start Date</label>
            <input className="field-input" type="date" name="schoolstartdate"
              value={data.schoolstartdate} onChange={handleChange} />
          </div>
          <div className="field-group">
            <label className="field-label">End Date</label>
            <input className="field-input" type="date" name="schoolenddate"
              value={data.schoolenddate} onChange={handleChange} />
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">School Location</label>
          <input className="field-input" type="text" name="schooladdress"
            value={data.schooladdress} onChange={handleChange} placeholder="City, Country" />
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

export default Education
