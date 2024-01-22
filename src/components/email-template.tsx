import {
  Html,
  Body,
  Heading,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
}) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100">
        <Container>
          <Section className="my-6 py-4 px-10 rounded-md bg-white">
            <Heading className="leading-tight text-sky-500 text-2xl">
              You received the following message from the contact form
            </Heading>
            <Text className="text-lg">{message}</Text>
            <Hr />
            <Text className="font-semibold">Sender : {email}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
