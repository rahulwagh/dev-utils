// app/base64/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Base64Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    setError('');
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (e) {
      setError('Could not encode the input.');
    }
  };

  const handleDecode = () => {
    setError('');
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
    } catch (e) {
      setError('Invalid Base64 string.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Base64 Encoder/Decoder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="input-text" className="font-semibold">Input / Output</label>
            <Textarea
              id="input-text"
              placeholder="Enter text to encode or Base64 to decode..."
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
            <Button onClick={handleEncode}>Encode to Base64</Button>
            <Button onClick={handleDecode} variant="secondary">Decode from Base64</Button>
            <Button onClick={handleCopy} variant="outline" disabled={!output}>Copy Result</Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}