import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
      <div className="flex min-h-screen flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-40 border-b bg-white">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Essence</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-black">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-black">
                Shop
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-black">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-black">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-black">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
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

        {/* Hero Section */}
        <section className="relative">
          <div className="container flex flex-col md:flex-row items-center gap-8 py-12 md:py-24">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Discover Your <span className="text-amber-600">Signature</span> Scent
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Explore our curated collection of luxury perfumes from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Collections
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-amber-50 to-amber-100">
                <Image
                    src="https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg"
                    alt="Luxury perfume bottle"
                    fill
                    className="object-cover"
                    priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="bg-slate-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Floral", "Woody", "Oriental", "Fresh"].map((category) => (
                  <div key={category} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square bg-slate-100 relative">
                      <Image
                          src={`https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg`}
                          alt={category}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-medium text-white">{category}</h3>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Best Sellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Midnight Rose", price: "$120", rating: 5 },
                { name: "Ocean Breeze", price: "$95", rating: 4 },
                { name: "Amber Wood", price: "$150", rating: 5 },
                { name: "Velvet Orchid", price: "$135", rating: 4 },
              ].map((product) => (
                  <div key={product.name} className="group relative overflow-hidden rounded-lg border bg-white">
                    <div className="aspect-square bg-slate-50 relative">
                      <Image
                          src={`https://cocolux.com/images/cdn_images/2021/12/images/products/1641432657492-nuoc-hoa-jean-paul-gaultier-le-male-le-parfum-edp.jpeg`}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold">{product.price}</span>
                        <div className="flex items-center">
                          {Array(product.rating)
                              .fill(null)
                              .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                              ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah J.",
                  quote: "I found my signature scent here after years of searching. The quality is unmatched!",
                },
                {
                  name: "Michael T.",
                  quote:
                      "The selection is incredible. I appreciate the detailed descriptions that helped me choose the perfect gift.",
                },
                {
                  name: "Emma L.",
                  quote:
                      "Fast shipping and beautiful packaging. Every perfume I've purchased has exceeded my expectations.",
                },
              ].map((testimonial) => (
                  <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                            ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      <p className="font-medium">{testimonial.name}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-24 bg-amber-50">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Newsletter</h2>
              <p className="text-muted-foreground">
                Subscribe to receive updates on new arrivals, special offers, and fragrance tips.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="container py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Shop</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      All Perfumes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Gift Sets
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Customer Service</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Shipping & Returns
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black">
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
