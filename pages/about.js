import Image from "next/image";
import supabase from "sdk/utility/supabase";

export default function About(props) {
  const { name, avatar, bodyTitle, figureOne } = props;
  return (
    <div className="relative z-10 min-h-screen p-2 my-6 lg:p-0">
      <section className="overflow-hidden rounded-lg">
        <article className="relative flex flex-wrap-reverse lg:justify-between even:flex-row-reverse">
          <div className="flex items-center w-full py-12 lg:w-1/2 sm:py-24 lg:py-48 lg:items-center">
            <div className="max-w-lg mx-auto text-center lg:text-left">
              <h2 className="text-2xl font-medium sm:text-3xl text-base-content">Hi, I&apos;m</h2>
              <h2 className="text-2xl font-medium sm:text-3xl text-base-content">{name}.</h2>

              <p className="inline-block mt-4 text-base-content ">
                I am an accomplished Full-Stack Web Developer and Software Engineer with a rich
                background in both front-end and back-end development. Currently, I serve as the
                Front-End Lead Instructor at Beach Coders, where I teach JavaScript and mentor
                aspiring developers. My passion lies in contributing my skills to a company that
                values making a meaningful difference over profits, and I&apos;m particularly drawn
                to organizations that push the envelope with innovative approaches. Beyond coding,
                my interests extend to electronics, robotics, and computer games – if it involves
                programming, it&apos;s my jam. I thrive on the challenges presented by computer
                programming and robotics, making me a versatile and passionate contributor to any
                team.
              </p>
            </div>
          </div>
          <div className="relative self-center w-full h-96 lg:w-1/3">
            <Image
              src={avatar}
              className="bg-neutral mask mask-circle"
              alt="Illustration of Cameron J. Leverett"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </article>

        <article className="relative flex flex-wrap-reverse even:flex-row-reverse">
          <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-24 lg:py-48 lg:items-center">
            <div className="max-w-lg mx-auto text-center lg:text-left">
              <h2 className="text-2xl font-medium sm:text-3xl">{bodyTitle}</h2>
            </div>
          </div>

          <div className="relative self-center w-full h-96 lg:w-1/2">
            <Image
              src={figureOne}
              alt="Computer programming and robotics"
              className="absolute inset-0 object-cover w-full h-full"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </article>
        <article>
          <ul className="space-y-2">
            <li>
              👨‍💻 <strong>Experienced Software Engineer:</strong> I&apos;m a contract Software
              Engineer with a strong background in software development. My passion for coding and
              problem-solving drives me to excel in various programming languages and technologies.
            </li>
            <li>
              🎓 <strong>Educational Foundation:</strong> I completed a year-long program at
              Flatiron Bootcamp, where I honed my skills in Object-Oriented Programming (OOP), SQL,
              React, and JavaScript. Currently, I&apos;m pursuing a B.S. in Computer Science,
              expanding my knowledge in MySQL, JAVA, Python, and C++.
            </li>
            <li>
              🚀 <strong>Diverse Skillset:</strong> My expertise spans a wide range of technologies,
              allowing me to adapt and contribute effectively to diverse projects. Whether it&apos;s
              front-end development, back-end programming, or database management, I have the skills
              to get the job done.
            </li>
            <li>
              💡 <strong>Passion for Learning:</strong> I&apos;m a lifelong learner who stays
              updated with the latest industry trends and technologies. This drive for continuous
              improvement helps me bring innovative solutions to the table.
            </li>
            <li>
              📊 <strong>Problem Solver:</strong> I thrive on tackling complex challenges and
              turning them into opportunities for growth. My analytical mindset and coding
              proficiency enable me to devise efficient and elegant solutions.
            </li>
            <li>
              💼 <strong>Client-Focused:</strong> As a contract Software Engineer, I understand the
              importance of delivering results that align with clients&apos; needs and expectations.
              I prioritize clear communication and collaboration to ensure project success.
            </li>
            <li>
              🌟 <strong>Team Player:</strong> I excel in both independent and collaborative work
              environments. My ability to work effectively within cross-functional teams enhances
              project outcomes.
            </li>
            <li>
              🌉 <strong>California-Based:</strong> I am based out of California, providing the
              flexibility to work with clients in various time zones and industries.
            </li>
            <li>
              📈 <strong>Adaptable and Driven:</strong> I&apos;m committed to delivering
              high-quality work, meeting deadlines, and exceeding goals. My adaptability and
              determination make me a valuable asset to any project.
            </li>
            <li>
              🌐 <strong>Open to New Opportunities:</strong> I&apos;m always eager to explore new
              opportunities and contribute my skills to innovative projects. If you&apos;re looking
              for a dedicated and versatile Software Engineer, I&apos;d love to connect.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await supabase.from("about").select().limit(1).single();

  return {
    props: data,
  };
}
