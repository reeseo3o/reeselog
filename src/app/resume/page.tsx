import Profile from '@/components/Profile';

export const metadata = {
  title: 'About me',
  description: 'reese 커리어 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function ResumePage() {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 shadow-sm p-8 m-8 text-center w-full">
        <h2 className={TITLE_CLASS}>About me</h2>
        <p>나는 ㅇㅇㅇ 입니다</p>
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
