import { useForm, ValidationError } from '@formspree/react';
import { Mag } from './ui';

export default function Contact() {
  const [state, handleSubmit] = useForm('xqpajgbw');

  if (state.succeeded) {
    return (
      <p
        className="rv in m"
        style={{
          color: 'var(--mut)',
          textAlign: 'center',
        }}
      >
        Thanks for reaching out! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form className="rv in" onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        required
      />

      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        required
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Message"
        aria-label="Message"
        required
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <Mag
        as="button"
        type="submit"
        className="p"
        style={{ justifyContent: 'center' }}
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Start a Conversation →'}
      </Mag>

      {state.errors && (
        <p
          className="m"
          style={{
            color: 'var(--mut)',
            textAlign: 'center',
          }}
          aria-live="polite"
        >
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}