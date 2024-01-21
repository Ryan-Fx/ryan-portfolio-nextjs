import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1 className="text-3xl font-bold capitalize text-pink-500">
      Hi {firstName}!
    </h1>
    <p className="text-lg text-fuchsia-500">
      Thank You for contacting me. I will get back to you as soon as I can.
    </p>
  </div>
);

export default EmailTemplate;
