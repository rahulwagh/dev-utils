// lib/json-analyzer.ts

interface JsonObject {
[key: string]: any;
}

export interface AnalyzedStatement {
effect: 'Allow' | 'Deny' | 'Unknown';
verb: 'Grants' | 'Denies' | 'Has an unknown effect for';
actions: string[];
resources: string[];
}

export interface AnalysisResult {
title: string;
statements: AnalyzedStatement[];
}

interface JsonRecognizer {
name: string;
check: (json: JsonObject) => boolean;
  analyze: (json: JsonObject) => AnalysisResult;
}

// ---------------- Detailed Analysis Functions ----------------

const analyzeAwsIamPolicy = (json: JsonObject): AnalysisResult => {
  const analyzedStatements: AnalyzedStatement[] = [];
  const statements = Array.isArray(json.Statement) ? json.Statement : [json.Statement];

  for (const stmt of statements) {
    const effect = stmt.Effect === 'Allow' || stmt.Effect === 'Deny' ? stmt.Effect : 'Unknown';

    let verb: AnalyzedStatement['verb'];
    if (effect === 'Allow') verb = 'Grants';
    else if (effect === 'Deny') verb = 'Denies';
    else verb = 'Has an unknown effect for';

    analyzedStatements.push({
      effect,
      verb,
      actions: [].concat(stmt.Action || 'Not specified'),
      resources: [].concat(stmt.Resource || 'Not specified'),
    });
  }

  return {
    title: 'AWS IAM Policy Analysis',
    statements: analyzedStatements,
  };
};

// ---------------- Recognizer Check Functions ----------------

const isAwsIamPolicy = (json: JsonObject): boolean =>
  typeof json.Version === 'string' && !!json.Statement;

// ---------------- The Registry of Recognizers ----------------
const recognizers: JsonRecognizer[] = [
  { name: 'AWS IAM Policy', check: isAwsIamPolicy, analyze: analyzeAwsIamPolicy },
];

// ---------------- The Main Analysis Function ----------------
export function analyzeJson(json: JsonObject): AnalysisResult | null {
  const matchedRecognizer = recognizers.find(r => r.check(json));

  if (matchedRecognizer) {
    return matchedRecognizer.analyze(json);
  }

  return null;
}