// app/json-formatter/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function JsonFormatterPage() {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    setOutputJson('');
    setError('');

    if (!inputJson.trim()) {
      setError('Input cannot be empty.');
      return;
    }

    try {
      const parsedJson = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setOutputJson(formatted);
    } catch (e: any) {
      setError('Invalid JSON: ' + e.message);
    }
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>JSON Formatter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="input-json" className="font-semibold">Input</label>
              <Textarea
                id="input-json"
                placeholder="Paste your JSON here..."
                className="h-80 font-mono"
                value={inputJson}
                onChange={(e) => setInputJson(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="output-json" className="font-semibold">Output</label>
              <Textarea
                id="output-json"
                placeholder="Formatted JSON will appear here..."
                className="h-80 font-mono"
                value={outputJson}
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={handleFormat}>Format JSON</Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}