"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ProductCard } from "@/components/product-card"
import { use } from "react";

interface PageProps {
    params: Promise<{ id: string }>
}

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
        longDescription:
            "Midnight Rose is a luxurious fragrance that captures the essence of roses blooming under the moonlight. This enchanting perfume opens with top notes of bergamot and blackcurrant, leading to a heart of Bulgarian rose and midnight jasmine. The base notes of amber, musk, and vanilla create a warm, lasting impression that lingers throughout the day and into the night.",
        details: {
            notes: "Top: Bergamot, Blackcurrant\nMiddle: Bulgarian Rose, Midnight Jasmine\nBase: Amber, Musk, Vanilla",
            volume: "50ml / 1.7 fl oz",
            ingredients:
                "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Hydroxycitronellal, Benzyl Alcohol, Benzyl Benzoate, Farnesol, Eugenol, Citral, Benzyl Cinnamate, Coumarin",
            howToUse:
                "Spray onto pulse points such as wrists, neck, and behind ears. For a longer-lasting fragrance, apply to freshly moisturized skin.",
        },
        images: [
            "/placeholder.svg?height=600&width=600&text=Midnight Rose 1",
            "/placeholder.svg?height=600&width=600&text=Midnight Rose 2",
            "/placeholder.svg?height=600&width=600&text=Midnight Rose 3",
            "/placeholder.svg?height=600&width=600&text=Midnight Rose 4",
        ],
        sizes: [
            { name: "30ml", price: 85 },
            { name: "50ml", price: 120 },
            { name: "100ml", price: 180 },
        ],
        reviews: [
            {
                id: 1,
                name: "Sarah J.",
                rating: 5,
                date: "March 15, 2023",
                comment:
                    "This perfume is absolutely divine! The rose notes are sophisticated and the scent lasts all day. I've received so many compliments when wearing it.",
            },
            {
                id: 2,
                name: "Michael T.",
                rating: 4,
                date: "February 3, 2023",
                comment:
                    "Bought this for my wife and she loves it. The scent is elegant and not overpowering. The bottle design is also very luxurious.",
            },
            {
                id: 3,
                name: "Emma L.",
                rating: 5,
                date: "January 22, 2023",
                comment:
                    "Midnight Rose has become my signature scent. It's perfect for both day and evening wear. The jasmine notes really shine through after a few hours.",
            },
        ],
        relatedProducts: [2, 4, 8, 9],
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
        image: "/placeholder.svg?height=300&width=300&text=Ocean Breeze",
        isBestSeller: true,
    },
    {
        id: 4,
        name: "Velvet Orchid",
        price: 135,
        rating: 4,
        category: "Floral",
        brand: "Essence",
        description: "Luxurious blend of orchid and vanilla.",
        image: "/placeholder.svg?height=300&width=300&text=Velvet Orchid",
        isBestSeller: true,
    },
    {
        id: 8,
        name: "Peony Dream",
        price: 125,
        rating: 4,
        category: "Floral",
        brand: "Essence",
        description: "Delicate peony with fresh green notes.",
        image: "/placeholder.svg?height=300&width=300&text=Peony Dream",
    },
    {
        id: 9,
        name: "Oud Royale",
        price: 195,
        rating: 5,
        category: "Oriental",
        brand: "Noir",
        description: "Luxurious oud with royal amber.",
        image: "/placeholder.svg?height=300&width=300&text=Oud Royale",
    },
]

export default function ProductDetailPage({ params }: PageProps) {
    const productId = use(params)
    const product = products.find((p) => p.id === Number(productId.id)) || products[0]

    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1].name : "50ml")

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }

    const relatedProducts = product.relatedProducts
        ? product.relatedProducts.map((id) => products.find((p) => p.id === id)).filter(Boolean)
        : []

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
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to all perfumes
                    </Link>
                </div>

                {/* Product Detail */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square relative rounded-lg overflow-hidden border bg-background">
                            {product.isNew && (
                                <div className="absolute top-2 left-2 z-10">
                                    <Badge variant="gold">New</Badge>
                                </div>
                            )}
                            {product.isBestSeller && (
                                <div className="absolute top-2 left-2 z-10">
                                    <Badge variant="gold">Best Seller</Badge>
                                </div>
                            )}
                            <Image
                                src={
                                    product.images
                                        ? product.images[selectedImage]
                                        : product.image || "/placeholder.svg?height=600&width=600"
                                }
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`aspect-square relative rounded-md overflow-hidden border ${
                                            selectedImage === index ? "ring-2 ring-amber-600" : ""
                                        }`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${product.name} ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-bold">{product.name}</h1>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <Heart className="h-5 w-5" />
                                        <span className="sr-only">Add to wishlist</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <Share2 className="h-5 w-5" />
                                        <span className="sr-only">Share</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center gap-4">
                                <div className="flex items-center">
                                    {Array(product.rating)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                                        ))}
                                    {Array(5 - product.rating)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-muted-foreground" />
                                        ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                  {product.reviews ? `${product.reviews.length} reviews` : "No reviews yet"}
                </span>
                            </div>
                            <p className="mt-4 text-2xl font-bold">
                                $
                                {product.sizes
                                    ? product.sizes.find((s) => s.name === selectedSize)?.price || product.price
                                    : product.price}
                            </p>
                            <p className="mt-4 text-muted-foreground">{product.description}</p>
                        </div>

                        <Separator />

                        {/* Size Selection */}
                        {product.sizes && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium">Size</h3>
                                    <Link href="#" className="text-sm text-amber-600 hover:text-amber-700">
                                        Size guide
                                    </Link>
                                </div>
                                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-3">
                                    {product.sizes.map((size) => (
                                        <Label
                                            key={size.name}
                                            htmlFor={`size-${size.name}`}
                                            className={`flex flex-col items-center justify-center rounded-md border p-3 cursor-pointer hover:bg-accent ${
                                                selectedSize === size.name ? "border-amber-600 bg-amber-50 dark:bg-amber-950" : ""
                                            }`}
                                        >
                                            <RadioGroupItem value={size.name} id={`size-${size.name}`} className="sr-only" />
                                            <span className="text-sm font-medium">{size.name}</span>
                                            <span className="mt-1 text-xs text-muted-foreground">${size.price}</span>
                                        </Label>
                                    ))}
                                </RadioGroup>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="space-y-4">
                            <h3 className="font-medium">Quantity</h3>
                            <div className="flex items-center">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={decrementQuantity}
                                    disabled={quantity <= 1}
                                    className="rounded-r-none"
                                >
                                    <Minus className="h-4 w-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <div className="flex-1 border-y px-4 py-2 text-center">{quantity}</div>
                                <Button variant="outline" size="icon" onClick={incrementQuantity} className="rounded-l-none">
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                            <Button variant="outline" className="flex-1">
                                <Heart className="mr-2 h-5 w-5" />
                                Add to Wishlist
                            </Button>
                        </div>

                        <Separator />

                        {/* Product Details Tabs */}
                        <Tabs defaultValue="description" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="details">Details</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="pt-4">
                                <p className="text-muted-foreground">{product.longDescription || product.description}</p>
                            </TabsContent>
                            <TabsContent value="details" className="pt-4">
                                {product.details ? (
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium">Notes</h4>
                                            <p className="mt-1 text-muted-foreground whitespace-pre-line">{product.details.notes}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Volume</h4>
                                            <p className="mt-1 text-muted-foreground">{product.details.volume}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Ingredients</h4>
                                            <p className="mt-1 text-muted-foreground">{product.details.ingredients}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">How to Use</h4>
                                            <p className="mt-1 text-muted-foreground">{product.details.howToUse}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-muted-foreground">No detailed information available.</p>
                                )}
                            </TabsContent>
                            <TabsContent value="reviews" className="pt-4">
                                {product.reviews && product.reviews.length > 0 ? (
                                    <div className="space-y-6">
                                        {product.reviews.map((review) => (
                                            <Card key={review.id}>
                                                <CardContent className="p-4 space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-medium">{review.name}</h4>
                                                        <span className="text-sm text-muted-foreground">{review.date}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        {Array(review.rating)
                                                            .fill(null)
                                                            .map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                                                            ))}
                                                        {Array(5 - review.rating)
                                                            .fill(null)
                                                            .map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                                            ))}
                                                    </div>
                                                    <p className="text-muted-foreground">{review.comment}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-muted-foreground">No reviews yet.</p>
                                        <Button variant="outline" className="mt-4">
                                            Write a Review
                                        </Button>
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts
                                .filter((product) => product?.image) // Ensure the product has an image
                                .map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                        </div>
                    </div>
                )}
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
