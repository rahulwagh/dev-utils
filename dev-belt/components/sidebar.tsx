// components/sidebar.tsx
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Tools</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/json-formatter" className="hover:text-blue-500">
              JSON Formatter
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/base64" className="hover:text-blue-500">
              Base64 Encoder/Decoder
            </Link>
          </li>
          <li>
            <Link href="/url-encoder" className="hover:text-blue-500">
              URL Encoder/Decoder
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}