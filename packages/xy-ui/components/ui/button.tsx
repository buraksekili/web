import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background shadow-md font-bold',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-gray-50 border border-solid border-gray-100',
        ghost: 'hover:bg-accent hover:text-accent-foreground shadow-none',
        link: 'underline-offset-4 hover:underline text-primary',
        react: 'bg-react text-react-foreground hover:bg-react/90',
        svelte: 'bg-svelte text-svelte-foreground hover:bg-svelte/90',
        xyflow: 'bg-xyflow text-xyflow-foreground hover:bg-xyflow/90',
        'svelte-pro':
          'bg-secondary text-svelte hover:bg-gray-50 border border-solid border-svelte',
        'react-pro':
          'bg-secondary text-react hover:bg-gray-50 border border-solid border-react',
        'xyflow-pro':
          'bg-secondary text-xyflow hover:bg-gray-50 border border-solid border-react',
      },
      size: {
        default: 'py-2 h-9 px-6',
        sm: 'px-4 h-8 rounded-full',
        lg: 'px-10 h-10 text-md rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };