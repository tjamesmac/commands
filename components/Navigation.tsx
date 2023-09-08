import { JSX } from "preact";

export function Navigation(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <nav class="px-4">
      <ul class="flex flex-row gap-2">
        <li class="text-xl font-bold">
          <a href="/">Photos</a>
        </li>
      </ul>
    </nav>
  );
}
