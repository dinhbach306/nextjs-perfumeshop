"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Sample product data
const products = [
    {
        id: 1,
        name: "Midnight Rose",
        price: 120,
        rating: 5,
        category: "Floral",
        brand: "Essence",
        description: "A captivating blend of rose and midnight jasmine.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
        isNew: true,
    },
    {
        id: 2,
        name: "Ocean Breeze",
        price: 95,
        rating: 4,
        category: "Fresh",
        brand: "Aqua",
        description: "Fresh and invigorating scent inspired by the sea.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
        isBestSeller: true,
    },
    {
        id: 3,
        name: "Amber Wood",
        price: 150,
        rating: 5,
        category: "Woody",
        brand: "Luxe",
        description: "Rich amber and sandalwood notes for a sophisticated scent.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 4,
        name: "Velvet Orchid",
        price: 135,
        rating: 4,
        category: "Floral",
        brand: "Essence",
        description: "Luxurious blend of orchid and vanilla.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
        isBestSeller: true,
    },
    {
        id: 5,
        name: "Citrus Splash",
        price: 85,
        rating: 3,
        category: "Fresh",
        brand: "Aqua",
        description: "Energizing blend of citrus notes.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 6,
        name: "Spiced Vanilla",
        price: 110,
        rating: 4,
        category: "Oriental",
        brand: "Luxe",
        description: "Warm vanilla with exotic spices.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 7,
        name: "Cedar Noir",
        price: 140,
        rating: 5,
        category: "Woody",
        brand: "Noir",
        description: "Deep cedar notes with a hint of black pepper.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
        isNew: true,
    },
    {
        id: 8,
        name: "Peony Dream",
        price: 125,
        rating: 4,
        category: "Floral",
        brand: "Essence",
        description: "Delicate peony with fresh green notes.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 9,
        name: "Oud Royale",
        price: 195,
        rating: 5,
        category: "Oriental",
        brand: "Noir",
        description: "Luxurious oud with royal amber.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 10,
        name: "Lavender Fields",
        price: 90,
        rating: 4,
        category: "Fresh",
        brand: "Essence",
        description: "Calming lavender with hints of bergamot.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 11,
        name: "Musk Amber",
        price: 160,
        rating: 5,
        category: "Oriental",
        brand: "Luxe",
        description: "Sensual musk with warm amber.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
    {
        id: 12,
        name: "Pine Forest",
        price: 115,
        rating: 4,
        category: "Woody",
        brand: "Aqua",
        description: "Fresh pine with earthy undertones.",
        image: "https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg",
    },
]

// Categories, brands for filters
const categories = ["Floral", "Woody", "Oriental", "Fresh"]
const brands = ["Essence", "Aqua", "Luxe", "Noir"]

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [priceRange, setPriceRange] = useState([0, 200])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | null>(null)
    const [sortOption, setSortOption] = useState("featured")
    const [filteredProducts, setFilteredProducts] = useState(products)

    // Filter products based on all criteria
    useEffect(() => {
        let result = products

        // Search filter
        if (searchTerm) {
            result = result.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        // Price range filter
        result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

        // Category filter
        if (selectedCategories.length > 0) {
            result = result.filter((product) => selectedCategories.includes(product.category))
        }

        // Brand filter
        if (selectedBrands.length > 0) {
            result = result.filter((product) => selectedBrands.includes(product.brand))
        }

        // Rating filter
        if (selectedRating) {
            result = result.filter((product) => product.rating >= selectedRating)
        }

        // Sorting
        switch (sortOption) {
            case "price-asc":
                result = [...result].sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result = [...result].sort((a, b) => b.price - a.price)
                break
            case "rating":
                result = [...result].sort((a, b) => b.rating - a.rating)
                break
            default:
                // featured - keep original order
                break
        }

        setFilteredProducts(result)
    }, [searchTerm, priceRange, selectedCategories, selectedBrands, selectedRating, sortOption])

    // Toggle category selection
    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
        )
    }

    // Toggle brand selection
    const toggleBrand = (brand: string) => {
        setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
    }

    // Clear all filters
    const clearFilters = () => {
        setSearchTerm("")
        setPriceRange([0, 200])
        setSelectedCategories([])
        setSelectedBrands([])
        setSelectedRating(null)
        setSortOption("featured")
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-xl font-bold">
                            Essence
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Home
                        </Link>
                        <Link href="/products" className="text-sm font-medium transition-colors hover:text-foreground">
                            Shop
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Collections
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/login">
                            <Button variant="outline" size="sm">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button size="sm">Register</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">All Perfumes</h1>
                    <p className="text-muted-foreground mt-2">Discover our collection of luxury fragrances</p>
                </div>

                {/* Search and Sort Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search perfumes..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="md:hidden flex items-center gap-2">
                                    <SlidersHorizontal className="h-4 w-4" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <FilterSidebar
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    selectedCategories={selectedCategories}
                                    toggleCategory={toggleCategory}
                                    selectedBrands={selectedBrands}
                                    toggleBrand={toggleBrand}
                                    selectedRating={selectedRating}
                                    setSelectedRating={setSelectedRating}
                                    clearFilters={clearFilters}
                                    categories={categories}
                                    brands={brands}
                                />
                            </SheetContent>
                        </Sheet>

                        <Select value={sortOption} onValueChange={setSortOption}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="featured">Featured</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                <SelectItem value="rating">Top Rated</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Desktop Filters Sidebar */}
                    <div className="hidden md:block">
                        <FilterSidebar
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            selectedCategories={selectedCategories}
                            toggleCategory={toggleCategory}
                            selectedBrands={selectedBrands}
                            toggleBrand={toggleBrand}
                            selectedRating={selectedRating}
                            setSelectedRating={setSelectedRating}
                            clearFilters={clearFilters}
                            categories={categories}
                            brands={brands}
                        />
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Active Filters */}
                        {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedRating || searchTerm) && (
                            <div className="mb-6 flex flex-wrap gap-2">
                                {searchTerm && (
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        Search: {searchTerm}
                                        <button onClick={() => setSearchTerm("")} className="ml-1 rounded-full hover:bg-muted p-0.5">
                                            <X className="h-3 w-3" />
                                            <span className="sr-only">Remove search filter</span>
                                        </button>
                                    </Badge>
                                )}
                                {selectedCategories.map((category) => (
                                    <Badge key={category} variant="secondary" className="flex items-center gap-1">
                                        {category}
                                        <button onClick={() => toggleCategory(category)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                                            <X className="h-3 w-3" />
                                            <span className="sr-only">Remove {category} filter</span>
                                        </button>
                                    </Badge>
                                ))}
                                {selectedBrands.map((brand) => (
                                    <Badge key={brand} variant="secondary" className="flex items-center gap-1">
                                        {brand}
                                        <button onClick={() => toggleBrand(brand)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                                            <X className="h-3 w-3" />
                                            <span className="sr-only">Remove {brand} filter</span>
                                        </button>
                                    </Badge>
                                ))}
                                {selectedRating && (
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        {selectedRating}+ Stars
                                        <button onClick={() => setSelectedRating(null)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                                            <X className="h-3 w-3" />
                                            <span className="sr-only">Remove rating filter</span>
                                        </button>
                                    </Badge>
                                )}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="text-amber-600 hover:text-amber-700"
                                >
                                    Clear all
                                </Button>
                            </div>
                        )}

                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <h3 className="text-lg font-medium mb-2">No products found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                                    Clear all filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-auto border-t bg-background">
                <div className="container py-8 md:py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Shop</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        All Perfumes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Best Sellers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Gift Sets
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">About</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Shipping & Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Pinterest
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Essence. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
