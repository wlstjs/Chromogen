/* eslint-disable */
import type { Ledger } from '../hook-types.ts';
import {
  ledgerCurrState,
  ledgerSetStateCallback,
  ledgerInitialState,
  ledgerPrevState,
  importHooksInitialState,
  importHooksCallback,
  testHooksSetState,
} from './hooks-output-utils';

/* eslint-enable */

/* ----- HELPERS ----- */

/* ----- MAIN ----- */

//writeableHook = cb of useState
//readableHook = state of useState

export const output = ({
  initialState,
  prevState,
  currState,
  setStateCallback,
  count,
}: Ledger<string, any, SerializableParam>): string =>
  `import { renderHook } from '@testing-library/react-hooks'
// import React, { useState } from 'react';
// import { ${importHooksInitialState}}

describe('Initial Render', () => {});

describe('USESTATE', () => {});

describe('USESTATE CALLBACKS', () => {});`;
