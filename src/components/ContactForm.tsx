import React, { useState, useRef, useEffect } from 'react';
import '../styles/ContactForm.scss'

const ContactForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => {
    setVisible(prev => !prev);
  };

  // Fokussiere das Formular, wenn es sichtbar wird
  useEffect(() => {
    if (visible && formRef.current) {
      formRef.current.focus();
    }
  }, [visible]);

  return (
    <section className="contactform">
      <button
        className="contactform__toggle"
        onClick={toggleForm}
        aria-expanded={visible}
        aria-controls="kontaktbereich"
      >
        {visible ? 'Kontaktformular schließen' : 'Kontaktformular öffnen'}
      </button>

      {visible && (
        <div
          id="kontaktbereich"
          className="contactform__panel"
          role="region"
          aria-labelledby="kontaktform"
          tabIndex={-1}
          ref={formRef}
        >
          <h2 id="kontaktform">Kontaktformular</h2>
          <form>
            <div className="contactform__group">
              <label htmlFor="name">Ihr Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="contactform__group">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="contactform__group">
              <label htmlFor="nachricht">Nachricht</label>
              <textarea id="nachricht" name="nachricht" rows={4}></textarea>
            </div>

            <button type="submit" className="contactform__submit">
              Nachricht senden
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
