import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  text,
}) => (
  <div>
    <h1 className="text-3xl font-bold capitalize text-pink-500">
      From {firstName}
    </h1>
    <p className="text-lg text-fuchsia-500">{text}</p>
  </div>
);

export default EmailTemplate;
