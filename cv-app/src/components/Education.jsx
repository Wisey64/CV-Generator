import React from "react";

function Education({ data, handleChange }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <span className="section-title">Education</span>
      </div>

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

      <button className="btn-save" type="button">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Save
      </button>
    </div>
  )
}

export default Education
