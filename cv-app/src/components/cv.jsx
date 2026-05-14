import React from "react";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function Cv({ data }) {
  const hasPersonal = data.name || data.email || data.phone || data.address;
  const hasEducation = data.schoolname || data.degree;
  const hasExperience = data.companyname || data.position;

  return (
    <div className="cv-document">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="cv-header">
        <h1 className="cv-name">{data.name || "Your Name"}</h1>
        <div className="cv-contact-row">
          {data.email && (
            <span className="cv-contact-item">
              <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {data.email}
            </span>
          )}
          {data.phone && (
            <span className="cv-contact-item">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.58 4.4 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
              {data.phone}
            </span>
          )}
          {data.address && (
            <span className="cv-contact-item">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {data.address}
            </span>
          )}
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────── */}
      <div className="cv-body">

        {/* Summary */}
        {data.summary && (
          <div className="cv-section">
            <div className="cv-section-title">Profile</div>
            <p className="cv-summary">{data.summary}</p>
          </div>
        )}

        {/* Education */}
        {hasEducation && (
          <div className="cv-section">
            <div className="cv-section-title">Education</div>
            <div className="cv-entry">
              <div className="cv-entry-main">
                <div className="cv-entry-name">{data.schoolname}</div>
                <div className="cv-entry-sub">{data.degree}</div>
              </div>
              <div className="cv-entry-meta">
                {(data.schoolstartdate || data.schoolenddate) && (
                  <div className="cv-entry-date">
                    {data.schoolstartdate && formatDate(data.schoolstartdate)}
                    {data.schoolstartdate && data.schoolenddate && " — "}
                    {data.schoolenddate && formatDate(data.schoolenddate)}
                  </div>
                )}
                <div className="cv-entry-location">{data.schooladdress}</div>
              </div>
            </div>
          </div>
        )}

        {/* Experience */}
        {hasExperience && (
          <div className="cv-section">
            <div className="cv-section-title">Experience</div>
            <div className="cv-entry">
              <div className="cv-entry-main">
                <div className="cv-entry-name">{data.companyname}</div>
                <div className="cv-entry-sub">{data.position}</div>
                {data.description && (
                  <div className="cv-entry-desc">{data.description}</div>
                )}
              </div>
              <div className="cv-entry-meta">
                {(data.companystartdate || data.companyenddate) && (
                  <div className="cv-entry-date">
                    {data.companystartdate && formatDate(data.companystartdate)}
                    {data.companystartdate && data.companyenddate && " — "}
                    {data.companyenddate && formatDate(data.companyenddate)}
                  </div>
                )}
                <div className="cv-entry-location">{data.companyaddress}</div>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!hasPersonal && !hasEducation && !hasExperience && (
          <div className="cv-placeholder">
            <div className="cv-placeholder-line" style={{width:'60%'}}/>
            <div className="cv-placeholder-line" style={{width:'40%'}}/>
            <div className="cv-placeholder-line" style={{width:'80%', marginTop: 16}}/>
            <div className="cv-placeholder-line" style={{width:'50%'}}/>
            <div className="cv-placeholder-line" style={{width:'70%', marginTop: 16}}/>
            <div className="cv-placeholder-line" style={{width:'45%'}}/>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cv
