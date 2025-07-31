// components/logo.tsx
import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group mb-6">
      <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
        <Code2 className="h-6 w-6" />
      </div>
      <span className="text-xl font-bold tracking-tighter">
        Dev-Belt
      </span>
    </Link>
  );
}