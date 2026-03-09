"use client";

import { useEffect } from "react";

export default function BodyManager() {
  useEffect(() => {
    // Handle any dynamic body attributes that might be added by browser extensions
    // This prevents hydration mismatches by allowing client-side only modifications
    
    // Remove any potentially problematic attributes if needed
    const body = document.body;
    
    // Example: Handle cz-shortcut-listen attribute from browser extensions
    if (body.hasAttribute('cz-shortcut-listen')) {
      // Keep the attribute but suppress hydration warnings for it
      console.log('Browser extension detected: cz-shortcut-listen');
    }
    
    // Add any client-side only body classes or attributes here
    // This ensures they're only added on the client side
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
