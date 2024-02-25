import { useState } from "react";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedEmail(email);

    console.log(submittedEmail);
    setEmail("");
  };

  return (
    <div className="formSubscription">
      {!submittedEmail ? (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <div>
          <h2>Thanks for submitting</h2>
          <p>Your Email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
}
