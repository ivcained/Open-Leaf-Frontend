import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import About from '@/pages/About';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

const Home = () => {
	const [checked, setChecked] = useState(false);
	const [switched, setSwitched] = useState(false);

	return (
		<div className="container mx-auto min-h-screen space-y-16 px-4 py-12">
			{/* Hero Section */}
			<header className="space-y-1 text-center">
				<h1 className="text-6xl font-bold md:text-7xl lg:text-8xl">OpenLeaf</h1>
				<h2 className="text-muted-foreground text-3xl font-bold md:text-4xl lg:text-5xl">
					Your Gateway to Protocol Transparency
				</h2>
			</header>

			<Separator />

			{/* Octant Documentation */}
			<section className="space-y-8">
				<div className="mx-auto max-w-2xl">
					<Card className="space-y-4 p-8 text-center">
						<h3 className="text-5xl font-semibold">Getting Started</h3>
						<p className="text-muted-foreground">
							Introduction to Octant v2 architecture and core concepts
						</p>
						<a
							href="https://docs.v2.octant.build/"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							<Button className="w-full">View Documentation</Button>
						</a>
					</Card>
				</div>
			</section>

			<Separator />

			{/* Smart Contract ABIs */}
			<section className="space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold md:text-4xl">Smart Contract ABIs</h2>
					<p className="text-muted-foreground">
						Pre-configured ABIs ready to use in your dApp
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					<Card className="space-y-4 p-6">
						<h3 className="text-lg font-semibold">
							Morpho Compounder Strategy Factory
						</h3>
						<p className="text-muted-foreground text-sm">
							Factory contract for creating Morpho yield compounding strategies
						</p>
						<code className="block text-xs">
							src/abis/MorphoCompounderStrategyFactory.json
						</code>
					</Card>

					<Card className="space-y-4 p-6">
						<h3 className="text-lg font-semibold">Sky Compounder Strategy Factory</h3>
						<p className="text-muted-foreground text-sm">
							Factory contract for creating Sky protocol compounding strategies
						</p>
						<code className="block text-xs">
							src/abis/SkyCompounderStrategyFactory.json
						</code>
					</Card>

					<Card className="space-y-4 p-6">
						<h3 className="text-lg font-semibold">Yield Donating Tokenized Strategy</h3>
						<p className="text-muted-foreground text-sm">
							Strategy contract for automated yield donations with tokenization
						</p>
						<code className="block text-xs">
							src/abis/YieldDonatingTokenizedStrategy.json
						</code>
					</Card>
				</div>

				<div className="mx-auto max-w-3xl">
					<Card className="p-6">
						<h4 className="mb-3 text-lg font-semibold">How to Use ABIs</h4>
						<div className="space-y-2 text-left text-sm">
							<p className="text-muted-foreground">
								Import the ABI in your component:
							</p>
							<code className="bg-muted block rounded-md p-3">
								{`import MorphoCompounderStrategyFactoryABI from '@/abis/MorphoCompounderStrategyFactory.json';`}
							</code>
							<p className="text-muted-foreground mt-3">Use with wagmi or viem:</p>
							<code className="bg-muted block rounded-md p-3">
								{`const { data } = useReadContract({
  address: '0x...',
  abi: MorphoCompounderStrategyFactoryABI,
  functionName: 'createStrategy'
});`}
							</code>
						</div>
					</Card>
				</div>
			</section>

			<Separator />

			{/* Available Components Grid */}
			<section className="space-y-8">
				<h2 className="text-center text-5xl font-bold">Components</h2>
				<p className="text-muted-foreground text-center">
					All components are ready to use. Copy the code and start building.
				</p>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{/* Buttons Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Buttons</h3>
						<div className="space-y-2">
							<Button className="w-full" size="sm">
								Primary
							</Button>
							<Button variant="secondary" className="w-full" size="sm">
								Secondary
							</Button>
							<Button variant="outline" className="w-full" size="sm">
								Outline
							</Button>
							<Button variant="destructive" className="w-full" size="sm">
								Destructive
							</Button>
						</div>
					</Card>

					{/* Inputs Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Inputs</h3>
						<div className="space-y-2">
							<Label htmlFor="demo">Label</Label>
							<Input id="demo" placeholder="Type here..." />
						</div>
					</Card>

					{/* Select Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Select</h3>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Choose option" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">Option 1</SelectItem>
								<SelectItem value="2">Option 2</SelectItem>
								<SelectItem value="3">Option 3</SelectItem>
							</SelectContent>
						</Select>
					</Card>

					{/* Checkbox & Switch Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Checkbox & Switch</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-2">
								<Checkbox
									id="terms"
									checked={checked}
									onCheckedChange={(value) => setChecked(value === true)}
								/>
								<Label htmlFor="terms" className="text-sm">
									Accept terms
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Switch
									id="mode"
									checked={switched}
									onCheckedChange={setSwitched}
								/>
								<Label htmlFor="mode" className="text-sm">
									Enable mode
								</Label>
							</div>
						</div>
					</Card>

					{/* Dialog Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Dialog</h3>
						<Dialog>
							<DialogTrigger asChild>
								<Button variant="outline" className="w-full">
									Open Dialog
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Dialog Title</DialogTitle>
									<DialogDescription>
										This is a dialog modal for confirmations or forms.
									</DialogDescription>
								</DialogHeader>
								<div className="py-4">
									<Input placeholder="Example input" />
								</div>
							</DialogContent>
						</Dialog>
					</Card>

					{/* Toast Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Toast (Sonner)</h3>
						<div className="space-y-2">
							<Button
								size="sm"
								className="w-full"
								onClick={() => toast.success('Success!')}
							>
								Success
							</Button>
							<Button
								size="sm"
								variant="destructive"
								className="w-full"
								onClick={() => toast.error('Error!')}
							>
								Error
							</Button>
						</div>
					</Card>

					{/* Tabs Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Tabs</h3>
						<Tabs defaultValue="tab1">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="tab1">Tab 1</TabsTrigger>
								<TabsTrigger value="tab2">Tab 2</TabsTrigger>
							</TabsList>
							<TabsContent value="tab1" className="text-sm">
								Content for tab 1
							</TabsContent>
							<TabsContent value="tab2" className="text-sm">
								Content for tab 2
							</TabsContent>
						</Tabs>
					</Card>

					{/* Avatar Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Avatar</h3>
						<div className="flex justify-center gap-3">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarFallback>AB</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarFallback>XY</AvatarFallback>
							</Avatar>
						</div>
					</Card>

					{/* Tooltip Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Tooltip</h3>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" className="w-full">
										Hover me
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Tooltip content</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Card>

					{/* Dropdown Menu Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Dropdown Menu</h3>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" className="w-full">
									Open Menu
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</Card>

					{/* Badge Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Badge</h3>
						<div className="flex flex-wrap gap-2">
							<Badge>Default</Badge>
							<Badge variant="secondary">Secondary</Badge>
							<Badge variant="outline">Outline</Badge>
							<Badge variant="destructive">Destructive</Badge>
						</div>
					</Card>

					{/* Separator Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Separator</h3>
						<div>
							<p className="text-sm">Section 1</p>
							<Separator className="my-2" />
							<p className="text-sm">Section 2</p>
							<Separator className="my-2" />
							<p className="text-sm">Section 3</p>
						</div>
					</Card>

					{/* Skeleton Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Skeleton</h3>
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
						</div>
					</Card>

					{/* Form / Label Card */}
					<Card className="space-y-4 p-6">
						<h3 className="text-xl font-semibold">Form / Label</h3>
						<div className="space-y-2">
							<Label htmlFor="example">Email</Label>
							<Input id="example" type="email" placeholder="email@example.com" />
						</div>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<footer className="pt-8 pb-8 text-center">
				<Link to="/about">
					<Button variant="ghost" size="sm">
						About this template
					</Button>
				</Link>
			</footer>
		</div>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
			<Toaster />
		</BrowserRouter>
	);
}

export default App;
