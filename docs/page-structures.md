# Page Structure Analysis

## Page 1: Explore Projects (List View)
**File**: `explore-projects-1.html`

### Purpose
- Type: Project listing/discovery page
- User Goal: Browse and explore available protocol projects

### Sections
1. **Header**: Sticky navigation with logo, nav links, and Connect button
2. **Main Content**: 
   - Page title "Explore Projects"
   - List of project cards
3. **Floating Action Button**: Mobile-only "Add Project" FAB (bottom-right)

### Interactive Elements
- **Navigation Links**: "Add Your Project", "Docs"
- **Connect Button**: Primary CTA in header
- **Project Cards**: Clickable cards that navigate to project details
- **FAB Button**: Mobile add button with Material icon

### Data Displayed Per Project Card
- Project logo (image)
- Project name
- Current Funds (ETH amount)
- Yield Earned (ETH amount with success color)
- Open Tasks (count)

---

## Page 2: Add Your Project (Form)
**File**: `explore_projects_2.html`

### Purpose
- Type: Project submission form
- User Goal: Register a new project on the platform

### Sections
1. **Header**: Sticky navigation (same as Page 1, but "Add Your Project" is highlighted)
2. **Main Content**:
   - Page title "Add Your Project"
   - Form with input fields
   - Radio button options
   - Submit button

### Interactive Elements
- **Text Input**: Project Name field
- **Textarea**: Description field
- **Radio Buttons**: Three options for project operation mode:
  1. Track Your Protocol Spending (basic tracking)
  2. Track Your Protocol Spending and Add Tasks (with community engagement) - Default selected
  3. Track Your Protocol Spending/Task & Earn Yield (with yield generation)
- **Submit Button**: "Create Project" full-width primary button

### Form Fields
- Project Name (required text input)
- Description (textarea, 3 rows)
- Operation Mode (radio selection with 3 options, each with icon and description)

---

## Page 3: Project Details
**File**: `explore_projects_3.html`

### Purpose
- Type: Individual project detail page
- User Goal: View comprehensive information about a specific project

### Sections
1. **Header**: Sticky navigation with back button, logo, nav links, and Connect button
2. **Project Header**: Logo, name, and description
3. **Total Funds Card**: 
   - Circular progress chart showing fund allocation
   - Current ETH amount
   - Yield earned
4. **Open Tasks Section**: List of available tasks with rewards
5. **Project Spendings Section**: Transaction history with links

### Interactive Elements
- **Back Button**: Navigate to previous page (arrow_back_ios icon)
- **Task Cards**: Clickable items to view task details
- **Transaction Links**: External links with "open_in_new" icon
- **Chevron Icons**: Navigation indicators on task cards

### Data Displayed
- **Project Header**: Logo, name, tagline
- **Funds Overview**: Total ETH, visual progress, yield earned
- **Tasks**: Title, reward amount, navigation arrow
- **Spendings**: Description, amount, transaction hash, timestamp, external link

---

## Page 4: Admin Submissions List
**File**: `admin_submissions_dark_mode.html`

### Purpose
- Type: Admin review dashboard
- User Goal: View and manage project task submissions

### Sections
1. **Header**: Title "Admin Page" with notification bell
2. **Protocol Info Card**: Admin identity card with shield icon
3. **Submissions List**: Cards showing all submissions with status badges
4. **Submission Detail View**: Expanded review section (bottom of page)

### Interactive Elements
- **Notification Button**: Bell icon in header
- **Submission Cards**: Clickable to view details
  - Approved submissions (non-clickable)
  - Rejected submissions (non-clickable)
  - Open submissions (clickable link to detail view)
- **External Links**: GitHub, GitLab, Figma links with "open_in_new" icon
- **Action Buttons**: Approve and Reject buttons in detail view

### Status Types
- **Approved**: Green badge with dot indicator
- **Rejected**: Red badge with dot indicator
- **Open**: Amber badge with dot indicator

### Submission Data Displayed
- Title
- Submitter username
- Status badge
- Submission date
- External link to work
- (In detail view) Full submission information and description

### Review Actions
- Approve submission (green button)
- Reject submission (red button)

---

## Common Elements Across All Pages

### Header Navigation
- Present on all pages
- Sticky positioning (top-0 z-10)
- Logo/brand name "Protocol"
- Navigation links (varies by page)
- Connect button (CTA)
- Back button (on detail pages)

### Responsive Behavior
- Mobile-first design
- Navigation items hidden on mobile (sm:block)
- Text sizes adjust (text-2xl sm:text-3xl)
- Spacing adjusts (space-x-2 sm:space-x-4)
- FAB appears only on mobile
- Container padding adapts (p-4 sm:p-6)

### Dark Mode
- All pages implement dark mode
- HTML has `class="dark"`
- Consistent color system across pages
