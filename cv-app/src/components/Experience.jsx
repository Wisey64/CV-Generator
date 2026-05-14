import React, { useState } from "react";

function Experience({ data, handleChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`form-section ${collapsed ? 'form-section--collapsed' : ''}`}>
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <span className="section-title">Experience</span>
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
          <label className="field-label">Company Name</label>
          <input className="field-input" type="text" name="companyname"
            value={data.companyname} onChange={handleChange} placeholder="e.g. Innovate Global" />
        </div>

        <div className="field-group">
          <label className="field-label">Position Title</label>
          <input className="field-input" type="text" name="position"
            value={data.position} onChange={handleChange} placeholder="e.g. Senior Product Manager" />
        </div>

        <div className="field-row">
          <div className="field-group">
            <label className="field-label">Start Date</label>
            <input className="field-input" type="date" name="companystartdate"
              value={data.companystartdate} onChange={handleChange} />
          </div>
          <div className="field-group">
            <label className="field-label">End Date</label>
            <input className="field-input" type="date" name="companyenddate"
              value={data.companyenddate} onChange={handleChange} />
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">Location</label>
          <input className="field-input" type="text" name="companyaddress"
            value={data.companyaddress} onChange={handleChange} placeholder="City, Country" />
        </div>

        <div className="field-group">
          <label className="field-label">Description</label>
          <textarea className="field-textarea" name="description"
            value={data.description} onChange={handleChange}
            placeholder="Describe your responsibilities and achievements…" />
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

export default Experience
