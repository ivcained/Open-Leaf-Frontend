# Implementation Blueprint

## Required Components

### Priority 1 - Core Components (Foundation)

#### Design System Setup
- [x] Create Tailwind config with custom colors
- [ ] Set up Inter font family
- [ ] Configure dark mode
- [ ] Add Material Icons package

#### Layout Components
- [ ] Header component (sticky navigation)
- [ ] Container wrapper
- [ ] Page wrapper (min-h-screen)

#### Navigation Components
- [ ] Logo component
- [ ] NavLink component (with active state)
- [ ] Back button component

#### Button Components
- [ ] Primary button (small & large variants)
- [ ] Floating Action Button (FAB)
- [ ] Icon button
- [ ] Status action buttons (Approve/Reject)

### Priority 2 - Page Components

#### Explore Projects Page
- [ ] ExploreProjects page component
- [ ] ProjectCard component
- [ ] StatItem component (for displaying stats)
- [ ] Project list with mock data

#### Add Project Page
- [ ] AddProject page component
- [ ] Form components:
  - [ ] TextInput component
  - [ ] Textarea component
  - [ ] RadioOptionCard component
  - [ ] RadioGroup component
- [ ] Form validation logic
- [ ] Form submission handler

#### Project Details Page
- [ ] ProjectDetails page component
- [ ] CircularProgress component
- [ ] TaskCard component
- [ ] TransactionCard component
- [ ] Transaction list with dividers

#### Admin Submissions Page
- [ ] AdminSubmissions page component
- [ ] AdminProtocolCard component
- [ ] SubmissionCard component
- [ ] StatusBadge component
- [ ] SubmissionReview component

### Priority 3 - Utility Components

#### UI Elements
- [ ] ExternalLink component
- [ ] MaterialIcon wrapper component

#### State Management
- [ ] React Router setup
- [ ] Navigation state
- [ ] Mock data stores

## Design System Setup

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        'background-light': '#F9FAFB',
        'background-dark': '#111827',
        'card-light': '#FFFFFF',
        'card-dark': '#1F2937',
        'border-light': '#E5E7EB',
        'border-dark': '#374151',
        'text-light-primary': '#111827',
        'text-dark-primary': '#F9FAFB',
        'text-light-secondary': '#6B7280',
        'text-dark-secondary': '#9CA3AF',
        'success-light': '#10B981',
        'success-dark': '#34D399',
        'status-approved': '#10B981',
        'status-rejected': '#EF4444',
        'status-open': '#F59E0B',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

### Google Fonts Setup
```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

### Base CSS
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-display bg-background-dark text-text-dark-primary;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

## Forbidden - DO NOT CREATE

❌ Light mode toggle (design uses dark mode only)
❌ Custom modal components (none in original design)
❌ Additional button styles beyond specified variants
❌ New color variations not in the design system
❌ Additional navigation menu items
❌ Sidebar navigation
❌ Alternative header layouts
❌ Custom scrollbars
❌ Animations beyond specified transitions
❌ Additional form field types not in design
❌ Toast notifications (not in original)
❌ Loading spinners (not in original)
❌ Pagination components (not needed for current scope)

## Build Sequence

### Phase 1: Project Setup (30 min)
1. Initialize Vite + React + TypeScript project
2. Install dependencies:
   - `react-router-dom`
   - `@tailwindcss/forms`
   - Tailwind CSS
3. Configure Tailwind with design system
4. Add Google Fonts to index.html
5. Set up base styles in index.css
6. Configure router structure

### Phase 2: Core Components (1-2 hours)
1. Create Header component
   - Logo
   - NavLinks
   - Connect button
2. Create Button components
   - PrimaryButton
   - IconButton
   - FAB
3. Create MaterialIcon wrapper component
4. Test header on empty page

### Phase 3: Explore Projects Page (1 hour)
1. Create ProjectCard component
2. Create StatItem component
3. Create ExploreProjects page
4. Add mock project data (3 projects from HTML)
5. Implement card click navigation
6. Add FAB for mobile
7. Test responsive design

### Phase 4: Add Project Page (1 hour)
1. Create form input components:
   - TextInput
   - Textarea
   - RadioOptionCard
2. Create AddProject page
3. Implement form state management
4. Add form validation
5. Implement submit handler (console.log for now)
6. Test form interactions

### Phase 5: Project Details Page (1-2 hours)
1. Create CircularProgress component
2. Create TaskCard component
3. Create TransactionCard component
4. Create ProjectDetails page
5. Add mock data for detailed view
6. Implement back navigation
7. Add external link icons
8. Test responsive layout

### Phase 6: Admin Pages (1-2 hours)
1. Create StatusBadge component
2. Create AdminProtocolCard component
3. Create SubmissionCard component
4. Create AdminSubmissions page
5. Create SubmissionReview component
6. Add mock submission data
7. Implement approve/reject handlers
8. Test admin workflow

### Phase 7: Polish & Testing (1 hour)
1. Verify all responsive breakpoints
2. Test all navigation flows
3. Verify dark mode consistency
4. Check hover states
5. Test form validation
6. Verify external link icons
7. Mobile testing (FAB, responsive nav)
8. Final design comparison

## Component Props Specifications

### Header
```typescript
interface HeaderProps {
  showBackButton?: boolean;
}
```

### ProjectCard
```typescript
interface ProjectCardProps {
  id: string;
  name: string;
  logo: string;
  currentFunds: string;
  yieldEarned: string;
  openTasks: number;
  onClick: () => void;
}
```

### TaskCard
```typescript
interface TaskCardProps {
  title: string;
  reward: string;
  onClick?: () => void;
}
```

### StatusBadge
```typescript
type Status = 'approved' | 'rejected' | 'open';

interface StatusBadgeProps {
  status: Status;
}
```

### CircularProgress
```typescript
interface CircularProgressProps {
  value: string;
  unit: string;
  percentage: number; // 0-100 for stroke-dasharray
}
```

### RadioOptionCard
```typescript
interface RadioOptionCardProps {
  name: string;
  value: string;
  title: string;
  description: string;
  icon: string;
  checked?: boolean;
  onChange: (value: string) => void;
}
```

## Routing Structure

```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExploreProjects />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/admin/submissions" element={<AdminSubmissions />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Mock Data Structure

### Projects
```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  logo: string;
  currentFunds: string;
  yieldEarned: string;
  openTasks: number;
  tasks: Task[];
  spendings: Spending[];
}

interface Task {
  id: string;
  title: string;
  reward: string;
}

interface Spending {
  id: string;
  description: string;
  amount: string;
  txHash: string;
  timestamp: string;
  explorerUrl: string;
}
```

### Submissions
```typescript
interface Submission {
  id: string;
  title: string;
  username: string;
  status: 'approved' | 'rejected' | 'open';
  date: string;
  link: string;
  linkLabel: string;
  information?: string; // Only for detail view
}
```

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Container.tsx
│   │   └── PageWrapper.tsx
│   ├── buttons/
│   │   ├── PrimaryButton.tsx
│   │   ├── IconButton.tsx
│   │   └── FAB.tsx
│   ├── cards/
│   │   ├── ProjectCard.tsx
│   │   ├── TaskCard.tsx
│   │   ├── TransactionCard.tsx
│   │   ├── SubmissionCard.tsx
│   │   └── AdminProtocolCard.tsx
│   ├── forms/
│   │   ├── TextInput.tsx
│   │   ├── Textarea.tsx
│   │   └── RadioOptionCard.tsx
│   ├── ui/
│   │   ├── StatusBadge.tsx
│   │   ├── StatItem.tsx
│   │   ├── CircularProgress.tsx
│   │   ├── ExternalLink.tsx
│   │   └── MaterialIcon.tsx
│   └── navigation/
│       ├── NavLink.tsx
│       └── BackButton.tsx
├── pages/
│   ├── ExploreProjects.tsx
│   ├── AddProject.tsx
│   ├── ProjectDetails.tsx
│   └── admin/
│       ├── AdminSubmissions.tsx
│       └── SubmissionReview.tsx
├── data/
│   ├── mockProjects.ts
│   └── mockSubmissions.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Dependencies

### Required Packages
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "@tailwindcss/forms": "^0.5.7",
    "typescript": "^5.4.5",
    "vite": "^5.2.0"
  }
}
```

## Testing Checklist

### Design Fidelity
- [ ] Colors match exactly (#6366F1 for primary, etc.)
- [ ] Font family is Inter
- [ ] Border radius is 0.75rem (12px)
- [ ] Spacing matches (p-4, mb-6, etc.)
- [ ] Card shadows match (shadow-sm, hover:shadow-md)

### Components
- [ ] Header sticky positioning works
- [ ] Header backdrop blur works
- [ ] Project cards display correctly
- [ ] Status badges show correct colors
- [ ] Circular progress renders correctly
- [ ] Form inputs styled correctly
- [ ] Radio buttons show selected state

### Interactions
- [ ] Project card navigation works
- [ ] Back button navigates correctly
- [ ] FAB visible only on mobile
- [ ] Form submission handler works
- [ ] External links open in new tab
- [ ] Hover states work on all interactive elements

### Responsive Design
- [ ] Mobile: Nav links hidden, FAB visible
- [ ] Desktop: All nav links visible, FAB hidden
- [ ] Text sizes adjust (text-2xl sm:text-3xl)
- [ ] Spacing adjusts (space-x-2 sm:space-x-4)
- [ ] Container padding adjusts (p-4 sm:p-6)

### Dark Mode
- [ ] Background is #111827 (gray-900)
- [ ] Cards are #1F2937 (gray-800)
- [ ] Text colors correct
- [ ] Borders visible but subtle

## Notes

- This is a **static implementation** with mock data
- Wallet connection button is placeholder (no Web3 integration yet)
- Form submissions log to console (no backend)
- Admin actions log to console (no state updates)
- Focus on **pixel-perfect design match**
- Keep **code clean and componentized**
- Use **TypeScript for type safety**
- Follow **React best practices**
