import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen w-full p-24  bg-rose-50">
      <div className="col-span-2">
        <ProductSection/>
      </div>

      <div className="col-span-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo
        illum dolores aut, excepturi omnis vitae, eaque mollitia expedita quos
        sequi nisi. Officiis soluta, iure voluptates temporibus incidunt optio
        eligendi? Quasi, illo voluptatibus voluptates similique, nulla, magnam
        porro dolores voluptas vero odit odio libero. Commodi sit sequi saepe,
        repudiandae, quas eos itaque impedit nemo, accusantium eius
        necessitatibus dicta possimus velit? Nulla error reprehenderit
        voluptatum saepe consequuntur eius doloremque deleniti quae, distinctio
        nesciunt veniam consequatur impedit aut, similique explicabo maiores
        cum. Veritatis laboriosam sapiente iure tenetur eos possimus pariatur
        saepe ipsum. Porro ab accusamus, molestias facere saepe commodi ullam,
        assumenda animi quos, nemo cumque doloremque eligendi nulla nam non nisi
      </div>
    </div>
  );
}
