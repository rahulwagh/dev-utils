// app/json-formatter/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import dynamic from 'next/dynamic';
import { analyzeJson, AnalysisResult } from '@/lib/json-analyzer';
import { findPaths } from '@/lib/json-search';
import ClientOnly from '@/components/client-only'; // 1. Import ClientOnly

const JsonViewer = dynamic(() =>
  import('@textea/json-viewer').then((mod) => mod.JsonViewer), {
  ssr: false,
});

type ParsedJson = object | any[];

export default function JsonMagicPage() {
  const [inputJson, setInputJson] = useState('');
  const [parsedJson, setParsedJson] = useState<ParsedJson | null>(null);
  const [error, setError] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<(string | number)[][]>([]);

  const handleProcessJson = () => {
    setError('');
    setParsedJson(null);
    setAnalysisResult(null);
    setSearchResults([]);
    setSearchQuery('');
    if (!inputJson.trim()) {
      setError('Input cannot be empty.');
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      setParsedJson(parsed);
      const result = analyzeJson(parsed);
      setAnalysisResult(result);
    } catch (e: any) {
      setError(`Invalid JSON: ${e.message}`);
    }
  };

  const handleSearch = () => {
    if (!searchQuery || !parsedJson) {
      setSearchResults([]);
      return;
    }
    const paths = findPaths(parsedJson, searchQuery);
    setSearchResults(paths);
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>JSON Magic Tool</CardTitle>
          <p className="text-sm text-muted-foreground pt-1">
            Format, validate, analyze, and search any JSON structure.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="input-json" className="font-semibold">Input JSON</label>
            <Textarea
              id="input-json"
              placeholder="Paste your JSON here..."
              className="h-60 font-mono text-sm"
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={handleProcessJson}>Process JSON</Button>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          </div>

          {/* 2. Wrap the entire conditional Tabs block in ClientOnly */}
          <ClientOnly>
            {parsedJson && !error && (
              <Tabs defaultValue="analysis" className="w-full">
                <TabsList>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  <TabsTrigger value="search">Search</TabsTrigger>
                  <TabsTrigger value="formatted">Raw</TabsTrigger>
                  <TabsTrigger value="tree">Tree View</TabsTrigger>
                </TabsList>

                <TabsContent value="analysis">
                  {/* Analysis content... */}
                </TabsContent>

                <TabsContent value="search">
                  <div className="p-4 rounded-md bg-secondary h-96 overflow-y-auto space-y-4">
                    <div className="flex w-full items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="Search for a key or value..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      />
                      <Button onClick={handleSearch}>Search</Button>
                    </div>
                    <div className="mt-4">
                      {searchResults.length > 0 ? (
                        <ul className="space-y-2">
                          <li className="text-sm text-muted-foreground">Found {searchResults.length} match(es):</li>
                          {searchResults.map((path, index) => (
                            <li key={index} className="p-2 border rounded-md bg-background">
                              <code className="text-sm">root.{path.join('.')}</code>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Enter a query to search.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="formatted">
                  <Textarea
                    className="h-96 font-mono text-sm bg-secondary"
                    value={JSON.stringify(parsedJson, null, 2)}
                    readOnly
                  />
                </TabsContent>

                <TabsContent value="tree">
                  <div className="p-4 rounded-md bg-secondary h-96 overflow-y-auto">
                      <JsonViewer
                        value={parsedJson}
                        theme="dark"
                        displayDataTypes={false}
                        rootName={false}
                      />
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </ClientOnly>

        </CardContent>
      </Card>
    </div>
  );
}