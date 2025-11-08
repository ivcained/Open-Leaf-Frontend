# Design System Analysis

## Colors

### Primary Colors
- **Primary**: `#6366F1` (Indigo-500) - Used for CTAs and interactive elements
- **Primary Alt**: `#4F46E5` (Indigo-600) - Used in admin pages

### Background Colors
- **Background Light**: `#F9FAFB` (Gray-50)
- **Background Dark**: `#111827` (Gray-900)

### Card/Surface Colors
- **Card Light**: `#FFFFFF` (White)
- **Card Dark**: `#1F2937` (Gray-800)

### Border Colors
- **Border Light**: `#E5E7EB` (Gray-200)
- **Border Dark**: `#374151` (Gray-700)

### Text Colors
- **Text Light Primary**: `#111827` (Gray-900)
- **Text Dark Primary**: `#F9FAFB` (Gray-50) / `#E5E7EB` (Gray-200)
- **Text Light Secondary**: `#6B7280` (Gray-500)
- **Text Dark Secondary**: `#9CA3AF` (Gray-400)

### Status Colors
- **Success Light**: `#10B981` (Emerald-500)
- **Success Dark**: `#34D399` (Emerald-400)
- **Status Approved**: `#10B981` (Green)
- **Status Rejected**: `#EF4444` (Red)
- **Status Open**: `#F59E0B` (Amber)

## Typography

### Font Family
- **Display Font**: `Inter`, sans-serif
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Heading Sizes
- **h1**: 2xl (24px) on mobile, 3xl (30px) on desktop - font-bold
- **h2**: lg (18px) - font-semibold
- **Body Text**: Base (16px) - font-medium or regular
- **Small Text**: sm (14px), xs (12px) - for secondary info

### Line Heights
- Standard line heights with good readability
- `leading-relaxed` used for longer text blocks

## Layout & Spacing

### Container
- **Max Width**: Container with `mx-auto` (centered)
- **Padding**: 
  - Mobile: `p-4` (1rem)
  - Desktop: `p-6` (1.5rem)

### Section Spacing
- **Section Padding**: `py-4` to `py-6`
- **Element Margins**: `mb-4`, `mb-6` between major sections
- **Component Gaps**: 
  - `space-y-3` to `space-y-6` for vertical stacking
  - `space-x-2` to `space-x-4` for horizontal elements
  - `gap-4` for grid layouts

### Border Radius
- **Default**: `0.75rem` (12px) - rounded-lg
- **Alternative**: `0.5rem` (8px) - rounded-md
- **Full**: `rounded-full` for circular elements
- **Button Radius**: `rounded-lg`

## Component Patterns

### Cards
- Background: `bg-card-dark`
- Border: `border border-border-dark`
- Padding: `p-4` to `p-6`
- Hover: `hover:shadow-md transition-shadow`
- Rounded corners: `rounded-lg`

### Buttons
- **Primary Button**:
  - Background: `bg-primary`
  - Text: `text-white`
  - Padding: `px-4 py-2` (small), `px-4 py-3` (large)
  - Rounded: `rounded-lg`
  - Hover: `hover:opacity-90 transition-opacity`
  - Font: `font-semibold`

- **Status Buttons**:
  - Approve: `bg-status-approved`
  - Reject: `bg-status-rejected`
  - Hover states with darker shades

### Header/Navigation
- **Position**: `sticky top-0 z-10`
- **Background**: `bg-background-dark/80 backdrop-blur-sm`
- **Border**: `border-b border-border-dark`
- **Layout**: Flexbox with space-between
- **Padding**: `px-4 py-4`

### Status Badges
- **Container**: `flex items-center space-x-1.5 px-2.5 py-1 rounded-full`
- **Background**: Color with `/10` opacity
- **Indicator**: `w-2 h-2 rounded-full` dot
- **Text**: `text-xs font-medium`

### Icons
- **Material Icons Outlined** or **Material Symbols Outlined**
- Standard sizes: 20px-28px
- Colors match text colors (primary, secondary, or status colors)

## Responsive Breakpoints
- **Mobile First**: Default styles
- **sm**: 640px+ (show/hide certain elements, adjust spacing)
- **Responsive Navigation**: Hide some items on mobile, show hamburger
- **Responsive Text**: Adjust text sizes (text-2xl sm:text-3xl)
- **Responsive Spacing**: Adjust padding (space-x-2 sm:space-x-4)

## Interactive States
- **Hover**: 
  - `hover:opacity-90` for buttons
  - `hover:text-text-dark-primary` for links
  - `hover:shadow-md` for cards
  - `hover:bg-gray-50 dark:hover:bg-gray-800` for clickable cards
- **Focus**: 
  - `focus:ring-primary focus:border-primary` for inputs
  - `focus:outline-none focus:ring-2` for buttons
- **Active/Selected**:
  - `border-2 border-primary` for selected radio options
  - Visual feedback with color changes

## Transitions
- **Duration**: Fast transitions for smooth UX
- **Properties**: 
  - `transition-colors` for color changes
  - `transition-shadow` for shadow changes
  - `transition-opacity` for opacity changes
  - `transition-colors duration-200` for smooth effects

## Dark Mode Implementation
- Uses Tailwind's `dark:` prefix for all dark mode styles
- HTML has `class="dark"` for dark mode
- Consistent color system with light/dark variants
