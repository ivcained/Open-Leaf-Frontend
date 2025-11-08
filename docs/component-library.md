# Component Library

## Navigation Components

### Header
**Appears in**: All pages

#### Structure
```jsx
<header className="sticky top-0 z-10 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
  <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Logo />
    <NavLinks />
    <ConnectButton />
  </nav>
</header>
```

#### Variants
1. **Standard Header**: Logo + Nav Links + Connect Button
2. **Detail Header**: Back Button + Logo + Nav Links + Connect Button

#### Styling
- Position: `sticky top-0 z-10`
- Background: `bg-background-dark/80 backdrop-blur-sm`
- Border: `border-b border-border-dark`
- Padding: `px-4 py-4`
- Layout: `flex justify-between items-center`

---

### Navigation Link
**Component**: Link item in header navigation

#### Classes
- Default: `text-text-dark-secondary hover:text-text-dark-primary transition-colors`
- Active: `text-primary font-semibold`
- Responsive: `hidden sm:block` (hides on mobile)
- Font: `text-sm font-medium`

---

## Button Components

### Primary Button
**Usage**: Main CTAs, form submissions

#### Variants
1. **Header Button** (Small)
   - Classes: `bg-primary text-white font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm hover:opacity-90 transition-opacity`

2. **Form Submit Button** (Large)
   - Classes: `w-full bg-primary text-white font-semibold px-4 py-3 rounded-lg hover:opacity-90 transition-opacity`

---

### Status Action Buttons
**Usage**: Admin approval/rejection actions

#### Approve Button
- Classes: `w-full py-3 px-4 bg-status-approved text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-colors`

#### Reject Button
- Classes: `w-full py-3 px-4 bg-status-rejected text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-colors`

---

### Floating Action Button (FAB)
**Usage**: Mobile-only quick action
**Appears in**: Explore Projects page

#### Structure
```jsx
<button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity">
  <MaterialIcon name="add" size={28} />
</button>
```

#### Position
- `fixed bottom-6 right-6 sm:hidden`
- Only visible on mobile screens

---

### Icon Button
**Usage**: Header actions (notifications, back navigation)

#### Variants
1. **Back Button**: `arrow_back_ios` icon with secondary text color
2. **Notification Button**: `notifications` icon with muted color

---

## Card Components

### Project Card
**Usage**: Display project information in list view
**Appears in**: Explore Projects page

#### Structure
```jsx
<div className="bg-card-dark rounded-lg border border-border-dark p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
  <div className="flex justify-between items-start mb-4">
    <div className="flex items-start">
      <img className="w-10 h-10 mr-4" src={logo} alt={name} />
      <h2 className="font-bold text-lg text-text-dark-primary">{name}</h2>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4 text-left">
    <StatItem label="Current Funds" value={funds} />
    <StatItem label="Yield Earned" value={yield} valueClass="text-success-dark" />
    <StatItem label="Open Tasks" value={tasks} />
  </div>
</div>
```

#### States
- Default: `shadow-sm`
- Hover: `hover:shadow-md transition-shadow`
- Interactive: `cursor-pointer`

---

### Task Card
**Usage**: Display open tasks with rewards
**Appears in**: Project Detail page

#### Structure
```jsx
<div className="bg-card-dark rounded-lg border border-border-dark p-4 flex justify-between items-center">
  <div>
    <p className="font-medium text-text-dark-primary">{title}</p>
    <p className="text-xs text-text-dark-secondary">Reward: {reward} ETH</p>
  </div>
  <MaterialIcon name="chevron_right" />
</div>
```

---

### Transaction/Spending Card
**Usage**: Display transaction history
**Appears in**: Project Detail page

#### Structure
```jsx
<div className="p-4">
  <div className="flex justify-between items-center mb-1">
    <p className="font-medium text-text-dark-primary">{description}</p>
    <p className="font-semibold text-text-dark-primary">{amount} ETH</p>
  </div>
  <div className="flex justify-between items-center text-xs text-text-dark-secondary">
    <span>Tx: {txHash}</span>
    <span className="flex items-center">
      {timestamp} 
      <MaterialIcon name="open_in_new" size="sm" className="ml-1" />
    </span>
  </div>
</div>
```

#### Container
- Wrapped in card with dividers: `divide-y divide-border-dark`

---

### Submission Card
**Usage**: Display task submissions with status
**Appears in**: Admin Submissions page

#### Structure
```jsx
<div className="bg-card-light dark:bg-card-dark rounded-lg p-4 border border-border-light dark:border-border-dark">
  <div className="flex justify-between items-start mb-2">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-text-muted-dark">by {username}</p>
    </div>
    <StatusBadge status={status} />
  </div>
  <div className="text-sm text-text-muted-dark flex items-center justify-between">
    <p>{date}</p>
    <ExternalLink url={link} label={linkLabel} />
  </div>
</div>
```

#### States
- Clickable variant: `hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200`

---

### Admin Protocol Card
**Usage**: Display admin identity
**Appears in**: Admin page header

#### Structure
```jsx
<div className="bg-card-dark rounded-lg p-4 flex items-center justify-between border border-border-dark">
  <div className="flex items-center space-x-3">
    <div className="bg-primary/10 p-2 rounded-full">
      <MaterialIcon name="shield" className="text-primary" />
    </div>
    <div>
      <h2 className="font-semibold text-lg">Protocol</h2>
      <p className="text-sm text-text-muted-dark">Manage submissions</p>
    </div>
  </div>
</div>
```

---

## Form Components

### Text Input
**Usage**: Single-line text entry

#### Classes
```
w-full bg-card-dark border-border-dark rounded-lg 
placeholder-text-dark-secondary 
focus:ring-primary focus:border-primary
```

#### Label
- Classes: `text-sm font-medium text-text-dark-secondary mb-2 block`

---

### Textarea
**Usage**: Multi-line text entry

#### Classes
```
w-full bg-card-dark border-border-dark rounded-lg 
placeholder-text-dark-secondary 
focus:ring-primary focus:border-primary
```

#### Default Rows: `rows="3"`

---

### Radio Button Group
**Usage**: Single selection from multiple options

#### Radio Option Card
```jsx
<label className="flex items-center p-4 bg-card-dark rounded-lg border-2 border-border-dark has-[:checked]:border-primary transition-colors cursor-pointer">
  <input 
    type="radio" 
    className="h-5 w-5 text-primary bg-background-dark border-border-dark focus:ring-primary focus:ring-offset-background-dark mr-4"
  />
  <span className="flex-1">
    <span className="font-semibold block text-text-dark-primary">{title}</span>
    <span className="text-sm text-text-dark-secondary">{description}</span>
  </span>
  <MaterialIcon name={icon} className="text-text-dark-secondary ml-4" />
</label>
```

#### State
- Selected: `border-2 border-primary`
- Default: `border-2 border-border-dark`

---

## Badge Components

### Status Badge
**Usage**: Display submission/task status
**Appears in**: Admin submissions, project details

#### Structure
```jsx
<div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-{status}/10 text-{status}">
  <span className="w-2 h-2 rounded-full bg-{status}"></span>
  <p className="text-xs font-medium">{statusText}</p>
</div>
```

#### Variants
1. **Approved**: 
   - Background: `bg-status-approved/10`
   - Text/Dot: `text-status-approved`, `bg-status-approved`
   
2. **Rejected**: 
   - Background: `bg-status-rejected/10`
   - Text/Dot: `text-status-rejected`, `bg-status-rejected`
   
3. **Open**: 
   - Background: `bg-status-open/10`
   - Text/Dot: `text-status-open`, `bg-status-open`

---

## Display Components

### Stat Item
**Usage**: Display labeled statistics

#### Structure
```jsx
<div>
  <p className="text-xs text-text-dark-secondary mb-1">{label}</p>
  <p className="font-semibold text-text-dark-primary">{value}</p>
</div>
```

#### Variants
- Success value: Add `text-success-dark` class to value

---

### Circular Progress Chart
**Usage**: Visual representation of fund allocation
**Appears in**: Project Detail page

#### Structure
```jsx
<div className="relative w-40 h-40">
  <svg className="w-full h-full" viewBox="0 0 36 36">
    {/* Background circle */}
    <path 
      className="text-border-dark" 
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3"
    />
    {/* Progress circle */}
    <path 
      className="text-primary" 
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none" 
      stroke="currentColor" 
      strokeDasharray="75, 100"
      strokeLinecap="round"
      strokeWidth="3"
    />
  </svg>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm text-text-dark-secondary">{unit}</span>
  </div>
</div>
```

---

## Link Components

### External Link
**Usage**: Links to external resources

#### Structure
```jsx
<a 
  href={url}
  className="flex items-center space-x-1 text-primary font-medium hover:underline"
>
  <span>{label}</span>
  <MaterialIcon name="open_in_new" size="sm" />
</a>
```

---

## Layout Components

### Container
**Usage**: Main content wrapper

#### Classes
- `container mx-auto p-4 sm:p-6`
- Centered with responsive padding

---

### Page Wrapper
**Usage**: Full page container

#### Classes
- `min-h-screen` - Ensures full viewport height
- `max-w-md mx-auto min-h-screen p-4` (for mobile-focused pages like admin)

---

### Section
**Usage**: Content sections with spacing

#### Spacing
- `mb-6` - Standard section bottom margin
- `space-y-3`, `space-y-4`, `space-y-6` - Vertical spacing between items

---

## Grid Layouts

### Three Column Grid
**Usage**: Statistics display

#### Classes
- `grid grid-cols-3 gap-4 text-left`

### Two Column Grid  
**Usage**: Action buttons

#### Classes
- `grid grid-cols-2 gap-4`

---

## Icon System

### Material Icons
**Package**: Material Icons Outlined / Material Symbols Outlined

#### Common Icons Used
- `add` - Add action (FAB)
- `arrow_back_ios` - Back navigation
- `notifications` - Notifications
- `chevron_right` - Navigation indicator
- `open_in_new` - External link
- `shield` - Admin/security
- `monitoring` - Tracking
- `task_alt` - Tasks
- `insights` - Analytics/yield

#### Sizing
- Default: 20-24px
- Large: 28px (FAB)
- Small: text-sm (inline with text)

---

## Responsive Patterns

### Show/Hide on Mobile
- Hide on mobile: `hidden sm:block`
- Show on mobile only: `sm:hidden`

### Responsive Spacing
- `space-x-2 sm:space-x-4`
- `p-4 sm:p-6`

### Responsive Text
- `text-xs sm:text-sm`
- `text-2xl sm:text-3xl`

### Responsive Layout
- Mobile-first approach
- Breakpoint at `sm:` (640px)
