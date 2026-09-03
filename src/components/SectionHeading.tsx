import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 transition-all duration-300`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 0 15px -3px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          {badge}
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base sm:text-lg leading-relaxed font-normal"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
