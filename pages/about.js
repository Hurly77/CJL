import Image from "next/image";
import supabase from "sdk/utility/supabase";

export default function About(props) {
  const { name, avatar, description, bodyTitle, bodyText, figureOne } = props;
  return (
    <div className="relative z-10 min-h-screen p-2 my-6 lg:p-0">
      <section className="overflow-hidden rounded-lg">
        <article className="relative flex flex-wrap-reverse lg:justify-between even:flex-row-reverse">
          <div className="flex items-center w-full py-12 lg:w-1/2 sm:py-24 lg:py-48 lg:items-center">
            <div className="max-w-lg mx-auto text-center lg:text-left">
              <h2 className="text-2xl font-medium sm:text-3xl text-base-content">Hi, I&apos;m</h2>
              <h2 className="text-2xl font-medium sm:text-3xl text-base-content">{name}.</h2>

              <p className="inline-block mt-4 text-base-content ">{description}</p>
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

              <p className="mt-4 text-base-content">{bodyText}</p>
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
