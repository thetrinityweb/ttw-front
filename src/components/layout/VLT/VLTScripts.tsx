'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function VLTScripts() {
  const [loadingStage, setLoadingStage] = useState(0);

  return (
    <>
      <Script 
        id="jquery"
        src="/assets/vendors/jquery-3.5.1.min.js" 
        strategy="afterInteractive"
        onLoad={() => setLoadingStage(1)}
      />
      
      {loadingStage >= 1 && (
        <Script 
          src="/assets/vendors/slick.min.js" 
          strategy="afterInteractive"
          onLoad={() => setLoadingStage(2)}
        />
      )}

      {loadingStage >= 2 && (
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" 
          integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
          onLoad={() => setLoadingStage(3)}
        />
      )}
      
      {loadingStage >= 3 && (
        <Script 
          src="/assets/scripts/vlt-plugins.min.js" 
          strategy="afterInteractive"
          onLoad={() => setLoadingStage(4)}
        />
      )}

      {loadingStage >= 4 && (
        <Script 
          src="/assets/scripts/vlt-helpers.js" 
          strategy="afterInteractive"
          onLoad={() => setLoadingStage(5)}
        />
      )}

      {loadingStage >= 5 && (
        <Script 
          src="/assets/scripts/vlt-controllers.js" 
          strategy="afterInteractive"
        />
      )}
    </>
  );
} 
