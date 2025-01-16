import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min:h-svh overflow-hidden">
      {" "}
      <Header />
      <div className="flex flex-col border-opacity-50 mx-10 mt-5 mb-5">
        <div className="flex">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            About Our Team
          </div>
          <div className="divider divider-horizontal divider-info"> </div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            About Our Projekt
          </div>
        </div>
        <div className="divider divider-info"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="divider divider-info"></div>
        <div className="grid card bg-base-300 rounded-box place-items-center">
          <p className="mx-4 my-4 line-clamp-2 hover:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            incidunt commodi dignissimos quae possimus officiis, expedita
            quisquam ut quia animi temporibus itaque placeat voluptatibus fugit
            vero aut, eligendi saepe facilis adipisci molestiae inventore
            asperiores magni consequatur voluptates! Doloribus suscipit repellat
            reprehenderit eos? Nam maxime, minus voluptatibus expedita quos
            eveniet facere! Pariatur consectetur, illum aspernatur repellat quam
            consequuntur quisquam suscipit unde magnam reprehenderit voluptatem
            nemo distinctio nostrum voluptates, dolor, quasi optio laudantium
            nam quia dolores tempore error accusamus quo molestiae. Aut, enim,
            velit minus delectus esse iste, aliquam magnam in ipsam deleniti
            cumque corporis? Adipisci, ipsam rem? Incidunt voluptatibus eius
            cum.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
