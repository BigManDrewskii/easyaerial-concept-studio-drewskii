import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Button Design System
 * 
 * Variants:
 * - primary: Yellow gradient background, black text (main CTA)
 * - secondary: Yellow outline, transparent background, yellow text
 * - tertiary: Gray background, warm-gray text
 * - ghost: Minimal styling, warm-gray text
 * 
 * Sizes:
 * - sm: Small button
 * - md: Medium button (default)
 * - lg: Large button
 */

const buttonVariants = {
  primary: cn(
    // Base styles - clean yellow fill with black text
    'relative overflow-hidden',
    'bg-bright-yellow',
    'text-black font-semibold tracking-wide',
    'border border-bright-yellow',
    // Hover state - slightly darker yellow
    'hover:bg-[#C9BC00]',
    'hover:border-[#C9BC00]',
    // Active state
    'active:bg-[#B3AA00]',
    // Transitions
    'transition-all duration-300 ease-out'
  ),
  
  secondary: cn(
    // Base styles
    'relative overflow-hidden',
    'bg-transparent',
    'text-bright-yellow font-medium',
    'border border-bright-yellow/20', // Toned down outline
    // Hover state - border becomes more evident
    'hover:border-bright-yellow/60',
    'hover:text-bright-yellow',
    // Active state
    'active:border-bright-yellow/80',
    'active:bg-bright-yellow/5',
    // Transitions
    'transition-all duration-200 ease-out'
  ),
  
  tertiary: cn(
    // Base styles
    'relative overflow-hidden',
    'bg-warm-gray/10',
    'text-warm-gray font-medium',
    'border border-warm-gray/20',
    // Hover state
    'hover:bg-warm-gray/20',
    'hover:text-bright-yellow',
    'hover:border-warm-gray/30',
    'hover:shadow-md',
    // Active state
    'active:bg-warm-gray/30',
    // Transitions
    'transition-all duration-300'
  ),
  
  ghost: cn(
    // Base styles
    'relative',
    'bg-transparent',
    'text-warm-gray font-medium',
    'border border-transparent',
    // Hover state
    'hover:text-bright-yellow',
    'hover:bg-warm-gray/5',
    // Active state
    'active:bg-warm-gray/10',
    // Transitions
    'transition-all duration-300'
  )
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-lg'
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        // Base button styles
        'inline-flex items-center justify-center',
        'font-medium',
        'focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:ring-offset-2 focus:ring-offset-black',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none',
        // Size
        buttonSizes[size],
        // Variant
        buttonVariants[variant],
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
