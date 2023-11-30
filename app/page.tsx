'use client'
import {useEffect} from 'react';
import {getFromEnvLocal, getFromEnvProductionLocal, getFromEnvProduction} from './actions';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  useEffect(() => {
    console.log('NEXT_PUBLIC_VAR', process.env.NEXT_PUBLIC_VAR);
    getFromEnvLocal().then(result => console.log('getFromEnvLocal:', result));
    getFromEnvProductionLocal().then(result => console.log('getFromEnvProductionLocal:', result));
    getFromEnvProduction().then(result => console.log('getFromEnvLocal:', result));
  }, []);

  return null;
}
