import { useForm, ValidationError } from '@formspree/react';
import "../styles/contactform.scss"

function ContactForm() {
    const [state, handleSubmit] = useForm("xeqyyojq");
    if (state.succeeded) {
        return <p className='succeed-msg-form'>Merci pour votre message. Je vous réponds au plus vite ! 😄​</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="form-input"
            placeholder="Exemple@domaine.com"
            autoComplete="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="form-error"
          />
  
          <label htmlFor="subject" className="form-label">Objet :</label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="form-input"
            placeholder="Sujet de votre message"
          />
  
          <label htmlFor="message" className="form-label">Message :</label>
          <textarea
            id="message"
            name="message"
            required
            className="form-textarea"
            placeholder="Écrivez votre message ici..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="form-error"
          />
  
          <button type="submit" disabled={state.submitting} className="form-button">
            Envoyer
          </button>
        </form>
    );
  }
  
  export default ContactForm;