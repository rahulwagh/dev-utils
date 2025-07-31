// app/page.tsx
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Binary, Link2 } from 'lucide-react';

const tools = [
  {
    href: "/json-formatter",
    title: "JSON Formatter",
    description: "Beautify, validate, and inspect your JSON data.",
    icon: <Code className="h-8 w-8 text-blue-500" />
  },
  {
    href: "/base64",
    title: "Base64 Encoder/Decoder",
    description: "Quickly encode and decode Base64 strings.",
    icon: <Binary className="h-8 w-8 text-green-500" />
  },
  {
    href: "/url-encoder",
    title: "URL Encoder/Decoder",
    description: "Encode and decode special characters in URLs.",
    icon: <Link2 className="h-8 w-8 text-purple-500" />
  }
];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Developer&apos;s Utility Toolbox
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of simple, fast, and free online tools to make your development workflow easier.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.title} passHref>
            <Card className="h-full hover:border-primary transition-colors duration-200 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                {tool.icon}
                <div>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription className="mt-1">{tool.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}