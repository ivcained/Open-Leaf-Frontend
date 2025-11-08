# Navigation Flow

## Site Map

```
Home (Explore Projects)
├── Project Details (individual project view)
│   └── Task Details (future expansion)
├── Add Your Project (form)
└── Admin Submissions
    └── Submission Review (detail view)

Additional Pages:
├── Docs (external or placeholder)
└── About/Info pages
```

## User Flows

### Main User Journey: Browse Projects
1. **Home (Explore Projects)** → View list of all projects
2. Click on **Project Card** → Navigate to **Project Details**
3. From **Project Details** → View tasks, spendings, and stats
4. Click **Back Button** → Return to **Explore Projects**

### Add Project Flow
1. **Explore Projects** → Click "Add Your Project" nav link
2. Navigate to **Add Your Project** form page
3. Fill in:
   - Project Name
   - Description
   - Select Operation Mode (3 options via radio buttons)
4. Click "Create Project" button → Submit form (backend action)
5. (Implied) → Redirect to project dashboard or confirmation

### Admin Review Flow
1. Navigate to **Admin Submissions** page
2. View list of submissions with status badges
3. **Approved/Rejected submissions** → Display only (non-interactive)
4. **Open submissions** → Click submission card
5. Scroll to or navigate to **Review Submission** section
6. Review submission details:
   - Task Subject
   - User
   - Submission link (external)
   - Submission information (description)
7. Take action:
   - Click **Approve** button → Approve submission (update status)
   - Click **Reject** button → Reject submission (update status)

### Mobile-Specific Flow
1. On **Explore Projects** (mobile only)
2. **Floating Action Button** (bottom-right) visible
3. Click FAB → Navigate to **Add Your Project** form
4. (Same as desktop flow from step 3)

## Interactive Elements Map

| Element | Location | Action | Destination/Effect |
|---------|----------|--------|-------------------|
| Logo "Protocol" | Header (all pages) | Click | Navigate to Home/Explore Projects |
| "Add Your Project" link | Header nav | Click | Navigate to Add Project form |
| "Docs" link | Header nav | Click | Navigate to documentation (external or internal) |
| "Connect" button | Header | Click | Wallet connection (Web3 action) |
| Project Card | Explore Projects | Click | Navigate to Project Details |
| Back Button | Project Details header | Click | Navigate back to previous page |
| Task Card | Project Details | Click | Navigate to Task Details (future) |
| Transaction external link | Project Details | Click | Open blockchain explorer (new tab) |
| FAB (Mobile) | Explore Projects | Click | Navigate to Add Project form |
| Notification button | Admin page | Click | View notifications (action TBD) |
| Submission card (Open) | Admin Submissions | Click | Scroll/navigate to Review section |
| External links | Admin Submissions | Click | Open GitHub/GitLab/Figma (new tab) |
| "Approve" button | Submission Review | Click | Approve submission, update status |
| "Reject" button | Submission Review | Click | Reject submission, update status |
| "Create Project" button | Add Project form | Click | Submit form data |
| Radio option cards | Add Project form | Click | Select operation mode |

## Navigation Patterns

### Header Navigation
- **Persistent across all pages**
- Logo always clickable → Home
- Navigation links visibility:
  - Desktop: All links visible
  - Mobile: Some links hidden, rely on FAB or menu
- Connect button always visible (responsive sizing)

### Back Navigation
- Present on detail pages (Project Details)
- Material icon: `arrow_back_ios`
- Returns to previous page in history

### Card-Based Navigation
- Cards are primary navigation method
- Visual feedback on hover (shadow change)
- Cursor changes to pointer
- Click entire card to navigate

### Form Navigation
- Form submission triggers backend action
- Expected behavior: Redirect on success
- No cancel button (use back navigation)

## Page Relationships

### Parent-Child Relationships
```
Explore Projects (Parent)
  └── Project Details (Child)
      └── Task Details (Future child)

Add Your Project (Standalone form)

Admin Submissions (Parent)
  └── Review Submission (Child/Detail view)
```

### Navigation Context
- **Explore Projects**: Entry point, public view
- **Project Details**: Requires project ID/selection
- **Add Project**: Public form, standalone
- **Admin Submissions**: Protected, requires admin auth
- **Review Submission**: Requires submission ID, admin only

## Data Flow

### Project Data
```
Source: Backend API / Smart Contract
Flow: API → Project Card → Project Details
Fields:
  - Project ID
  - Name
  - Logo URL
  - Description
  - Current Funds (ETH)
  - Yield Earned (ETH)
  - Open Tasks Count
  - Task List (detailed view)
  - Spending History (detailed view)
```

### Form Data (Add Project)
```
Input: User form submission
Fields:
  - Project Name (text)
  - Description (textarea)
  - Operation Mode (radio: spending | tasks | yield)
Flow: Form → Validation → Backend API → Database
Response: Success → Redirect | Error → Display error
```

### Submission Data (Admin)
```
Source: Backend API / Database
Flow: API → Submission List → Review Detail
Fields:
  - Submission ID
  - Title
  - Username
  - Status (approved | rejected | open)
  - Date
  - External Link (GitHub/GitLab/Figma)
  - Submission Information (description)
Admin Actions:
  - Approve → Update status, notify user
  - Reject → Update status, notify user
```

### Wallet Connection
```
Trigger: "Connect" button click
Action: Web3 wallet connection (MetaMask, WalletConnect, etc.)
State: Connected → Show address | Disconnected → Show "Connect"
Persistence: Session storage or local storage
```

## State Management Needs

### Global State
- Wallet connection status
- User address
- Network/chain information
- Authentication status (admin)

### Page-Level State
- **Explore Projects**: Projects list, loading state
- **Project Details**: Project data, tasks, spendings
- **Add Project**: Form values, validation errors
- **Admin Submissions**: Submissions list, selected submission

### Component State
- Form inputs
- Dropdown/menu open states
- Modal/dialog states
- Loading indicators

## URL Structure (Suggested)

```
/ or /explore - Explore Projects (Home)
/projects/:id - Project Details
/add-project - Add Your Project Form
/admin/submissions - Admin Submissions List
/admin/submissions/:id - Submission Review (or anchor: #submission-detail)
/docs - Documentation
```

## External Integrations

### Blockchain
- Wallet connection
- Transaction viewing (etherscan links)
- Smart contract interactions (read/write)

### External Links
- GitHub repositories
- GitLab projects
- Figma designs
- Documentation sites

## Error Handling & Edge Cases

### Navigation Errors
- Invalid project ID → 404 or redirect to home
- Unauthorized admin access → Redirect to login
- Network errors → Display error message, retry option

### Form Errors
- Validation errors → Inline display
- Submission errors → Toast/alert notification
- Network timeout → Retry mechanism

### State Errors
- Wallet disconnection → Show reconnect prompt
- Session expiration → Redirect to login
- Failed data load → Error state with retry
