"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ScriptLoader() {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    jquery: false,
    jqueryMask: false,
    vltPlugins: false,
    vltHelpers: false,
    vltControllers: false,
    slick: false
  });

  useEffect(() => {
    // Function to initialize mask when everything is ready
    const initializeMask = () => {
      if (typeof window !== 'undefined' && (window as any).jQuery && (window as any).jQuery.fn.mask) {
        try {
          (window as any).jQuery(document).ready(function() {
            (window as any).jQuery('.phone_with_ddd').mask('(00) 00000-0000');
            console.log('Phone mask initialized successfully');
          });
        } catch (error) {
          console.error('Error initializing phone mask:', error);
        }
      }
    };

    // Check if jQuery and mask are already loaded
    if (scriptsLoaded.jquery && scriptsLoaded.jqueryMask) {
      initializeMask();
    }

    // Set up a listener for when scripts are loaded
    (window as any).initializeMask = initializeMask;
  }, [scriptsLoaded.jquery, scriptsLoaded.jqueryMask]);

  return (
    <>
      {/* jQuery - Load first */}
      <Script 
        src="/assets/vendors/jquery-3.5.1.min.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('jQuery loaded');
          // Make jQuery available globally
          if (typeof window !== 'undefined' && (window as any).jQuery) {
            (window as any).$ = (window as any).jQuery;
          }
          setScriptsLoaded(prev => ({ ...prev, jquery: true }));
        }}
      />
      
      {/* jQuery Mask - Load after jQuery */}
      {scriptsLoaded.jquery && (
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"
          integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('jQuery Mask loaded');
            setScriptsLoaded(prev => ({ ...prev, jqueryMask: true }));
            if ((window as any).initializeMask) {
              setTimeout(() => (window as any).initializeMask(), 100);
            }
          }}
        />
      )}
      
      {/* VLT Plugins - Load after jQuery */}
      {scriptsLoaded.jquery && (
        <Script 
          src="/assets/scripts/vlt-plugins.min.js" 
          strategy="afterInteractive"
          onLoad={() => {
            console.log('VLT Plugins loaded');
            setScriptsLoaded(prev => ({ ...prev, vltPlugins: true }));
          }}
        />
      )}
      
      {/* VLT Helpers - Load after VLT Plugins */}
      {scriptsLoaded.vltPlugins && (
        <Script 
          src="/assets/scripts/vlt-helpers.js" 
          strategy="afterInteractive"
          onLoad={() => {
            console.log('VLT Helpers loaded');
            setScriptsLoaded(prev => ({ ...prev, vltHelpers: true }));
          }}
        />
      )}
      
      {/* VLT Controllers - Load after VLT Helpers */}
      {scriptsLoaded.vltHelpers && (
        <Script 
          src="/assets/scripts/vlt-controllers.js" 
          strategy="afterInteractive"
          onLoad={() => {
            console.log('VLT Controllers loaded');
            setScriptsLoaded(prev => ({ ...prev, vltControllers: true }));
          }}
        />
      )}
      
      {/* Slick - Load after jQuery */}
      {scriptsLoaded.jquery && (
        <Script 
          src="/assets/vendors/slick.min.js" 
          strategy="afterInteractive"
          onLoad={() => {
            console.log('Slick loaded');
            setScriptsLoaded(prev => ({ ...prev, slick: true }));
          }}
        />
      )}
    </>
  );
} 