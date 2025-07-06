interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  className = ''
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-md';
      case 'text':
      default:
        return 'rounded';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'circular':
        return { width: '40px', height: '40px' };
      case 'rectangular':
        return { width: '100%', height: '200px' };
      case 'text':
      default:
        return { width: '100%', height: '1em' };
    }
  };

  const defaultDims = getDefaultDimensions();
  const finalWidth = width || defaultDims.width;
  const finalHeight = height || defaultDims.height;

  return (
    <div
      className={`relative overflow-hidden bg-background-200 ${getVariantClasses()} ${className}`}
      style={{
        width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
        height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight
      }}
    >
      {/* Feixe de luz animado */}
      <span
        className="absolute inset-0 block w-full h-full"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              120deg,
              transparent 40%,
              rgba(255,255,255,0.05) 45%,
              rgba(255,255,255,0.15) 48%,
              rgba(255,255,255,0.3) 50%,
              rgba(255,255,255,0.15) 52%,
              rgba(255,255,255,0.05) 55%,
              transparent 60%
            )`,
          transform: 'translateX(-100%)',
          animation: 'skeleton-shimmer 2.2s cubic-bezier(0.4,0,0.2,1) infinite'
        }}
      />
      {/* Conteúdo do skeleton (vazio) */}
    </div>
  );
}

// Adicione a keyframe globalmente (em seu CSS global ou theme.css):
// @keyframes skeleton-shimmer {
//   100% { transform: translateX(100%); }
// }