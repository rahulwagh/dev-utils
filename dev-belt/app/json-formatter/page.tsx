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

const JsonViewer = dynamic(() => import('react-json-view'), {
  ssr: false,
});

type ParsedJson = object | any[];

export default function JsonMagicPage() {
  const [inputJson, setInputJson] = useState('');
  const [parsedJson, setParsedJson] = useState<ParsedJson | null>(null);
  const [error, setError] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  // States for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<(string | number)[][]>([]);
  const [activeTab, setActiveTab] = useState('analysis');
  const [selectedPath, setSelectedPath] = useState<(string | number)[] | null>(null);


  const handleProcessJson = () => {
    // Reset everything on new input
    setError('');
    setParsedJson(null);
    setAnalysisResult(null);
    setSearchResults([]);
    setSearchQuery('');
    setSelectedPath(null);

    if (!inputJson.trim()) {
      setError('Input cannot be empty.');
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      setParsedJson(parsed);
      const result = analyzeJson(parsed);
      setAnalysisResult(result);
      setActiveTab(result ? 'analysis' : 'formatted');
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

  const handleResultClick = (path: (string | number)[]) => {
    setSelectedPath(path);
    setActiveTab('tree'); // Switch to the tree view tab
  };

  const shouldCollapseNode = (field: any) => {
    if (!selectedPath) {
      return field.namespace.length > 2; // Collapse nodes deeper than level 2 by default
    }
    // Check if the current node's path is a parent of the selected path
    return !selectedPath.join('.').startsWith(field.namespace.join('.'));
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

          {parsedJson && !error && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="formatted">Raw</TabsTrigger>
                <TabsTrigger value="tree">Tree View</TabsTrigger>
              </TabsList>

              <TabsContent value="analysis">
                 <div className="p-4 rounded-md bg-secondary h-96 overflow-y-auto space-y-4">
                  {analysisResult?.statements ? (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{analysisResult.title}</h3>
                      {analysisResult.statements.map((stmt, index) => (
                        <div key={index} className="mb-4 p-3 border rounded-md bg-background">
                          <h4 className={`font-bold text-lg ${ stmt.effect === 'Allow' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400' }`}>
                            Statement #{index + 1}: {stmt.verb}
                          </h4>
                          <div className="mt-2"><p className="font-semibold">Actions:</p><ul className="list-disc pl-5 text-sm">{stmt.actions.map((action, i) => <li key={i}><code>{action}</code></li>)}</ul></div>
                          <div className="mt-2"><p className="font-semibold">Resources:</p><ul className="list-disc pl-5 text-sm">{stmt.resources.map((res, i) => <li key={i}><code>{res}</code></li>)}</ul></div>
                        </div>
                      ))}
                    </div>
                  ) : ( <p className="text-muted-foreground">No specific context identified.</p> )}
                </div>
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
                    {searchResults.length > 0 && (
                      <ul className="space-y-2">
                        <li className="text-sm text-muted-foreground">Found {searchResults.length} match(es):</li>
                        {searchResults.map((path, index) => (
                          <li key={index} className="p-2 border rounded-md bg-background hover:bg-accent cursor-pointer" onClick={() => handleResultClick(path)}>
                            <code className="text-sm">root.{path.join('.')}</code>
                          </li>
                        ))}
                      </ul>
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
                      src={parsedJson} name={false} theme="ocean"
                      iconStyle="triangle" displayObjectSize={true}
                      displayDataTypes={true} enableClipboard={true}
                      shouldCollapse={shouldCollapseNode}
                      style={{ background: 'transparent' }}
                   />
                </div>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
}