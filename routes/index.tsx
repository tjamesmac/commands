import { Handlers } from "$fresh/server.ts";
import { getList, setList } from "../store.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString();

    if (name) {
      console.log(name, "am i logging the name here?");
      setList(name);
    } else {
      // @todo - find out how to handle this error
    }

    const headers = new Headers();
    headers.set("location", `/post/${name}`);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default async function Home() {
  const list = await getList();

  return (
    <div>
      <div class="px-4 pt-2 pb-2 mx-auto bg-[#86efac]">
        <h1 class="text-4xl font-bold">Welcome to Photos</h1>
      </div>
      <ul class="px-4 mt-2">
        {list.map((item: string) => (
          <li class="my-2 font-bold border-2 border-black rounded bg-[#86efac]">
            <a class="p-4 h-full w-full block" href={`/post/${item}`}>
              <span>
                {item}
              </span>
              {" >"}
            </a>
          </li>
        ))}
      </ul>
      <div class="px-4">
        <form method="POST">
          <input
            class="px-4 w-full py-2 mx-auto border-2 border-black rounded focus:outline-none"
            type="text"
            name="name"
          />
          <br />
          <button
            class="mt-2 px-4 py-2 border-2 border-black rounded active:bg-[#86efac] focus:outline-none"
            type="submit"
          >
            Click here!
          </button>
        </form>
      </div>
    </div>
  );
}
