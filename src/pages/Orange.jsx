import Hero from "../sections/Hero";
export default function Orange() {
  return (
    <>
      <Hero />
      <section className="flex h-screen flex-col justify-end gap-20 px-8 py-16 text-center">
        <div className="p-10">
          <h1 className="mb-6 text-4xl font-bold">Orange Space</h1>
          <p>A full branding and web redesign for a coworking space...</p>
          {/* Add animations, images, custom layout */}
        </div>
      </section>
    </>
  );
}
