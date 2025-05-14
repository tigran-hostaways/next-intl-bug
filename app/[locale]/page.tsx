import { Link } from "@/i18n/navigation";

export default function Home() {
  return (
    <div>
      <p>
        1. French is the default language (middleware.ts)
        <br /> 2. The locale prefix is ​​set "as-needed" (middleware.ts)
        <br /> 3. I expect <Link href="/page2">this url</Link> should not
        contain a language prefix
      </p>
    </div>
  );
}
