'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./TrackingMapClient'), { ssr: false });

export default function TrackingMap(props) {
  return <MapClient {...props} />;
}
