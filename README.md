# OpenLeaf - Your Gateway to Treasury Transparency.

Create a platform which allows transparency of  project funds while encouraging  incentives to the community which let the project grow in a transparent way.

By encouraging projects  to earn yield on their deposits, they can grow community/developer initiative while simultaneously showing transparency and gaining trust. 

# How does it work?
## Projects can make multiple choices:

### Monitor their Protocol Spendings
### Create a vault and Monitor their protocol Spending
### Create a task and direct funds or their yield to tasks their community can apply and get an incentive (USDC) in return. While also doing the above 2.
### This allows the project to target 3 points: 

## Transparency

## Earn yield safely on idle funds.

## Community Initiative & Forward the project.

# Project Architecture

# Solidity 

# Admin Functions:

## CreateTask:
Creates a task for the project, by setting the details like payment, description etc. sets the task status as OPEN

Emits TaskCreated()

## SetSubmitTaskRate:
Sets the payment that an user needs to pay to submit their submission for a particular task.

Emits TaskRateChanged()

## AcceptSubmission/PayoutUser:
SPayouts the user for their submitted task and  sets the task as PAID.

Emits  SubmissionAccepted()

## RejectSubmission
Rejects the submission from an user, (auto-reject will happen of all submission.)


Emits  SubmissionAccepted()

## RemoveTask:
Remove the task and set the task status as REMOVED

Emits  TaskRemoved()

## CreateProject (Deploys contract/):
Creates and submits their project  on the platform,they will be met by several choices as what they want to monitor/use FE: Create a vault, have tasks , or just be transparant with their funds usage.

## Emits  ProjectCreated()

## AddContractToMonitor:
Allows the admin to add an address they want to add for transparency, For example:  Project has a new treasury address.

## Emits  ContractMonitored()

## RemoveContractToMonitor:
Allows the admin to Remove an address they want to  remove, For example:  Project has a new treasury address.

## Emits  RemoveContractMonitored()

## SubmitInformationAboutATransaction:
Add a information about a transaction,  this also allows them to edit.

Emits  InformationSubmitted()

# User Functions

### SubmitTask:
User submits their task by sending the details & a fee against spam.
Emits  TaskSubmittedUser()

# Protocol functions 
Approve/Reject Projects

# Frontend
## Explore Page: (Home):
Shows the all submitted projects with their funds & yield earned & open tasks.



## Add  Project: 
Adds the project to the website with details:
First the project has a choice of 2, Monitor Project Spending  and create tasks .  and first choice + Earn yield on their unused protocol funds.

## Project Page:
A page with project details  (Funds, description name ) and tasks & transaction that are going out of their wallet.

## Admin Page: 
Allows admins to approve/reject tasks and manage their vault and yield,
## Backend:  

### Monitor Transaction (ERC20 token,  ETH) made by projects , (For example:  Treasury sends 100 ether to their wallet.  Puts it into their project page.



### Gasless transactions through signatures for users and admin (non critical functions). 
For example:
Admin wants to reject someone (He can do so signatureless by approving an agent (like hyperliquid process of signatureless trading).
Things like approving payment require real time signatures.

### Monitor Tasks events and assign them per project. for example:
- TaskApproved →  Change the task status from Open to Removed. Creates a new task page with information description etc etc.
- TaskSubmitted → Open a new task for the particular project and set status Open
- TaskRemoved  → Change the task status from Open  to Removed.

Monitor Admin Tasks Approval & Rejections
Show them approved tasks & rejected tasks by the event emits in admin list page, should be the same logic as the above one, put them  with the rejected status or approved status .

# We used the Octant v2 Hackathon dApp Boilerplate

A production-ready React boilerplate optimized for hackathon development. Get started building your dApp in minutes with modern tooling and essential libraries pre-configured.

## Quick Start

```bash
git clone https://github.com/golemfoundation/octant-v2-hackathon-dapp-boilerplate.git
cd octant-v2-hackathon-dapp-boilerplate
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app.


## What's Included

### Core Stack
- **React 19** - Latest React with improved performance
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type safety for better DX
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Modern client-side routing

### State & Forms
- **Zustand** - Lightweight state management (see `src/store.js`)
- **React Hook Form** - Performant form validation
- **Zod** - Schema validation

### UI Components
- **ShadCN UI** - High-quality, accessible components (17 ready-to-use components)
  - Pre-configured in `src/components/ui/`
  - Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Select, Separator, Skeleton, Switch, Tabs, Tooltip, Toaster
  - **All components visible on homepage** with interactive demos!
- **Lucide React** - Beautiful icon library (1000+ icons)
- **Sonner** - Toast notifications

### Design System
- **Dark Theme** - Custom Octant dark theme with `#0d0d0d` background
- **Arcane Fable Font** - Beautiful custom font for headings
- **Optimized Colors** - Carefully selected palette for accessibility and readability

### Smart Contract ABIs
Pre-configured ABIs for Octant v2 integration:
- **MorphoCompounderStrategyFactory** - Factory for Morpho yield strategies
- **SkyCompounderStrategyFactory** - Factory for Sky protocol strategies
- **YieldDonatingTokenizedStrategy** - Automated yield donation contract

All ABIs are located in `src/abis/` and ready to import:
```typescript
import MorphoABI from '@/abis/MorphoCompounderStrategyFactory.json';
import SkyABI from '@/abis/SkyCompounderStrategyFactory.json';
import YieldABI from '@/abis/YieldDonatingTokenizedStrategy.json';
```

## Project Structure

```
src/
├── abis/                # Smart contract ABIs
│   ├── MorphoCompounderStrategyFactory.json
│   ├── SkyCompounderStrategyFactory.json
│   └── YieldDonatingTokenizedStrategy.json
├── components/
│   └── ui/              # ShadCN UI components
├── pages/               # Your app pages/routes
│   ├── About.tsx
│   └── [add more here]
├── lib/
│   └── utils.ts         # Utility functions (cn, etc.)
├── store.ts             # Zustand global state
├── App.tsx              # Routes and app shell
└── main.tsx             # App entry point
```

## Development Guide

### Exploring Components
The homepage displays all 17 pre-built components:
- Interactive demos you can test immediately
- See how each component looks and behaves
- All components are styled for the dark theme

### Adding New Pages
1. Create a new file in `src/pages/` (e.g., `Dashboard.tsx`)
2. Add route in `src/App.tsx`:
```tsx
<Route path="dashboard" element={<Dashboard />} />
```

### Using Zustand State
```tsx
import { useCounterStore } from '@/store';

function MyComponent() {
  const { count, increment } = useCounterStore();
  return <button onClick={increment}>{count}</button>;
}
```

### Using ShadCN Components
```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Card>
  <Button>Click me</Button>
</Card>
```

### Using Smart Contract ABIs
```tsx
import MorphoABI from '@/abis/MorphoCompounderStrategyFactory.json';
import { useReadContract } from 'wagmi';

function MyComponent() {
  const { data } = useReadContract({
    address: '0x...', // Contract address
    abi: MorphoABI,
    functionName: 'createStrategy',
    args: [/* your args */]
  });

  return <div>{/* Your component */}</div>;
}
```

### Styling with Tailwind
Use utility classes directly in JSX:
```tsx
<div className="flex items-center gap-4 rounded-lg border p-6">
  <h1 className="text-2xl font-bold">Hello</h1>
</div>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready to deploy to any static hosting service.

## Customization

### Add More ShadCN Components
Visit [ui.shadcn.com](https://ui.shadcn.com) and use their CLI:
```bash
npx shadcn@latest add [component-name]
```

### Modify Tailwind Config
Edit `tailwind.config.js` for custom colors, fonts, etc.

### Configure Build
Edit `vite.config.ts` for build optimizations.

## Tips for Hackathons

1. **Focus on features** - UI components are ready, just build your logic
2. **Use Zustand** for simple global state - no Redux boilerplate
3. **Leverage Tailwind** for rapid styling - no CSS files needed
4. **ShadCN components** are accessible and mobile-responsive out of the box
5. **TypeScript** helps catch bugs early - use it!
