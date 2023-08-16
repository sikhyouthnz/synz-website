declare module '*.md' {
    import React from 'react';
    const react: React.VFC;
    const attributes: Record<string, unknown>;
    export { react, attributes };
}
