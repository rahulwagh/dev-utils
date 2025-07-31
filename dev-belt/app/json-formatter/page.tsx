// app/url-encoder/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UrlEncoderPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  // New state for the copy button text
  const [copyText, setCopyText] = useState('Copy Result');

  const handleEncode = () => {
    setError('');
    setCopyText('Copy Result'); // Reset copy button text
    try {
      setOutput(encodeURIComponent(input));
    } catch (_e) {
      setError('Could not encode the input.');
    }
  };

  const handleDecode = () => {
    setError('');
    setCopyText('Copy Result'); // Reset copy button text
    try {
      setOutput(decodeURIComponent(input));
    } catch (_e) {
      setError('Could not decode the input. It may not be a valid URL component.');
    }
  };

  // Updated copy function with user feedback
  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy Result'), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>URL Encoder/Decoder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="input-text" className="font-semibold">Input / Output</label>
            <Textarea
              id="input-text"
              placeholder="Enter a string to encode or a URL component to decode..."
              className="h-60 font-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Textarea
              id="output-text"
              placeholder="Result will appear here..."
              className="h-60 font-mono"
              value={output}
              readOnly
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={handleEncode}>Encode</Button>
            <Button onClick={handleDecode} variant="secondary">Decode</Button>
            {/* UPDATE THIS BUTTON */}
            <Button
              onClick={handleCopy}
              variant="outline"
              disabled={!output}
              className="transition-transform active:scale-95 active:translate-y-px"
            >
              {copyText}
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}