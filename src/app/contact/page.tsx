import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact me',
  description: 'Reese에게 메일보내기',
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <p>info@gmail.com</p>
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <h2 className="text-3xl font-bold my-8">Send me an email</h2>
      <ContactForm />
    </section>
  );
}
