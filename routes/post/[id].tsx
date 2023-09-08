import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div class="px-4 pt-2 pb-2 mx-auto bg-[#86efac]">
      <h1 class="text-4xl font-bold">{props.params.id}</h1>
    </div>
  );
}
