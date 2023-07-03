import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발 사랑해</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>구글러(-Now)</p>
        <p>구글러(-2019)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node
          <br />
          Git, Clean Code
          <br />
          VS Code, Mongo DB
        </p>
      </section>
    </>
  );
}
