"use client";

import Widget from '@/components/Widget/Widget';

export default function WidgetClient() {
  return <Widget initialIsOpen={true} initialPosition={{ x: 20, y: 20 }} />;
} 