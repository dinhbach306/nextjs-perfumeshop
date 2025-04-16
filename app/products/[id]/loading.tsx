import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailLoading() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation Skeleton */}
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-24" />
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <Skeleton key={i} className="h-4 w-16" />
                            ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-9 w-9 rounded-md" />
                        <Skeleton className="h-9 w-16 rounded-md" />
                        <Skeleton className="h-9 w-20 rounded-md" />
                    </div>
                </div>
            </header>

            <div className="container py-8">
                {/* Breadcrumb Skeleton */}
                <div className="mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                </div>

                {/* Product Detail Skeleton */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Product Images Skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="aspect-square w-full rounded-lg" />
                        <div className="grid grid-cols-4 gap-2">
                            {Array(4)
                                .fill(null)
                                .map((_, i) => (
                                    <Skeleton key={i} className="aspect-square w-full rounded-md" />
                                ))}
                        </div>
                    </div>

                    {/* Product Info Skeleton */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-8 w-48" />
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-9 w-9 rounded-full" />
                                    <Skeleton className="h-9 w-9 rounded-full" />
                                </div>
                            </div>
                            <div className="mt-2 flex items-center gap-4">
                                <div className="flex items-center">
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Skeleton key={i} className="h-5 w-5 mx-0.5" />
                                        ))}
                                </div>
                                <Skeleton className="h-4 w-24" />
                            </div>
                            <Skeleton className="mt-4 h-8 w-24" />
                            <Skeleton className="mt-4 h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-3/4" />
                        </div>

                        <Skeleton className="h-px w-full" />

                        {/* Size Selection Skeleton */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-5 w-12" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                            <div className="flex gap-3">
                                {Array(3)
                                    .fill(null)
                                    .map((_, i) => (
                                        <Skeleton key={i} className="h-16 w-16 rounded-md" />
                                    ))}
                            </div>
                        </div>

                        {/* Quantity Skeleton */}
                        <div className="space-y-4">
                            <Skeleton className="h-5 w-20" />
                            <div className="flex items-center">
                                <Button disabled variant="outline" size="icon" className="rounded-r-none">
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <Skeleton className="h-9 w-full rounded-none" />
                                <Button disabled variant="outline" size="icon" className="rounded-l-none">
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Add to Cart Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-full" />
                        </div>

                        <Skeleton className="h-px w-full" />

                        {/* Product Details Tabs Skeleton */}
                        <div className="w-full">
                            <Tabs defaultValue="description">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="description" disabled>
                                        Description
                                    </TabsTrigger>
                                    <TabsTrigger value="details" disabled>
                                        Details
                                    </TabsTrigger>
                                    <TabsTrigger value="reviews" disabled>
                                        Reviews
                                    </TabsTrigger>
                                </TabsList>
                                <div className="pt-4">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full mt-2" />
                                    <Skeleton className="h-4 w-3/4 mt-2" />
                                    <Skeleton className="h-4 w-5/6 mt-2" />
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>

                {/* Related Products Skeleton */}
                <div className="mt-16">
                    <Skeleton className="h-8 w-48 mb-6" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array(4)
                            .fill(null)
                            .map((_, i) => (
                                <div key={i} className="border rounded-lg overflow-hidden bg-background">
                                    <Skeleton className="aspect-square w-full" />
                                    <div className="p-4">
                                        <Skeleton className="h-5 w-3/4 mb-2" />
                                        <Skeleton className="h-4 w-full mb-2" />
                                        <div className="flex items-center justify-between mt-2">
                                            <Skeleton className="h-6 w-16" />
                                            <div className="flex items-center">
                                                {Array(5)
                                                    .fill(null)
                                                    .map((_, j) => (
                                                        <Skeleton key={j} className="h-4 w-4 mx-0.5" />
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Footer Skeleton */}
            <footer className="mt-auto border-t bg-background">
                <div className="container py-8 md:py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Array(4)
                            .fill(null)
                            .map((_, i) => (
                                <div key={i}>
                                    <Skeleton className="h-6 w-24 mb-4" />
                                    <div className="space-y-2">
                                        {Array(4)
                                            .fill(null)
                                            .map((_, j) => (
                                                <Skeleton key={j} className="h-4 w-32" />
                                            ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="mt-8 pt-8 border-t text-center">
                        <Skeleton className="h-4 w-64 mx-auto" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
