import * as React from 'react';
import { connect } from 'react-redux';

const brace = require('brace');
const AceEditor = require('react-ace').default;

require('brace/mode/javascript');
require('brace/theme/monokai');

interface CodeEditorProps {
  height: number;
  width: number;
  pluginNumber: number;
  pluginState: any;
  slideNumber: number;
  updateCurrentSlide: Function;
}

const CodeEditor = ({ height, width, pluginNumber, pluginState, slideNumber, updateCurrentSlide }: CodeEditorProps) => (
  <AceEditor 
    mode='javascript'
    theme='monokai'
    tabSize={2}
    height={`${height}px`}
    width={`${width}px`}
    onChange={ (snippet: string) => updateCurrentSlide(pluginNumber, slideNumber, { snippet }) }
    value={ pluginState.snippet }
  />
);

export default CodeEditor;