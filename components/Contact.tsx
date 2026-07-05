"use client";

import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "8acb3f04-6138-409a-8ae3-911c81b15660");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! We'll be in touch soon." : "Error submitting the form.");
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box" style={{ textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            
            {/* Left Column */}
            <div>
              <div
                className="section-eyebrow"
                style={{ justifyContent: "flex-start", display: "flex" }}
              >
                Get in touch
              </div>
              <h2>Have an idea worth building?</h2>
              <p style={{ margin: '0 0 24px 0', maxWidth: '100%' }}>
                Tell us what you&apos;re trying to solve — we&apos;ll tell you honestly
                whether it&apos;s a weekend build or a real system.
              </p>
              
              <div style={{ padding: '20px', background: 'var(--panel-2)', border: '1px solid var(--line)', borderRadius: '6px', marginBottom: '32px' }}>
                <p style={{ color: 'var(--text)', margin: '0', fontSize: '15px', fontStyle: 'italic' }}>
                  "Great products are built by teams who care. Let's collaborate and turn your vision into a reality that makes an impact."
                </p>
              </div>
              
              <div className="contact-links" style={{ justifyContent: 'flex-start' }}>
                <a
                  className="btn-secondary"
                  href="mailto:hello.projectwis@gmail.com"
                >
                  hello.projectwis@gmail.com
                </a>
                <a
                  className="btn-secondary"
                  href="https://github.com/project-wis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div>
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(14, 22, 38, 0.5)', padding: '32px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                  <input type="text" name="name" id="name" required style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'var(--panel-2)', color: 'var(--text)', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                  <input type="email" name="email" id="email" required style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'var(--panel-2)', color: 'var(--text)', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                  <textarea name="message" id="message" required rows={4} style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'var(--panel-2)', color: 'var(--text)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', cursor: 'pointer', marginTop: '8px' }}>
                  Submit
                </button>
                {result && <p style={{ textAlign: 'center', marginTop: '12px', marginBottom: '0', fontSize: '14px', color: result.includes('Success') ? 'var(--cyan)' : 'var(--amber)' }}>{result}</p>}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
