import { useEffect, useState } from 'react';

/**
 * Hook to load scripts sequentially
 * @param {string[]} scripts - Array of script URLs to load
 * @returns {boolean} - Whether all scripts are loaded
 */
export function useScriptLoader(scripts) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!scripts || scripts.length === 0) {
      setLoaded(true);
      return;
    }

    let isMounted = true;

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (existingScript) {
          if (existingScript.dataset.loaded === 'true') {
            resolve();
            return;
          }
          // Wait for existing script to load
          existingScript.addEventListener('load', resolve);
          existingScript.addEventListener('error', reject);
          return;
        }

        const script = document.createElement('script');
        script.src = url;
        script.async = false;
        script.defer = false;

        script.onload = () => {
          script.dataset.loaded = 'true';
          resolve();
        };

        script.onerror = () => {
          reject(new Error(`Failed to load script: ${url}`));
        };

        document.head.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        for (const scriptUrl of scripts) {
          await loadScript(scriptUrl);
        }
        if (isMounted) {
          setLoaded(true);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoaded(false);
        }
      }
    };

    loadAllScripts();

    return () => {
      isMounted = false;
    };
  }, [scripts]);

  return { loaded, error };
}
